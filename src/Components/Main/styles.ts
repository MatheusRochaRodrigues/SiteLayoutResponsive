import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction:column;

//width: min(601px, 100%);
width: min(701px, 100%);

//background-color: red;

@media(min-width: 600px){
    border-left: 2px solid var(--outline);
    border-right: 2px solid var(--outline);
}
`;
export const Header = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    background-color: #151515;

    display: flex;
    align-items:center;

    text-align:left;

    padding: 8px 0 9px 13px;

    border-bottom: 2.5px solid var(--outline);

`;
export const Info = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;

    >strong{
        font-size: 16px;
        color: var(--primary);
        text-shadow: 3px 2px black;
    }
    >span{

        font-size: 13px;
        color: var(--opasy);
    }

`;
export const Page = styled.div``;