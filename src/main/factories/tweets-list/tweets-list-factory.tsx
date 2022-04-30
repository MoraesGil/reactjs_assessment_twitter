import React from 'react';
import { LoadLocalTweets } from '@/app/usecases/load-tweets/load-local-tweets';
import Feed from '@/presentation/components/Feed';

export const MakeFeed: React.FC = () => {
    const localOrigin = new LoadLocalTweets();

    return <Feed loadTweetList={localOrigin} />;
};
