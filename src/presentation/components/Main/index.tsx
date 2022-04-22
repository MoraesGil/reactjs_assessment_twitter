import React from 'react';
import Feed from '../Feed';
import ProfilePage from '../ProfilePage';
import { Container } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <ProfilePage />
            <Feed />
        </Container>
    );
};

export default Main;
