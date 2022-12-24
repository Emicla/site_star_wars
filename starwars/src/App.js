import './App.css';
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Duvidas from './pages/Duvidas';
import Films from './pages/Films';

function App() {

  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/duvidas",
      element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/films",
      element: login ? <Films /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/startships",
      element: login ? <Startships /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/people",
      element: login ? <People /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/planets",
      element: login ? <Planets /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/species",
      element: login ? <Species /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/about",
      element: login ? <About /> : <Login verificarLogin={verificarLogin} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;