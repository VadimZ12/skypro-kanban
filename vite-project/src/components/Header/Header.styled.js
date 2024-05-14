import { styled } from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const HeaderItem = styled.header`
 width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const HeaderBlock = styled.div`
 height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
width: 85px;
`;

export const HeaderImg = styled.img`
width: 85px;
`;

export const HeaderNav = styled.div`
max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainButton = styled.button`
width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  
  
  &:hover {
    background-color: #33399b;
  }

  @media(max-width:${breakpoints.md}px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
  `;

export const UserName = styled.a`
   height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;

  &:hover{
    color: #33399b;
  }
  `;

export const PopUserName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;`;

export const PopUserMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;`;

export const PopUserTheme = styled.div`
   display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;`;

export const PopUserThemeP = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;`

export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94A6BE;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }`;

export const ButtonCheckbox = styled.button`
  `