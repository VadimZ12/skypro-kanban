import styled from "styled-components";
import { hover01 } from "./Common.styled";

export const WrapperSignPage = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

export const ContainerSignPage = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

export const ModalSignPage = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

export const ModalBlockSignPage = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const ModalTitleSignPage = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const ModalFormLoginSignPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const ModalInputSignPage = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: ${(props) =>
    props.$isNotCorrect || props.$isNotFilled || props.$isNotCorrectEmail
      ? "0.7px solid #F84D4D"
      : "0.7px solid rgba(148, 166, 190, 0.4)"};
  outline: none;
  padding: 10px 8px;
  &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const ModalButtonEnterSignPage = styled.span`
  width: 100%;
  height: 30px;
  background-color: ${(props) =>
    props.$isNotCorrect ||
    props.$isNotFilled ||
    props.$isNotCorrectEmail ||
    props.$isSubmitted
      ? "#94A6BE"
      : "#565eef"};
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    ${(props) =>
      props.$isNotFilled ||
      props.$isNotCorrect ||
      props.$isNotCorrectEmail ||
      props.$isSubmitted
        ? ""
        : hover01}
  }

  pointer-events: ${(props) => (props.$isSubmitted ? "none" : "auto")};

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const ModalFormGroupSignPage = styled.div`
  text-align: center;
  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }
  a {
    text-decoration: underline;
  }
`;

export const NotCorrectText = styled.div`
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #f84d4d;
  margin-top: 6px;
`;
