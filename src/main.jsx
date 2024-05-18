import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { UserProvider } from "./contexts/user.jsx";
import { TasksProvider } from "./contexts/tasks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
