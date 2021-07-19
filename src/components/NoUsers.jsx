import React from "react";

const NoUsers = ({ refresh }) => {
  return (
    <>
      <div className="display-6 container d-flex align-items-center flex-column pt-5 ">
        <p> There is No user available right Now..</p>
        <button
          onClick={refresh}
          className="btn btn-lg mt-3 btn-outline-primary"
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default NoUsers;
