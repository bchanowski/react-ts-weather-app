import styled from "styled-components";

export const FutureDataContainer = styled.div`
  background-color: rgb(0, 0, 0, 0.1);
  height: 50%;
  width: 70svw;
  border-radius: 15px;
  margin: 30px;
  color: #e9e3b4;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow-x: auto;
  @media screen and (max-width: 1500px) {
    width: 50svw;
  }
  @media screen and (max-width: 750px) {
    width: 90svw;
  }
`;

export const FutureDataTitle = styled.p`
  font-size: 25px;
  margin-top: 50px;
  font-weight: 800;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  margin-left: 10px;
  margin-right: 5px;
`;

export const FutureDataImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
`;
