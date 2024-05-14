import { useContext } from "react";
import Column from "../Column/Column";
import { Container } from "../Common/Common.styled";
import { MainBlock, MainContent, MainItem } from "./Main.styled";
import { CardsContext } from "../../contexts/cardsContext";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main() {
  const { cards, isLoading } = useContext(CardsContext);
  return (
    <MainItem>
      <Container>
        <MainBlock>
          <MainContent>
            {isLoading
              ? "Данные загружаются"
              : statusList.map((item) => (
                  <Column
                    key={item}
                    title={item}
                    cardList={cards.filter((card) => card.status === item)}
                  />
                ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainItem>
  );
}
export default Main;
