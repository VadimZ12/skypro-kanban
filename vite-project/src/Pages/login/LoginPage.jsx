import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import "./signup.css";
import { useState } from "react";
import { login } from "../../api";
import { useUser } from "../../hooks/useUser";

export default function LoginPage() {
  const { loginUser } = useUser();

  const loginForm = {
    login: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(loginForm);
  const [addToDoError, setAddToDoError] = useState(null);

  const handelLogin = async (e) => {
    try {
      e.preventDefault();
      await login(loginData).then((data) => {
        loginUser(data.user);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={loginData.login}
                onChange={handleInputChange}
                label="login"
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={loginData.password}
                onChange={handleInputChange}
                label="password"
              />
              <p style={{ color: "red" }}>{addToDoError}</p>
              <button
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={handelLogin}
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
