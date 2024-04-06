import styled from "styled-components"

export const FormContainer = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 30px 30px 0 30px;

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0;
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0;
    width: 500px;
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 343px;
  }
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0;
    width: 769px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0;
    width: 450px;
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 343px;
  }
`

export const Title = styled.p`
  align-self: start;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 45px;

  @media (max-width: 1109px) {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;  
  }
`

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 40px 30px;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 769px;
    dislay: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    grid-template-columns: unset;
    grid-template-rows: unset;
    gap: unset;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    dislay: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    grid-template-columns: unset;
    grid-template-rows: unset;
    gap: unset;
  }

  @media (max-width: 480px) {
    width: 343px;
    dislay: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    grid-template-columns: unset;
    grid-template-rows: unset;
    gap: unset;
  }
`

export const Input = styled.input`
  min-width: 505px;
  height: 65px;
  padding: 21px 0 22px 20px;
  border: 2px solid rgba(30, 56, 43, 0.2);
  border-radius: 10px;
  color: #1E382B;
  font-size: 16px;
  font-weight: 400;
  &:last-child {
    grid-column: 1 / -1;
    grid-row: 3;
    height: 144px;
    padding-right: 20px;
    flex-wrap: wrap;
  }

  @media (min-width: 769px) and (max-width: 1109px) {
    min-width: 0;
    width: 505px;
    margin-bottom: 15px;
    &:last-child {
      width: 505px;
      height: 65px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-width: 0;
    width: 450px;
    margin-bottom: 10px;
    &:last-child {
      width: 450px;
      height: 65px;
    }
  }

  @media (max-width: 480px) {
    min-width: 0;
    width: 343px;
    margin-bottom: 10px;
    &:last-child {
      width: 343px;
      height: 65px;
    }
  }
`

export const Responce = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1109px) {
    width: 505px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 375px;
  }
`

export const TitleResponce = styled.p`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 10px;
  
  @media (min-width: 769px) and (max-width: 1109px) {
    font-size: 26px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const TextResponce = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`