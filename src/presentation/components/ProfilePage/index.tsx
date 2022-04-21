import React, { useState } from 'react';

import Feed from '../Feed';
import Modal from 'react-modal';
import {
    Container,
    Header,
    BackIcon,
    ProfileInfo,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
    ProfileModalStyleObject,
} from './styles';

const ProfilePage: React.FC = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <Container>
            <Modal
                preventScroll={modalIsOpen}
                onRequestClose={handleCloseModal}
                isOpen={modalIsOpen}
                style={ProfileModalStyleObject}
            >
                <Header>
                    <button onClick={() => handleCloseModal()}>
                        <BackIcon />
                    </button>

                    <ProfileInfo>
                        <strong>Gilberto Moraes</strong>
                        <span>612 Tweets</span>
                    </ProfileInfo>
                </Header>

                <Banner>
                    <Avatar />
                </Banner>

                <ProfileData>
                    <EditButton outlined>Edit profile</EditButton>

                    <h1>Gilberto Moraes</h1>
                    <h2>@moraesgil2</h2>

                    <p>
                        Frontend Developer at <a href="https://www.indeed.com/">@indeed</a>
                    </p>

                    <ul>
                        <li>
                            <LocationIcon />
                            São Paulo, Brazil
                        </li>
                        <li>
                            <CakeIcon />
                            Birth date · December 24, 1990
                        </li>
                    </ul>

                    <Followage>
                        <span>
                            Following <strong>94</strong>
                        </span>
                        <span>
                            <strong>672 </strong> Followers
                        </span>
                    </Followage>
                </ProfileData>
            </Modal>
        </Container>
    );
};

export default ProfilePage;
