import React from "react";
import "./App.css";
import CounterRTK from "./components/CounterRTK";
import SandwichRTK from "./components/SandwichRTK";
import CreateBookRTK from "./components/CreateBookRTK";
import BooksPageRTK from "./components/BooksPageRTK";

function App() {
  return (
    <>
      <CounterRTK />
      <SandwichRTK />
      <CreateBookRTK />
      <BooksPageRTK />
    </>
  );
}

export default App;