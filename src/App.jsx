import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/Home/HomePage";
import TaskPage from "./pages/Task/TaskPage";
import ExitPage from "./pages/Exit/ExitPage";
import AddTaskPage from "./pages/AddTask/AddTaskPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.HOME} element={<HomePage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
          <Route path={appRoutes.ADD_TASK} element={<AddTaskPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<SignInPage />} />
      <Route path={appRoutes.SIGNUP} element={<SignUpPage />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
