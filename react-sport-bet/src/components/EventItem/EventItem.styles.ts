import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const EventWrapper = styled.li`
  width: 100%;
  max-width: 400px;
  list-style: none;
  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
` ;
  
  export const EventLink = styled(Link) `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  list-style: none;
    background: rgb(109,105,170);
    background: linear-gradient(90deg, rgba(109,105,170,1) 0%, rgba(71,71,144,1) 46%, rgba(0,255,248,1) 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 15px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  color: #3c3333;
  text-decoration: none;
    @media screen and (min-width: 768px) {
      padding: 30px;
    }
`;



export const EventContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
  color: #3c3333;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Score = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  position: absolute;
  text-align: center;
  color: #3c3333;
  width: 50px;
  left: calc(50% - 25px);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;