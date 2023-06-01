import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 40px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px 0;
    row-gap: 60px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    column-gap: 120px;
  }
`;