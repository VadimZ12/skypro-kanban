import { Link } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <p>
        <Link to={AppRoutes.MAIN}>Вернуться на главную</Link>
      </p>
    </div>
  );
}
