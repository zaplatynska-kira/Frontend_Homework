import React from "react";
import "./App.css";

import SandwichRTK from "./components/SandwichRTK";
import CreateBookRTK from "./components/createBookRTK/CreateBookRTK";
import BooksPageRTK from "./components/booksPageRTK/BooksPageRTK";
import CounterRTK from "./components/counter/CounterRTK";


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