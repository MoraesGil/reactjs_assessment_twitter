import React, { useEffect, useState } from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

import { LoadTweetList } from '@/domain/usecases';

type Props = {
    loadTweetList: LoadTweetList;
};

const Feed: React.FC<Props> = ({ loadTweetList }: Props) => {
    const [tweets, setTweets] = useState<LoadTweetList.Model[] | null>();

    const handleError = (error: Error) => {
        alert(error.message);
    };

    useEffect(() => {
        loadTweetList
            .loadAll()
            .then((tweets) => setTweets(tweets))
            .catch((e: Error) => handleError(e));
    }, []);

    return (
        <Container>
            <Tab>Tweets</Tab>

            <Tweets data-testid="tweet-list">
                {!!tweets &&
                    tweets.map((tweet: LoadTweetList.Model) => (
                        <Tweet key={tweet.id} post={tweet} />
                    ))}
            </Tweets>
        </Container>
    );
};

export default Feed;
