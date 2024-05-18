import { keyframes, styled } from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    background-color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
`;

export const WrapperStyled = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const fadeIn = keyframes`
from {
    height: 0;
    opacity: 0;
}
to {
    height: auto;
    opacity: 1;
}
`;

export const PopUserSet = css`
  button {
    width: 72px;
    height: 30px;
    background: transparent;
    color: #565eef;
    border-radius: 4px;
    border: 1px solid #565eef;
    a {
      color: #565eef;
    }
  }

  &:target {
    display: block;
  }
`;

export const SubTitle = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
