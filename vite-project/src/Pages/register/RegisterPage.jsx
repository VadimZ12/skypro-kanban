import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import "./signin.css";
import { register } from "../../api";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

export default function RegisterPage() {
  const { loginUser } = useUser();

  const regForm = {
    name: "",
    login: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(regForm);
  const [addToDoError, setAddToDoError] = useState(null);

  const handleReg = async (e) => {
    e.preventDefault();
    await register(registerData)
      .then((data) => {
        loginUser(data.user);
      })
      .catch((error) => {
        setAddToDoError(error.message);
      });
  };

  const handleRegChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                name="name"
                id="first-name"
                placeholder="Имя"
                value={registerData.name}
                onChange={handleRegChange}
                label="name"
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={registerData.login}
                onChange={handleRegChange}
                label="login"
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={registerData.password}
                onChange={handleRegChange}
                label="password"
              />
              <p style={{ color: "red" }}>{addToDoError}</p>
              <button
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
                onClick={handleReg}
              >
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>
                  <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
