// Router
import { Routes, Route } from "react-router-dom";
// Pages
import { Home } from "../pages/Home";

export const RoutesPage = () => {

  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
    </Routes>
  )
};