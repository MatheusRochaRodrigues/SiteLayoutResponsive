import React from 'react';

import Main from '../Main/index'
import { Container, Wrapper } from './styles'

import MenuBar from '../MenuBar/index'

const layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <MenuBar></MenuBar>
                <Main></Main>
                {/* <SideBar></SideBar> */}
            </Wrapper>
        </Container>
    );
};

export default layout;