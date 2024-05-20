import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/api";
import * as S from "../../styled/common/SignPages.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { GlobalStyleSignPage } from "../../styled/global/SignPagesGlobal.styled";
import { isEmailValid } from "../../components/SignUpForm/SignUpFormValidation";

export default function SignUpPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const [isNotFilled, setIsNotFilled] = useState(false);
  const [isNotFilledLogin, setIsNotFilledLogin] = useState(false);
  const [isNotFilledName, setIsNotFilledName] = useState(false);
  const [isNotFilledPassword, setIsNotFilledPassword] = useState(false);
  const [isNotCorrectEmail, setIsNotCorrectEmail] = useState(false);
  const [isNotCorrect, setIsNotCorrect] = useState(false);
  const [isSubmitted, setIsSubMitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsNotCorrect(false);
    setIsNotFilledLogin(false);
    setIsNotFilledName(false);
    setIsNotFilledPassword(false);
    setIsNotFilled(false);
    setIsSubMitted(false);
    setIsNotCorrectEmail(false);

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (loginData.name === "") {
      setIsNotFilledName(true);
    }
    if (loginData.login === "") {
      setIsNotFilledLogin(true);
    }
    if (loginData.password === "") {
      setIsNotFilledPassword(true);
    }
    if (Object.values(loginData).includes("")) {
      setIsNotFilled(true);
      return;
    }

    if (!isEmailValid(loginData.login)) {
      setIsNotCorrectEmail(true);
      return;
    }
    setIsSubMitted(true);
    await signUp(loginData)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.HOME);
        setIsNotCorrect(false);
        setIsNotFilledLogin(false);
        setIsNotFilledName(false);
        setIsNotFilledPassword(false);
        setIsNotFilled(false);
      })
      .catch(() => {
        setIsNotCorrect(true);
      });
  };

  return (
    <>
      <GlobalStyleSignPage />
      <S.WrapperSignPage>
        <S.ContainerSignPage>
          <S.ModalSignPage>
            <S.ModalBlockSignPage>
              <S.ModalTitleSignPage>
                <h2>Регистрация</h2>
              </S.ModalTitleSignPage>
              <SignUpForm
                isSubmitted={isSubmitted}
                isNotCorrectEmail={isNotCorrectEmail}
                isNotFilled={isNotFilled}
                isNotFilledPassword={isNotFilledPassword}
                isNotFilledName={isNotFilledName}
                isNotFilledLogin={isNotFilledLogin}
                isNotCorrect={isNotCorrect}
                handleInputChange={handleInputChange}
                handleSignUp={handleSignUp}
              />
            </S.ModalBlockSignPage>
          </S.ModalSignPage>
        </S.ContainerSignPage>
      </S.WrapperSignPage>
    </>
  );
}
