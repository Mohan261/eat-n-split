import React, { useState } from "react";
import "./AddFriend.css";
const AddFriend = ({ addFriend, isActive, closeAddFriend }) => {
  const [newName, setName] = useState("");
  const imgUrl = "./img/img1.jpg";
  const addData = (e) => {
    e.preventDefault();
    const username = newName;
    const newItem = { username, imgUrl, balance: 0, id: Date.now() };
    addFriend(newItem);
    console.log(newItem);
    setName("");
  };
  const getImage = () => {
    return imgUrl;
  };
  return (
    <div className={`${isActive ? "view" : "hide"} `}>
      <form className="add-card" onSubmit={addData}>
        <div className="add-inputs">
          <label htmlFor="friend-name">👫 Friend name</label>
          <input
            type="text"
            name="friend-name"
            id="friend-name"
            value={newName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="add-inputs">
          <label htmlFor="img-url">🌄 Image URL</label>
          <input
            type="text"
            name="img-url"
            id="img-url"
            placeholder="Url for Image"
            value={imgUrl}
            onChange={(e) => getImage()}
          />
        </div>
        <div className="add-btn">
          <button className="select-btn">Add</button>
        </div>
      </form>
      <button className="select-btn close" onClick={closeAddFriend}>
        close
      </button>
    </div>
  );
};

export default AddFriend;
