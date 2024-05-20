import { css, styled } from "styled-components";
import { fadeIn, hover01, hover03 } from "../../../styled/common/Common.styled";
import { themeStyles } from "../../../lib/ThemeColor";

export const PopBrowseStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  animation: ${fadeIn} 200ms linear;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
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
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
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

export const PopBrowseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  opacity: 1;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;
export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  word-break: break-all;
`;

export const PopBrowseStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  width: 570px;
  height: 60px;
  gap: 14px;
`;
export const PopBrowseStatusTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopBrowseStatusTheme = styled.label`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const NewSelectedStatus = styled(PopBrowseStatusTheme)`
  background: ${({ $isChecked }) => ($isChecked ? "#94a6be" : "")};
  color: ${({ $isChecked }) => ($isChecked ? "#FFFFFF" : "#94a6be")};
`;

export const SelectedStatus = styled(PopBrowseStatusTheme)`
  background-color: #94a6be;
  color: #ffffff;
`;

export const PopBrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 590px;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    resize: vertical;
  }
`;
export const FormBrowseTitle = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.div`
  font-family: "Roboto";
  word-break: break-all;
  max-width: 300px;
  margin-top: 14px;
  min-height: 200px;
  height: 330px;
  max-height: 60vh;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  color: #94a6be;
  letter-spacing: 0.5px;
  overflow: hidden;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ThemeDownCategories = styled.div`
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const PopBrowseButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      height: 40px;
      width: 100%;
      margin-right: 0px;
    }
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      margin-right: 0px;
    }
  }
`;

export const Button = css`
  width: auto;
  height: 30px;
  border-radius: 4px;
  outline: none;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const ButtonClose = styled.button`
  ${Button}
  border: 0;
  color: #fff;
  float: left;
  background-color: ${(props) => (props.$isSubmitted ? "#94A6BE" : "#565eef")};
  &:hover {
    ${(props) => (props.$isSubmitted ? "" : hover01)}
  }

  pointer-events: ${(props) => (props.$isSubmitted ? "none" : "auto")};
`;

export const ButtonDelete = styled.button`
  ${Button}
  border: ${(props) => (props.$isSubmitted ? "0" : "0.7px solid #565EEF")};
  color: ${(props) => (props.$isSubmitted ? "#ffffff" : "#565EEF")};
  background-color: ${(props) => (props.$isSubmitted ? "#94A6BE" : "#ffffff")};

  &:hover {
    ${(props) => (props.$isSubmitted ? "" : hover03)}
  }

  pointer-events: ${(props) => (props.$isSubmitted ? "none" : "auto")};
`;

export const ButtonChange = styled.button`
  ${Button}
  border: ${(props) => (props.$isSubmitted ? "0" : "0.7px solid #565EEF")};
  color: ${(props) => (props.$isSubmitted ? "#ffffff" : "#565EEF")};
  background-color: ${(props) => (props.$isSubmitted ? "#94A6BE" : "#ffffff")};

  &:hover {
    ${(props) => (props.$isSubmitted ? "" : hover03)}
  }

  pointer-events: ${(props) => (props.$isSubmitted ? "none" : "auto")};
`;

export const ButtonSave = styled.button`
  ${Button}
  border: 0;
  color: #ffffff;
  float: left;
  background-color: ${(props) => (props.$isSubmitted ? "#94A6BE" : "#565eef")};
  &:hover {
    ${(props) => (props.$isSubmitted ? "" : hover01)}
  }

  pointer-events: ${(props) => (props.$isSubmitted ? "none" : "auto")};
`;

export const ButtonDiscard = styled.button`
  ${Button}
  border: ${(props) => (props.$isSubmitted ? "0" : "0.7px solid #565EEF")};
  color: ${(props) => (props.$isSubmitted ? "#ffffff" : "#565EEF")};
  background-color: ${(props) => (props.$isSubmitted ? "#94A6BE" : "#ffffff")};

  &:hover {
    ${(props) => (props.$isSubmitted ? "" : hover03)}
  }

  pointer-events: ${(props) => (props.$isSubmitted ? "none" : "auto")};
`;

export const OpenedCardTheme = styled.div`
  white-space: nowrap;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#94a6be"};

  color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#ffffff"};
`;
