import faker from 'faker';
import { LoadTweetList } from '../load-tweets-list';

export const mockTweetModel = (): LoadTweetList.Model => ({
    id: faker.datatype.number(),
    user: {
        id: faker.datatype.number(),
        name: faker.internet.userName(),
        username: faker.internet.userName(),
    },
    date: faker.datatype.datetime(),
    content: faker.lorem.text(),
    comments: faker.datatype.number({ max: 999 }),
    retweets: faker.datatype.number({ max: 999 }),
    hearts: faker.datatype.number({ max: 999 }),
});

export const mockReTweetModel = (sourceTweet: LoadTweetList.Model): LoadTweetList.Model => ({
    id: faker.datatype.number(),
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

export const mockTweetListModel = (): LoadTweetList.Model[] => {
    const retweet = mockTweetModel();

    return [
        mockReTweetModel(retweet),
        mockTweetModel(),
        mockTweetModel(),
        mockReTweetModel(retweet),
        mockTweetModel(),
        mockTweetModel(),
    ];
};
