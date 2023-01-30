import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";


const Main = () => {
  return (
    <div className='px-10'>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Main;
