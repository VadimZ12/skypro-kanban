import Column from "../Column/Column"
import { MainBlock, MainContent, MainItem } from "./Main.styled";
import { Container } from "../Common/Common.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({cardList, isLoaded}) {
    return (
        <MainItem>
            <Container>
              <MainBlock>
                <MainContent>
                {isLoaded ? "loading" : statusList.map((item) => (
                    <Column 
                      key={item}
                      name={item}
                      cardList = {cardList.filter((card) => card.status === item)}
                    />
                 ))}
                </MainContent>
              </MainBlock>
            </Container>
        </MainItem>
    )
  }
  
  export default Main