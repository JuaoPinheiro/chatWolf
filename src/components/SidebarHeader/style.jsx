import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  background-color: #3e3c61;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;

  @media screen and (max-width: 470px) {
    flex-direction: column;
    gap: 10px;
    height: 90px;
  }
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;

  @media screen and (max-width: 470px) {
    width: 25px;
    height: 25px;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;

    @media screen and (max-width: 470px) {
      width: 20px;
      height: 20px;
    }
  }
`;
