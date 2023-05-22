import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;
  &.me {
    > div {
      background-color: #0092fa;
      border-radius: 10px 0px 10px 10px;
      color: #fff;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: #939393;
  color: #fff;
  border-radius: 0px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;

  .midia {
    max-width: 100%;
    height: auto;
  }
`;

export const MediaImage = styled.img`
  cursor: pointer;
  max-width: 900px;
`;

export const Message = styled.span`
  font-size: 15px;
  margin: 5px 40px 5px 5px;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: #c5c5c5;
  text-align: right;
  height: 15px;
  margin: 5px 5px 0;
`;
