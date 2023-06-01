import styled from 'styled-components';

export const EventsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 15px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    row-gap: 30px;
  }
`;