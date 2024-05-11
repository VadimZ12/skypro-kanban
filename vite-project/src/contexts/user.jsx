import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return { token: "" };
  }
};

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState(getUserFromLocalStorage());
  const loginUser = (user) => {
    setUserData(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate(AppRoutes.MAIN);
  };

  const logoutUser = () => {
    setUserData(null);
    localStorage.removeItem("user");
    navigate(AppRoutes.LOGIN);
  };

  return (
    <UserContext.Provider value={{ userData, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
