import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';
import { ProfileModalProvider } from '@/presentation/hooks/useProfileModal';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <ProfileModalProvider>
                <Wrapper>
                    <MenuBar />
                    <Main />
                    <SideBar />
                </Wrapper>
            </ProfileModalProvider>
        </Container>
    );
};

export default Layout;
