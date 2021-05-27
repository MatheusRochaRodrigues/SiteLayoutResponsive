import React from 'react';
import { Container, Tab, Posts } from './Styles';
import Post from './Pos/Post'

export const Feed: React.FC = () => {
    return (
        <Container>
            <Tab>Post's</Tab>

            <Posts>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Posts>

        </Container>
    );

}

//export default Feed;