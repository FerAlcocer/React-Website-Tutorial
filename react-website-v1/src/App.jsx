import { Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element />
        </Routes>
      </div>
    </>
  );
};
