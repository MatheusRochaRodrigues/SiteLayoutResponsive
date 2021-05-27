import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1.5px solid brown;

    max-width: 100%;
`;
export const Posta = styled.div`
    display: flex;
    align-items: center;

    color: red;
    font-size: 13px;

`;
export const Body = styled.div`
    display: flex;
    margin-top: 6px;
    position: relative;

`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;

`;
export const Head = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    >strong{
        margin-right: 5px;
        color: burlywood;
    }
    >ruby-span, time{
        color: gray;
    }

`;
export const Description = styled.p`
    margin-top: 20px;
    margin-bottom: 3px;
`;
export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    //height: min(285px, max(175px, 41vw));
    height: min(336px, max(275px, 46vw));

    background: darkgray;
    border-radius: 14px;
    transition: 0.4s;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }

    //fill

`;