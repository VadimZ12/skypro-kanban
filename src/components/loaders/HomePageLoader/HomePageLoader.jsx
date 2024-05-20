import {
  CardBtnLoader,
  DateLoader,
  ThemeLoader,
  TitleLoader,
} from "../../../pages/Home/HomePageLoader.styled";
import * as S from "../../Card/Card.styled";

export default function HomePageLoader() {
  return (
    <S.CardsBlock>
      <S.CardItem>
        <S.CardGroup>
          <ThemeLoader></ThemeLoader>
          <CardBtnLoader></CardBtnLoader>
        </S.CardGroup>
        <S.CardContent>
          <TitleLoader></TitleLoader>
          <DateLoader></DateLoader>
        </S.CardContent>
      </S.CardItem>
    </S.CardsBlock>
  );
}
