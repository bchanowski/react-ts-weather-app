import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  const spin = keyframes`
        0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
    `;
  const LoadingContainer = styled.div`
    display: block;
    width: 100svw;
    margin: 10px;
  `;
  const LoadingSpinner = styled.div`
    margin-left: auto;
    margin-right: auto;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #444444;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 1s linear infinite;
  `;
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default LoadingSpinner;
