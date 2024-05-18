import { Link } from "react-router-dom";
import * as S from "../../../styled/common/SignPages.styled";
import { appRoutes } from "../../../lib/appRoutes";

export default function SignInForm({
  loginData,
  isNotCorrect,
  handleInputChange,
  handleLogin,
  isSubmitted,
}) {
  return (
    <S.ModalFormLoginSignPage>
      <S.ModalInputSignPage
        value={loginData.login}
        onChange={handleInputChange}
        type="text"
        name="login"
        placeholder="Эл. почта"
        $isNotCorrect={isNotCorrect}
      />
      <S.ModalInputSignPage
        value={loginData.password}
        onChange={handleInputChange}
        type="password"
        name="password"
        placeholder="Пароль"
        $isNotCorrect={isNotCorrect}
      />
      {isNotCorrect ? (
        <S.NotCorrectText>
          Введенные вами данные не распознаны. Проверьте свой логин и пароль и
          повторите попытку входа.
        </S.NotCorrectText>
      ) : (
        ""
      )}
      <S.ModalButtonEnterSignPage
        onClick={handleLogin}
        $isNotCorrect={isNotCorrect}
        $isSubmitted={isSubmitted}
      >
        Войти
      </S.ModalButtonEnterSignPage>

      <S.ModalFormGroupSignPage>
        <p>Нужно зарегистрироваться?</p>
        <Link to={appRoutes.SIGNUP}>
          <span>Регистрируйтесь здесь</span>
        </Link>
      </S.ModalFormGroupSignPage>
    </S.ModalFormLoginSignPage>
  );
}
