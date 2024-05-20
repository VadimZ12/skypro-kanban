import Card from "../Card/Card";
import HomePageLoader from "../loaders/HomePageLoader/HomePageLoader";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

export default function Column({ title, cardList, isLoading }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) =>
          isLoading ? (
            <HomePageLoader key={card.id} status={card.status} />
          ) : (
            <Card
              theme={card.topic}
              title={card.title}
              date={card.date}
              key={card._id}
              status={card.status}
              id={card._id}
            />
          )
        )}
      </Cards>
    </MainColumn>
  );
}
