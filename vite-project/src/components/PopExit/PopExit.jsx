import { Link, useNavigate } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitFormGroup,
  PopExitTtl,
  PopExitWrapper,
} from "./PopExit.styled";
import { AppRoutes } from "../../lib/appRoutes";

function PopExit({ setUserData }) {
  let navigate = useNavigate();

  function handleLogout() {
    setUserData(null);
    navigate(AppRoutes.LOGIN);
  }

  return (
    <PopExitWrapper className="pop-exit" id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <button
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
                onClick={handleLogout}
              >
                Да, выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={AppRoutes.MAIN}>Нет, остаться</Link>{" "}
              </button>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  );
}
export default PopExit;
