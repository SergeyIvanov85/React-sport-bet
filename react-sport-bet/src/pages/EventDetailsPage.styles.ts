import styled from 'styled-components';

import backArrow from '@/assets/icons/back.svg';

export const BackButton = styled.button`
  height: 40px;
  cursor: pointer;
  margin: 0;
  padding: 0;
  padding-left: 40px;
  border: 0;
  background-color: #fff;
  background-image: url(${backArrow});
  background-repeat: no-repeat;
  background-position: left center;
  span {
    font-family: 'Noto Serif', serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;