import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import { appRoutes } from "./lib/appRoutes";
import TaskPage from "./Pages/TaskPage/TaskPage";
import ExitPage from "./Pages/ExitPage/ExitPage";
import Signin from "./Pages/SignInPage/SignInPage";
import Register from "./Pages/SignUpPage/SignUpPage";
import NotFound from "./Pages/NotFoundPage/NotFoundPage";
import MainPage from "./Pages/MainPage/MainPage";
import NewTaskPage from "./Pages/NewTaskPage/NewTaskPage";


export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.NEW_TASK} element={<NewTaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>

      <Route path={appRoutes.SIGNIN} element={<Signin />} />
      <Route path={appRoutes.SIGNUP} element={<Register />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
