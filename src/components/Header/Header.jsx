import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function Header({ isLoading }) {
  const [isOpenUser, setIsOpenUser] = useState(false);
  const togglePopUser = () => setIsOpenUser((prevState) => !prevState);
  const { user } = useUser();

  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo $isLoading={isLoading}>
            {/* className="header__logo _light" */}
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          {/* <S.HeaderLogo>
            div className="header__logo _dark"
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo> */}
          <S.HeaderNav>
            {isLoading ? (
              <S.HeaderBtnMainNewLocked>
                Создать новую задачу
              </S.HeaderBtnMainNewLocked>
            ) : (
              <Link to={appRoutes.ADD_TASK}>
                <S.HeaderBtnMainNew>Создать новую задачу</S.HeaderBtnMainNew>
              </Link>
            )}
            <S.HeaderUser $isLoading={isLoading} onClick={togglePopUser}>
              {user.name}
            </S.HeaderUser>
            {isOpenUser && <PopUser setIsOpenUser={setIsOpenUser} />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
