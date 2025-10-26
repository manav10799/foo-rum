import { useContext, useEffect } from "react";
import Header from "./Header";
import { Outlet, useLocation, useNavigate } from "react-router";
import CurrentUser from "../context/UserContext";

const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Container;
