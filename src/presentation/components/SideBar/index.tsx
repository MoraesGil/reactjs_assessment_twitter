import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="You might like"
                        elements={[
                            <FollowSuggestion name="Johny Cadeiro" nickname="@Johnycadeiro" />,
                            <FollowSuggestion name="Elon Musk" nickname="@elonmusk" />,
                            <FollowSuggestion name="Spider Morales" nickname="@pidermorales" />,
                        ]}
                    />
                    <List
                        title="What’s happening"
                        elements={[<News />, <News />, <News />, <News />]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
};

export default SideBar;
