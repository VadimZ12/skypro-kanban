import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.jsx";
import { ModalProvider } from "./contexts/modalContext.jsx";
import { CardsProvider } from "./contexts/cardsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CardsProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </CardsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
