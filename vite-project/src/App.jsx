import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import { useState } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage";
import TaskPage from "./Pages/TaskPage";
import ExitPage from "./Pages/ExitPage";
import Signin from "./Pages/SignInPage";
import NotFound from "./Pages/NotFoundPage";
import Register from "./Pages/SignUpPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function loginUser(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout() {
    setUser(null);
    navigate(appRoutes.SIGNIN);
  }
  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>

      <Route
        path={appRoutes.SIGNIN}
        element={<Signin loginUser={loginUser} />}
      />
      <Route
        path={appRoutes.SIGNUP}
        element={<Register loginUser={loginUser} />}
      />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
