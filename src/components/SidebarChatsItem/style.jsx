import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px 20px;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }
  &.active {
    background-color: #625f9a;
  }
`;

export const Name = styled.span`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;
