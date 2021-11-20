import React, { useEffect, useContext } from "react";
import ConfettiContext from "../../context/confetti_data_storage/context";
import UserItem from "./UserItem";
import loading_url from "../../imgs/loading.gif";

const Users = () => {
  const githubContext = useContext(ConfettiContext);
  const { loading, homeInfo, fetchHomeInfo } = githubContext;
  useEffect(() => {
    fetchHomeInfo();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid p-5 mt-5">
      {loading ? (
        <img
          src={loading_url}
          className="card-img-top w-25"
          alt="Github Finder Loading"
          style={{ marginLeft: "38%" }}
        />
      ) : (
        <div className="row d-flex justify-content-around">
          {homeInfo.map((user, idx) => (
            <UserItem user={user} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
