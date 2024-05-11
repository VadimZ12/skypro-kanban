import { createContext, useState, useEffect, useContext } from "react";
import { getTasks } from "../api";
import { UserContext } from "./user";
export const CardsContext = createContext(null);

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  const { userData } = useContext(UserContext);
  const refetchCards = () => {
    getTasks({ token: userData.token })
      .then((data) => {
        setCards(data.tasks);
      })
      .catch((error) => {
        setGetCardsError(error.message);
      })
      .then(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    refetchCards();
  }, [userData.token]);
  return (
    <CardsContext.Provider
      value={{
        cards,
        setCards,
        isLoading,
        setIsLoading,
        getCardsError,
        setGetCardsError,
        refetchCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
