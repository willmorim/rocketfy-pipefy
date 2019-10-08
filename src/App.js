import React from "react";
import { DndProvider } from "react-dnd";
import HTML5backend from "react-dnd-html5-backend";

import GlobalStyle from "./styles/global";
import Header from "./components/Header/index";
import Board from "./components/Board";

function App() {
  return (
    <DndProvider backend={HTML5backend}>
      <Header />
      <Board />

      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
