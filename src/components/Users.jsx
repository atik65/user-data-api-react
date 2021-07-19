import React from "react";
import User from "./User";

const Users = ({ users, remove }) => {
  return (
    <>
      <div className="container   p-5">
        {users.map((user) => {
          return <User key={user.id} user={user} remove={remove} />;
        })}
      </div>
    </>
  );
};

export default Users;
