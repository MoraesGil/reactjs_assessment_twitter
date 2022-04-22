import React from 'react';

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

const Tweet: React.FC = () => {
    return (
        <Container>
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

                    <Description>
                        lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum recusandae officia nesciunt corrupti, optio vero deserunt reiciendis
                        reprehenderit aspernatur veritatis laborum, dignissimos fugiat quos dolores
                        quod commodi aperiam! Illum, sint?
                    </Description>

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
