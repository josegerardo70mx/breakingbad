import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]));
  }, []);

  console.log(user);

  return (
    <div>
      <h1>Este es mi componente User</h1>
      <h1>
        {user.name?.title} {user.name?.first} {user.name?.last}
      </h1>
      <img src={user.picture?.large} alt="" />
      <p>
        <b>Email: </b> {user.email}
      </p>
    </div>
  );
};

export default User;
