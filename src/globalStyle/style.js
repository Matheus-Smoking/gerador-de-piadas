import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0 auto;
    @import url('https://fonts.googleapis.com/css?family=Kalam|Roboto:400,500i,700&display=swap');
  }
`

export const Container = styled.section`
    background-color: #323c5c;
    padding: 17px 0;
    min-height:98vh;
`;

export const Hero = styled.div`
    max-width:900px;
    margin: 0 auto;
`

export const Img = styled.img`
    display:block;
    margin:0 auto;
`

export const Title = styled.h1`
    font-family: 'Kalam', cursive;
    color: #ffe000;
    font-size: 25px;
    margin: 0 auto;
    text-align: center;
    @media screen and (min-width: 992px) {
        font-size: 35px;
    }
`

export const Name = styled.span`
    display: block;
    color: #ff0000;
    font-size: 30px;
    padding-left: 9%;
    @media screen and (min-width: 992px) {
        font-size: 60px;
    }
`

export const Menu = styled.ul`
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    max-width:100%;
    justify-content:center;
    aling-itens:center;
    padding:0;
`

export const Item = styled.li`
    font-family: 'Roboto', sans-serif;
    font-size:20px;
    color: #fff;
    background-color: #323c5c;
    padding: 5px 10px;
    text-transform:uppercase;
    font-weight:bold;
    cursor: pointer;
    transition: 0.5s;
    position:relative;
    &:hover{
        color: #ffe000;
    }
    &:before {
        content: "";
        background: #ffe000;
        width: 0;
        height: 1px;
        position: absolute;
        bottom: 0;
        left:0;
        rigth:0;
        transition: 0.5s;
    }
    &:hover:before {
        content: "";
        width: 100%;
    }
    &.active{
        color: #ffe000;
        :before {
            content: "";
            width: 100%;
        }
    }
`;

export const Section = styled.div`
    font-family: 'Roboto',sans-serif;
    max-width: 95%;
    margin: 50px auto;
    width: 500px;
`;

export const Joke = styled.div`
    color:#fff;
    padding:30px;
    text-align:center;
    font-size:25px;
    font-weight:400;
    border:2px solid #f00;
`;

export const Category = styled.p`
    width: 500px;
    max-width: 95%;
    color: #fff;
    text-align: center;
    border: 1px solid #fff;
    padding: 7px 0;
    text-transform: uppercase;
    transition: 0.2s;
    cursor: pointer;
    margin: 45px auto;
`;

export const Next = styled.p`
    width: 100px;
    float: right;
    color: #f00;
    text-align: center;
    border: 1px solid #f00;
    padding: 7px;
    text-transform: uppercase;
    transition: 0.2s;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color:#f00;
    }
`;
