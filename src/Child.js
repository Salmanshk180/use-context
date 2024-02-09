import React, { useContext } from "react";
import { UserContext } from "./UserContext";
const Child = () => {
  const User = useContext(UserContext);
  return (
    <div>
      {User.name}
      <br />
      {User.age}
    </div>
  );
};

export default Child;
