import React, { useEffect, useState } from "react";
import classes from "./style.module.scss";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());
    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const usersList = (
    <ul className={classes.usersList}>
      {users.map(({ id, name, username }) => (
        <li key={id}>
          <Link to={`/users/${id}`}>
            {name} {username}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <h1>Users</h1>
      {usersList}
    </>
  );
};

export default UsersPage;
