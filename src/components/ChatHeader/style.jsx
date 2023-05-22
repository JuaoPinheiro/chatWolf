import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  background-color: #5d5b8d;
  color: #fff;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #0003;
  z-index: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 35px;
    height: 35px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }
`;

export const NameContent = styled.div`
  display: grid;
`;

export const Name = styled.span`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;
