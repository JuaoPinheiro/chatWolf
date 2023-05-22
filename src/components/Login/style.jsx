import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 300px;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  .div-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h1 {
      color: black;
    }

    .pe {
      background: linear-gradient(
        90deg,
        rgba(36, 0, 168, 1) 0%,
        rgba(108, 40, 255, 1) 71%
      );

      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }

  @media screen and (max-width: 310px) {
    font-size: 8px;
  }
`;

export const Button = styled.button`
  outline: none;
  border: 2px solid #6c28ff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 230px;
  border-radius: 5px;
  height: 60px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 300px) {
    width: 180px;
    height: 30px;
    font-size: 10px;

    .logo-google {
      width: 20px;
    }
  }
`;
