import React from 'react';
import styled from 'styled-components';

export const profilePage = styled.div`

 background-color: darkgray;

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    //align-items: flex-start;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

`;
export const Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 214px);

    background-color: darkgray;


    position: relative;

    transition: 0.4s;
    
    &:hover{
        opacity: 0.7;
    }

`;
export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid black;
    background-color: green;
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;

    transition: 0.5s;
    
    &:hover{
        background-color: gray;
    }

`;
export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;
   // align-items: flex-start;
   text-align: left;

   position: relative;

   >h1{
       color: khaki;
   }
   >h2{
       color: lavender;

       >span{
           margin-left: 1px;
           //font-size: 0.9em;
           color: brown;
       }
   }

   >a{
       color: lavenderblush;
       text-decoration: none;
   }

   >ul{
       list-style: none;
       margin-top: 10px;
       margin-bottom: 10px;

       
       >li{
           font-size: 15px;
           color: darkslategray;
           
       }
   }

`;
export const Followage = styled.div`
    margin-top: 7px;
    >span{
        color: white;
        >strong{
            margin-left: 2px;
            color: green;
            font-size: 1.2em;
        }
        
    }

`;