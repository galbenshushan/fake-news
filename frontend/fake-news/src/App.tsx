import React from "react";
import "./App.css";
import Main from "./pages/Main";
import Navbar from "./components/Navbar/Navbar";
import fakeNewsStore from "./stores/FakeNewsStore";
import { observer } from "mobx-react-lite";
import Loader from "./components/UI/Loader";

const App = observer(() => {
  return (
    <div>
      {fakeNewsStore.isLoading && <Loader />}
      <Navbar />
      <Main />
    </div>
  );
});

export default App;
