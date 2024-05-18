import { useEffect, useState } from "react";
import { GlobalStyle } from "../../styled/global/Global.styled";
import { WrapperStyled } from "../../styled/common/Common.styled";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api/api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";
import { loaderTasks } from "../../components/loaders/HomePageLoader/HomePageLoader.data";
import { statusList } from "../../lib/statusList";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const { cards, setCards } = useTasks();

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        setCards(todos.tasks);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        alert(error);
      });
  }, [user, setCards]);

  return (
    <>
      <GlobalStyle />
      <WrapperStyled>
        <Outlet />

        <Header isLoading={isLoading} />
        <MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              key={status}
              cardList={
                isLoading
                  ? loaderTasks.filter((card) => card.status === status)
                  : cards.filter((card) => card.status === status)
              }
              isLoading={isLoading}
            />
          ))}
        </MainContent>
      </WrapperStyled>
    </>
  );
}
