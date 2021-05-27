import React from 'react';
import { Container, Header, Info, Page } from './styles';

import ProfilePage from './ProfilePage/profilePage';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <Info>
                    <strong>WEB PorTiFolIo</strong>
                    <span> Teste </span>
                </Info>
            </Header>

            <ProfilePage />

            <Page>

            </Page>

        </Container>
    );
};

export default Main;