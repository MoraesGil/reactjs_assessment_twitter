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

export const mockTweetListModel = (): LoadTweetList.Model[] => [
    mockTweetModel(),
    mockTweetModel(),
    mockTweetModel(),
    mockTweetModel(),
    mockTweetModel(),
];
