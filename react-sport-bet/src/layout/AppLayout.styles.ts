import styled from 'styled-components';
import logo from '@/assets/icons/cdnlogo.com_bet.svg';
import { Link } from 'react-router-dom';

export const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  background-color: #2036c4;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 20px center;
  color: #7c9bd3;
  //-webkit-background-clip: text;
  //-moz-background-clip: text;

  h1 {
    font-size: 36px;
    line-height: 40px;
    color: black;
  }
`;

export const AppMain = styled.main`
  padding: 20px;
`;


export const RootLink = styled(Link)`
  text-decoration: none;
`;