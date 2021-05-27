import React from 'react';

import { Container, Banner, Avatar, ProfileData, Followage } from './styles'
import { Feed } from '../Feed/Feed'

const ProfilePage: React.FC = () => {
    return (

        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>

                <h1>Matheus Rocha Rodrigues</h1>
                <h2>Insta: <span>DOnt</span></h2>

                <p>Portifolio</p>
                <ul>
                    <li>
                        Aragarças, Brasil
                    </li>
                    <li>
                        Nascido em 1 de Novembro de 2001.
                    </li>
                </ul>

                <Followage>
                    <span>
                        ola <strong> Mundo </strong>
                    </span>
                </Followage>

            </ProfileData>

            <Feed>

            </Feed>
        </Container>

    );
}

export default ProfilePage;