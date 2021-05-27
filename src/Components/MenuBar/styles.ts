import styled from 'styled-components';


export const Container = styled.div`
    display: none;
    
    @media(min-width: 829px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }

`;
export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    //@media(min-width: 1280px)
    @media(min-width: 1200px){
        align-items: flex-start;
    }

    >h2{
        font-size: 28px;
        cursor: pointer;
        margin-bottom: 13px;
        >span{
            display: none;

            @media(min-width: 1000px){
                display: inline;
                margin-left: 4px;
                font-weight: bold;
                font-size: 1.3em;
                color: green;
            }
        }
        transition: 0.3s;
        &:hover{
            color: green;
        }
        &.active{
            color: brown;
        }
    }
    
`;