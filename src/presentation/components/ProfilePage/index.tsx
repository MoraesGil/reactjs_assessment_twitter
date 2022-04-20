import React from 'react';

import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
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

            <Feed />
        </Container>
    );
};

export default ProfilePage;
