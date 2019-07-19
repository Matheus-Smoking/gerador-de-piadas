import styled from 'styled-components';

export const Container = styled.section`
@import url('https://fonts.googleapis.com/css?family=Kalam|Roboto:400,500i,700&display=swap');
    background-color: #323c5c;
    padding: 17px 0;
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
    font-size: 35px;
    margin: 0 auto;
    text-align: center;
`

export const Name = styled.span`
    display: block;
    color: #ff0000;
    font-size: 60px;
    padding-left: 97px;
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
    padding: 10px;
    margin: 2px 0;
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
`;
