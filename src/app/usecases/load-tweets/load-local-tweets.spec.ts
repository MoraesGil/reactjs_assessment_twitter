import { TweetModel } from '@/domain/models/tweet-model';
import { LoadLocalTweets } from './load-local-tweets';

//SUT === system under test
const makeSut = () => ({ sut: new LoadLocalTweets() });

describe('LocalLoadTweets', () => {
    test('Should returns a list of tweets', async () => {
        const { sut } = makeSut();

        const result = await sut.loadAll();

        expect(result.length).toBeGreaterThanOrEqual(1);
    });

    test('Should returns a list of tweets with retweets', async () => {
        const { sut } = makeSut();

        const result = await sut.loadAll();

        const retweets = result.filter((t: TweetModel) => !!t.retweet);

        expect(retweets.length).toBeGreaterThanOrEqual(1);
    });

    test('Should returns a list of tweets with quoteTweets', async () => {
        const { sut } = makeSut();

        const result = await sut.loadAll();

        const quoteTweets = result.filter((t: TweetModel) => !!t.quoteTweet);

        expect(quoteTweets.length).toBeGreaterThanOrEqual(1);
    });
});
