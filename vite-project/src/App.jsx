import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import { cardList } from "./data";
import { GlobalStyle } from "./Global.styled";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,

        theme: "Research",

        title: "Нужно сделать",

        date: "30.11.23",

        status: "Нужно сделать",
      },
    ]);
  }
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header addCard={addCard} />
        <Main isLoaded={isLoaded} cardList={cards} />
      </Wrapper>
    </>
  );
}

export default App;
