import { TweetModel } from '../models/tweet-model';

export interface LoadTweetList {
    loadAll: () => Promise<LoadTweetList.Model[]>;
}

export namespace LoadTweetList {
    export type Model = TweetModel;
}
