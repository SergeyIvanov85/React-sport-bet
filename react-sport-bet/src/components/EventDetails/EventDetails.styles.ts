import styled from 'styled-components';

export const StyledEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    color: #3c3333;
    @media screen and (min-width: 768px) {
      font-size: 28px;
      margin-bottom: 40px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
`;

export const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  max-width: 280px;
  background: rgb(169,215,249);
  background: linear-gradient(90deg, rgba(169,215,249,1) 15%, rgba(147,197,210,1) 80%, rgba(169,235,240,1) 100%);
  padding: 20px 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding: 20px;
    max-width: 500px;
  }
  @media screen and (min-width: 1200px) {
    padding: 40px;
    max-width: 700px;
  }
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
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
    line-height: 28px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const EventDetailsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #3c3333;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  @media screen and (min-width: 768px) {
    row-gap: 20px;
  }
  @media screen and (min-width: 1200px) {
    row-gap: 30px;
  }
  img {
    width: 70px;
    height: 70px;
    @media screen and (min-width: 768px) {
      width: 120px;
      height: 120px;
    }
    @media screen and (min-width: 1200px) {
      width: 180px;
      height: 180px;
    }
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
  width: 100px;
  left: calc(50% - 50px);
  @media screen and (min-width: 1200px) {
    font-size: 38px;
    line-height: 44px;
  }
`;


export const BetForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding: 15px 40px;
  @media screen and (min-width: 768px) {
    padding: 30px 40px;
    row-gap: 30px;
  }
`;

export const RadioBets = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 25px;
  @media screen and (min-width: 768px) {
    column-gap: 50px;
  }
  input {
    display: none;
    &:checked + label {
      background: rgb(169,215,249);
      background: linear-gradient(90deg, rgba(169,215,249,1) 15%, rgba(147,197,210,1) 80%, rgba(169,235,240,1) 100%);
    }
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    border: 1px solid rgba(60, 51, 51, 0.5);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 15px;
    text-transform: uppercase;
    color: #3c3333;
    @media screen and (min-width: 768px) {
      width: 100px;
      height: 100px;
      font-size: 16px;
      line-height: 20px;
      padding: 10px;
      border-radius: 50%;
    }
  }
`;
export const BetInput = styled.input`
  width: 145px;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  padding: 10px;
  text-align: right;
  color: #3c3333;
  border: 1px solid rgba(60, 51, 51, 0.5);
  border-radius: 10px 0px 0px 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    padding: 20px;
  }
`;

export const BetPoints = styled.span`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  padding: 9px 5px;
  color: #3c3333;
  background: rgb(169,215,249);
  background: linear-gradient(90deg, rgba(169,215,249,1) 15%, rgba(147,197,210,1) 80%, rgba(169,235,240,1) 100%);
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: rgba(60, 51, 51, 0.5);
  border-radius: 0px 10px 10px 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    padding: 19.5px 10px;
  }
`;
export const BetButton = styled.button`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #efffaf;
  background: rgb(109,105,170);
  background: linear-gradient(90deg, rgba(109,105,170,1) 0%, rgba(71,71,144,1) 46%, rgba(0,255,248,1) 100%);
  text-align: center;
  text-transform: uppercase;
  padding: 10px 15px;
  border: 1px solid rgba(60, 51, 51, 0.5);
  border-radius: 10px;
  transition: all 0.2s ease-in;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    padding: 20px 35px;
  }
  &:disabled {
    pointer-events: none;
    background: rgba(60, 51, 51, 0.5);
  }
  &:active {
    color: #3c3333;
    background-color: #efffaf;
  }
`;