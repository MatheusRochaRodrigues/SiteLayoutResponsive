import React from 'react';
import { Container, Posta, Body, Content, Head, Description, ImageContent } from './Styles'

const Posts: React.FC = () => {
    return (
        <Container>
            <Posta>Postado</Posta>
            <Body>
                <Content>
                    <Head></Head>

                    <ImageContent></ImageContent>
                    <Description>POSTADO E PRONTO BIXO</Description>
                </Content>
            </Body>

        </Container>
    );
}

export default Posts;