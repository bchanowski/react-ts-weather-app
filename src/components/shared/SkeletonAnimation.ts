import { keyframes } from "styled-components";

export const skeletonAnimation = keyframes`
  0% {
    background-color: rgb(0, 0, 0, 0.1);
  }
  100% {
    background-color: rgb(0, 0, 0, 0.5);
  }
`;
