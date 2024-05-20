import { Container } from "../../styled/common/Common.styled";
import { MainBlock, MainStyled, MainContentStyled } from "./MainContent.styled";

export default function MainContent({ children }) {
  return (
    <MainStyled>
      <Container>
        <MainBlock>
          <MainContentStyled>{children}</MainContentStyled>
        </MainBlock>
      </Container>
    </MainStyled>
  );
}
