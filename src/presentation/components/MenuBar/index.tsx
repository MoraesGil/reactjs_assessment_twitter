import { useProfileModal } from '@/presentation/hooks/useProfileModal';
import React from 'react';

import Button from '../Button';

import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
    const { handleOpenModal } = useProfileModal();
    return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton className="active">
                    <HomeIcon />
                    <span> HOME </span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notifications</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Messages</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Bookmarks</span>
                </MenuButton>

                <MenuButton onClick={() => handleOpenModal()}>
                    <ProfileIcon />
                    <span>Profile</span>
                </MenuButton>

                <Button>
                    <span>Tweet</span>
                </Button>
            </Topside>

            <Botside>
                <Avatar />

                <ProfileData onClick={() => handleOpenModal()}>
                    <strong>Gilberto Moraes</strong>
                    <span>@moraesgil2</span>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    );
};

export default MenuBar;
