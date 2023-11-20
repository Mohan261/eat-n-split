import React from "react";
import "./Users.css";
const Users = ({ data, selection, closeSelection, formActive, idNum }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={data.imgUrl} alt="" />
      </div>
      <div className="text">
        <h3 className="user-name">{data.username}</h3>
        {data.balance === 0 ? (
          <p className="info">You and {data.username} are even</p>
        ) : data.balance > 0 ? (
          <p className="info green">
            {data.username} owes You {data.balance}$
          </p>
        ) : (
          <p className="info red">
            You owe {data.username} {-1 * data.balance}$
          </p>
        )}
      </div>
      <button
        className={`${
          data.id === idNum && formActive ? "hide" : "view"
        } select-btn`}
        onClick={() => selection(data.id)}
      >
        Select
      </button>
      <button
        className={`${
          data.id === idNum && formActive ? "view" : "hide"
        } select-btn`}
        onClick={() => closeSelection(data.id)}
      >
        close
      </button>
    </div>
  );
};

export default Users;
