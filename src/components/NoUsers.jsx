import React from "react";

const NoUsers = ({ refresh }) => {
  return (
    <>
      <div className="  container d-flex align-items-center flex-column pt-5 ">
        <h6 className=" display-6">There is No user available right Now..</h6>
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
