import styled from "styled-components";

import cross from '@/assets/icons/cross.svg';

export const MessageWrapper = styled.div`
  display: flex;
  position: relative;
  background: rgb(109,105,170);
  background: linear-gradient(90deg, rgba(109,105,170,1) 0%, rgba(71,71,144,1) 46%, rgba(0,255,248,1) 100%);
  border-radius: 20px;
`;

export const MessageText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: black;
  margin: 0;
  padding: 15px 40px 15px 20px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  }
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  background-color: rgba(60, 51, 51, 0.5);
  background-image: url(${cross});
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: center center;
  position: absolute;
  top: 15px;
  right: 10px;
`;
