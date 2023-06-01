import styled from 'styled-components';
import logo from '@/assets/icons/cdnlogo.com_bet.svg';
import { Link } from 'react-router-dom';

export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(109,105,170);
  background: linear-gradient(90deg, rgba(109,105,170,1) 0%, rgba(71,71,144,1) 46%, rgba(0,255,248,1) 100%);
  color: #7c9bd3;
  //-webkit-background-clip: text;
  //-moz-background-clip: text;
  @media screen and (min-width: 768px) {
    font-size: 42px;
    line-height: 48px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 51px;
    line-height: 60px;
  }
  h1 {
    font-size: 36px;
    line-height: 40px;
    color: black;
  }
`;

export const AppMain = styled.main``;

export const DefaultWrapper = styled.div`
  padding: 15px 20px;
  @media screen and (min-width: 768px) {
    padding: 20px 80px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 100px;
  }
`;

export const LogoImage = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
    background-size: 48px 48px;
  }
  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    background-size: 60px 60px;
  }
`;

export const RootLink = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 768px) {
    left: 80px;
  }
  @media screen and (min-width: 1200px) {
    left: 120px;
  }
`;