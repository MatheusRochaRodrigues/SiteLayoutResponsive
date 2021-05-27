import React from 'react';
import { Container, Topside } from './styles'

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Topside>
                <h2>Teste<span>15</span></h2>
                <h2>Home<span>224</span></h2>
                <h2>Span<span>3455</span></h2>
                <h2 className="active">New<span>412</span></h2>
            </Topside>

        </Container>
    );
}

export default MenuBar;