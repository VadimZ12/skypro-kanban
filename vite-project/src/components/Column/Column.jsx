import Card from "../Card/Card";
import { CardsColumn, ColumnP, ColumnTitle, MainColumn } from "./Column.styled";

function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnP>{title}</ColumnP>
      </ColumnTitle>

      <CardsColumn>
        {cardList.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </CardsColumn>
    </MainColumn>
  );
}
export default Column;
