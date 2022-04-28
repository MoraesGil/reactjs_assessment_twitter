import { UserModel } from '@/domain/models/user-model';

export type TweetModel = {
    id: number;
    retweet?: TweetModel;
    quoteTweet?: TweetModel;
    user: UserModel;
    date?: Date;
    content?: string;
    comments?: number;
    retweets?: number;
    hearts?: number;
};
