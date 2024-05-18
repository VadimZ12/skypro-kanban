import { Link, useNavigate } from "react-router-dom";
import * as S from "./PopExit.styled";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";

export default function PopExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes
                onClick={() => {
                  logout();
                  navigate(appRoutes.SIGNIN);
                }}
              >
                Да, выйти{" "}
              </S.PopExitYes>
              <Link to={appRoutes.HOME}>
                <S.PopExitNo>Нет, остаться </S.PopExitNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
