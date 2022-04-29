import { UserModel } from '@/domain/models/user-model';
import faker from 'faker';
import { LoadTweetList } from '../load-tweet-list';

const snakeCase = (string) => {
    return string
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join('_');
};

export const mockMyUser = {
    id: 111333222,
    name: 'Gilberto Moraes',
    username: '@MoraesGil2',
};

export const mockUserModel = (itsMe: boolean): UserModel => {
    const name = `${faker.name.findName()} ${faker.name.lastName()}`;
    const name_array = name.split(' ');
    const name_first = name_array[0];
    const name_last = name_array[name_array.length - 1];
    const new_name = `${name_first} ${name_last}`;

    const username = `@${snakeCase(new_name)}`;

    return itsMe
        ? mockMyUser
        : {
              id: faker.datatype.number(),
              name,
              username,
          };
};

export const mockTweetModel = (): LoadTweetList.Model => {
    const itsMe = faker.datatype.boolean();

    return {
        id: faker.datatype.number(),
        following: !itsMe && faker.datatype.boolean(),
        user: mockUserModel(itsMe),
        date: faker.datatype.datetime(),
        content: faker.lorem.text(),
        comments: faker.datatype.number({ max: 999 }),
        retweets: faker.datatype.number({ max: 999 }),
        hearts: faker.datatype.number({ max: 999 }),
    };
};

export const mockReTweetModel = (sourceTweet: LoadTweetList.Model): LoadTweetList.Model => {
    const itsMe = faker.datatype.boolean();

    return {
        id: faker.datatype.number(),
        following: faker.datatype.boolean(),
        retweet: sourceTweet,
        user: mockUserModel(itsMe),
        date: faker.datatype.datetime(),
        content: '',
        comments: 0,
        retweets: 0,
        hearts: 0,
    };
};

export const mockQuoteTweetModel = (sourceTweet: LoadTweetList.Model): LoadTweetList.Model => {
    const itsMe = faker.datatype.boolean();

    return {
        id: faker.datatype.number(),
        following: faker.datatype.boolean(),
        quoteTweet: sourceTweet,
        user: mockUserModel(itsMe),
        date: faker.datatype.datetime(),
        content: faker.lorem.text(),
        comments: faker.datatype.number({ max: 5 }),
        retweets: faker.datatype.number({ max: 5 }),
        hearts: faker.datatype.number({ max: 5 }),
    };
};

export const mockTweetListModel = (): LoadTweetList.Model[] => {
    const sourceTweet = mockTweetModel();

    return faker.helpers.shuffle([
        mockQuoteTweetModel(sourceTweet),
        mockReTweetModel(sourceTweet),
        mockTweetModel(),
        mockTweetModel(),
        mockReTweetModel(sourceTweet),
        mockTweetModel(),
        mockTweetModel(),
        mockQuoteTweetModel(sourceTweet),
    ]);
};

export class LoadTweetListSpy implements LoadTweetList {
    callsCount = 0;
    tweets = mockTweetListModel();

    loadAll = (): Promise<LoadTweetList.Model[]> => {
        this.callsCount++;
        return Promise.resolve(this.tweets);
    };
}
