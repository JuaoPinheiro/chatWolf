import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: #d0d0d0;
  display: flex;
  box-shadow: 2px 1px 3px 1px #0003;
  svg {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    color: #3e3c61;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  button {
    background-color: #3e3c61;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-around;
  gap: 5px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 80%;
  height: 45px;
  margin-right: 10px;
`;