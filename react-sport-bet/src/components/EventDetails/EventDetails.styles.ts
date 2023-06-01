import styled from 'styled-components';

export const StyledEvent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    margin-bottom: 25px;
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    color: #3c3333;
  }
`;

export const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  background-color: #efffaf;
  padding: 20px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const EventDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #3c3333;
`;

export const EventDetailsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #3c3333;
`;

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
`;

export const Versus = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  line-height: 20px;
  font-weight: 700;
  position: absolute;
  text-align: center;
  color: #3c3333;
  width: calc(100% - 70px);
`;