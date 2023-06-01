import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const EventWrapper = styled.li`
  width: 100%;
  list-style: none;
` ;
  
  export const EventLink = styled(Link) `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  list-style: none;
  background: #efffaf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 15px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  color: #3c3333;
  text-decoration: none;
`;



export const EventContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
  color: #3c3333;
`;

export const Score = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  position: absolute;
  text-align: center;
  color: #3c3333;
  width: calc(100% - 70px);
`;