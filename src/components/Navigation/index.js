import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./style.module.scss";

const Navigation = () => {
  return (
    <>
      <div className={classes.navigation}>
        <NavLink to="/">Todo</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
