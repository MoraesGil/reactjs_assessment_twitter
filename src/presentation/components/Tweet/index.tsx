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
    return (
        <Container role="post">
            <Retweeted>
                <RetweetIcon />
                this is retweet
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Moraes Gil</strong>
                        <span>@moraesgil</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>

                    <Description>{post.content}</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
