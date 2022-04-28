import faker from 'faker';
import { LoadTweetList } from '../load-tweets-list';

export const mockMyUser = {
    id: 111333222,
    name: 'Gilberto Moraes',
    username: 'MoraesGil2',
};

export const mockTweetModel = (): LoadTweetList.Model => {
    const itsMe = faker.datatype.boolean();
    return {
        id: faker.datatype.number(),
        following: !itsMe && faker.datatype.boolean(),
        user: itsMe
            ? mockMyUser
            : {
                  id: faker.datatype.number(),
                  name: faker.internet.userName(),
                  username: faker.internet.userName(),
              },
        date: faker.datatype.datetime(),
        content: faker.lorem.text(),
        comments: faker.datatype.number({ max: 999 }),
        retweets: faker.datatype.number({ max: 999 }),
        hearts: faker.datatype.number({ max: 999 }),
    };
};

export const mockReTweetModel = (sourceTweet: LoadTweetList.Model): LoadTweetList.Model => ({
    id: faker.datatype.number(),
    following: faker.datatype.boolean(),
    retweet: sourceTweet,
    user: {
        id: faker.datatype.number(),
        name: faker.internet.userName(),
        username: faker.internet.userName(),
    },
    date: faker.datatype.datetime(),
    content: '',
    comments: 0,
    retweets: 0,
    hearts: 0,
});

export const mockQuoteTweetModel = (sourceTweet: LoadTweetList.Model): LoadTweetList.Model => ({
    id: faker.datatype.number(),
    following: faker.datatype.boolean(),
    quoteTweet: sourceTweet,
    user: {
        id: faker.datatype.number(),
        name: faker.internet.userName(),
        username: faker.internet.userName(),
    },
    date: faker.datatype.datetime(),
    content: faker.lorem.text(),
    comments: faker.datatype.number({ max: 5 }),
    retweets: faker.datatype.number({ max: 5 }),
    hearts: faker.datatype.number({ max: 5 }),
});

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
