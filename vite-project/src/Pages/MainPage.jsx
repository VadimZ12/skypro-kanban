import { useContext } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Wrapper from "../components/Wrapper/Wrapper";
import { GlobalStyle } from "../Global.styled";
import "../App.css";
import { Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { CardsContext } from "../contexts/cardsContext";

export default function MainPage() {
  const { userData } = useUser();
  const { isLoading, getCardsError } = useContext(CardsContext);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Outlet />
        <Header userData={userData} />
        {getCardsError ? (
          <p style={{ color: "red" }}>{getCardsError}</p>
        ) : (
          <Main isLoading={isLoading} />
        )}
      </Wrapper>
    </>
  );
}
