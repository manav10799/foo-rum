import Header from "./Header";
import { Outlet } from "react-router";

const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Container;
