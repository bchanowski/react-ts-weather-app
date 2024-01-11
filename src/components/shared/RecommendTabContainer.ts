import styled from "styled-components";

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 80svh;
  width: 25svw;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 15px;
  color: #e9e3b4;
  overflow: scroll;
  @media screen and (max-width: 1050px) {
    width: 70svw;
    height: auto;
    max-height: 700px;
    padding: 25px;
    margin-bottom: 20px;
  }
`;
