import Card from "../Card/Card";
import { Cards, ColumnTitle, ColumnTitleP, MainColumn } from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleP>{title}</ColumnTitleP>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            name={card.title}
            theme={card.theme}
            date={card.date}
            key={card.id}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}

export default Column;
