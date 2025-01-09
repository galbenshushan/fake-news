import React from "react";
import "./App.css";
import Main from "./pages/Main";
import Navbar from "./components/Navbar/Navbar";
import { observer } from "mobx-react-lite";
import ErrorPopup from "./components/UI/ErrorPopup";

const App = observer(() => {
  return (
    <div>
      <Navbar />
      <Main />
      <ErrorPopup />
    </div>
  );
});

export default App;
