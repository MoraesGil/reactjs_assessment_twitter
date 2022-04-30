import { MakeFeed } from '@/main/factories/tweets-list/tweets-list-factory';
import React from 'react';
import ProfilePage from '../ProfilePage';
import { Container } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <ProfilePage />
            <MakeFeed />
        </Container>
    );
};

export default Main;
