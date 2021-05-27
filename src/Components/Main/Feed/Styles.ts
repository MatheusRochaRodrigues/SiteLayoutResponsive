import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;

    font-weight: bold;
    font-size: 19px;
    
    outline: 0;
    cursor: pointer;

    color: red;
    border-bottom: 2px solid brown;
    //blueviolet
    transition: 1s;

    &:hover{
       // background-color: var(--primary);
        opacity: 0.2;

        //background: ;
        
        color: deeppink;
    }
    &:active{
        color: brown;
    }

`;

export const Posts = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0; //experimenta usar flex shrink quandoa s coisas estiverem exprimidias na tela, evita q as coisa fiquem zoadas no celular tb
    //experimenta tirar e colocar




`;