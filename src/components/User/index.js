import React, { useCallback, useEffect, useState } from "react";
import classes from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const goTo = useNavigate();

  const getApiData = useCallback(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .catch(() => goTo("/users"));
    setUser(response);
  }, [goTo, userId]);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  const biography = `${user?.name} works in ${user?.company?.name} and lives in the city ${user?.address?.city} on the ${user?.address?.street} street, ${user?.address?.suite}, loves animals and watching moves.`;

  if (!user) return <p>Loading...</p>;
  return (
    <div className={classes.user}>
      <div>
        <img
          src="https://m.the-flow.ru/uploads/images/origin/09/54/53/17/38/4df954e.jpg"
          alt="user avatar"
        />
      </div>
      <div className={classes.info}>
        <h2>{user?.name}</h2>
        <p>Username: {user?.username}</p>
        <p>
          Email: <a href={`mailto:${user?.email}`}>{user?.email}</a>
        </p>
        <p>Phone: {user?.phone}</p>
        <article className={classes.biography}>{biography}</article>
      </div>
    </div>
  );
};

export default User;
