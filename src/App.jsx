import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  return (
    <>
      <Header theme={[isdark, setIsdark]} />
      <Outlet context={[isdark, setIsdark]} />
    </>
  );
}

export default App;
