import { css, styled } from "styled-components";
import { themeStyles } from "../../../lib/ThemeColor";
import { fadeIn, hover01 } from "../../../styled/common/Common.styled";

export const PopNewCardStyled = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
  animation: ${fadeIn} 300ms linear;
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
  max-width: 620px;
`;

export const PopNewCardTitle = styled.h3`
  font-family: "Roboto";
  letter-spacing: 0px;
  text-align: left;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 590px;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  box-sizing: content-box;
  width: 150%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    resize: vertical;
  }
`;

export const FormNewInputArea = styled.textarea`
  font-family: "Roboto";
  max-width: 370px;
  margin-top: 14px;
  min-height: 230px;
  max-height: 55vh;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.25;
  letter-spacing: -0.14px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

export const FormNewInputAreaForBrowse = styled(FormNewInputArea)`
  height: 330px;
`;

export const FormNewInput = styled.input`
  font-family: "Roboto";
  margin: 20px 0;
  max-width: 370px;
  box-sizing: border-box;
  resize: none;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const PopNewCategories = styled.div`
  margin-bottom: 20px;
`;

export const PopNewCategoriesSubtitle = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;
export const PopNewCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesThemes = css`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  text-align: center;
`;

export const CardThemeToSelect = styled.label`
  ${CategoriesThemes}

  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor};
  color: ${({ $themeColor }) => themeStyles[$themeColor]?.color};
  opacity: ${({ $isChecked }) => ($isChecked ? "1" : "0.4")};
`;

export const RadioLabel = styled.label``;
export const FormNewSubmit = styled.button`
  width: 132px;
  height: 30px;
  background-color: ${(props) => (props.$isSubmitted ? "#94A6BE" : "#565eef")};
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
  &:hover {
    ${(props) => (props.$isSubmitted ? "" : hover01)}
  }

  pointer-events: ${(props) => (props.$isSubmitted ? "none" : "auto")};
`;

export const ThemeInputs = styled.input`
  display: none;
`;
