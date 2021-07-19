import React from "react";

const User = ({ user }) => {
  const { id, name, email, phone, website } = user;
  console.log("user");
  return (
    <>
      <div className=" w-100 w-md-50 mx-auto card-me  px-5 py-4 my-3">
        <div>
          <h3 className="py-3">Name: {name}</h3>
          <h4 className="py-3">Email: {email}</h4>
          <h4 className="py-3">Phone: {phone}</h4>
          <h4 className="py-3">Website: {website}</h4>
        </div>
      </div>
    </>
  );
};

export default User;
