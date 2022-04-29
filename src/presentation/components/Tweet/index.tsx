import React from 'react';
import { LoadTweetList } from '@/domain/usecases';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

type Props = {
    post: LoadTweetList.Model;
};

const Tweet: React.FC<Props> = ({ post }) => {
    const postDateFormat = (date: Date) =>
        date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });

    return (
        <Container role="post">
            {!!post.retweet && (
                <Retweeted>
                    <RetweetIcon />
                    this is retweet
                </Retweeted>
            )}

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>{post.user.name}</strong>
                        <span>{post.user.username}</span>
                        <Dot />
                        <time>{postDateFormat(post.date)}</time>
                    </Header>

                    <Description>{post.content}</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            {post.comments}
                        </Status>
                        <Status>
                            <RetweetIcon />
                            {post.retweets}
                        </Status>
                        <Status>
                            <LikeIcon />
                            {post.hearts}
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
