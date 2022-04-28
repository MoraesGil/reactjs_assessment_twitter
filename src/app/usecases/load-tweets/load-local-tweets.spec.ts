import { LoadLocalTweets } from './load-local-tweets';

//SUT === system under test
const makeSut = () => ({ sut: new LoadLocalTweets() });

describe('LocalLoadTweets', () => {
    test('Should returns a list of tweets', async () => {
        const { sut } = makeSut();

        const result = await sut.loadAll();

        expect(result.length).toBeGreaterThanOrEqual(1);
    });
});
