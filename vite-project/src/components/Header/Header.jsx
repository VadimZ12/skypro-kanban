import { useState } from "react";
import {
  HeaderBlock,
  HeaderImg,
  HeaderItem,
  HeaderLogo,
  HeaderNav,
  MainButton,
} from "./Header.styled";
import { Container } from "../Common/Common.styled";

function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((isOpened) => !isOpened);
  }

  return (
    <HeaderItem>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderImg src="public/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <HeaderImg src="public/images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <MainButton id="btnMainNew" onClick={addCard}>
              Создать новую задачу
            </MainButton>
            <a href="#" className="header__user _hover02" onClick={togglePopUp}>
              Ivan Ivanov
            </a>
            {isOpened && (
              <div className="header__pop-user-set pop-user-set">
                {/* <a href="">x</a> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
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
