import { useContext, useState } from "react";
import { Container } from "../Common/Common.styled";
import {
  HeaderItem,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  MainButton,
  UserName,
  HeaderImg,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserThemeP,
  Checkbox,
} from "./Header.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { ModalContext } from "../../contexts/modalContext";
import PopNewCard from "../PopNewCard/PopNewCard";
import { CardsContext } from "../../contexts/cardsContext";

function Header({ userData }) {
  const [isOpen, setIsOpen] = useState(false);
  function togglePopUp() {
    setIsOpen((prev) => !prev);
  }
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);
  const { setCards } = useContext(CardsContext);
  return (
    <HeaderItem>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderImg src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderImg src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderNav>
            <MainButton
              id="btnMainNew"
              onClick={() =>
                handleOpenModal({
                  title: "Создать новую задачу",
                  content: (
                    <PopNewCard
                      addCard={(cards) => {
                        setCards(cards);
                        handleCloseModal();
                      }}
                    />
                  ),
                })
              }
            >
              Создать новую задачу
            </MainButton>
            <UserName href="#" onClick={togglePopUp}>
              {userData.login}
            </UserName>
            {isOpen && (
              <div className="header__pop-user-set pop-user-set">
                <a href=""></a>

                <PopUserName>{userData.name}</PopUserName>
                <PopUserMail>{userData.login}</PopUserMail>

                <PopUserTheme>
                  <PopUserThemeP>Темная тема</PopUserThemeP>

                  <Checkbox type="checkbox" name="checkbox" />
                </PopUserTheme>
                <button type="button" className="_hover03">
                  <Link to={AppRoutes.EXIT}>Выйти</Link>
                </button>
              </div>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderItem>
  );
}
export default Header;
