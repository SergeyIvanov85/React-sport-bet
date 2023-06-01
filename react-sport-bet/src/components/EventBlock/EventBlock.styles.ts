import styled from 'styled-components';
export const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 25px;
    @media screen and (min-width: 440px) {
      text-align: center;
    }
    @media screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 40px;
      margin-bottom: 40px;
      margin-left: 24px;
      text-align: left;
    }
    @media screen and (min-width: 840px) {
      text-align: center;
    }
  }
`;