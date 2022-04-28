import { LoadTweetList } from '@/domain/usecases/load-tweets-list';
import { mockTweetListModel } from '@/domain/usecases/mocks/mock-tweet-list';

export class LoadLocalTweets implements LoadTweetList {
    async loadAll(): Promise<LoadTweetList.Model[]> {
        return mockTweetListModel();
    }
}
