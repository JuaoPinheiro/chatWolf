import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  img{
    height: 50%;
    margin-bottom: -50px;
    

    @media screen and (max-width: 450px) {
      height: 30%;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;

  @media screen and (max-width: 315px) {
      font-size: 15px;
    }
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;

  @media screen and (max-width: 315px) {
      font-size: 13px;
    }
`;
