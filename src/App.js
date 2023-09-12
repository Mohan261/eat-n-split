import { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import Users from "./Users";
import AddFriend from "./AddFriend";

function App() {
  const [datas, setData] = useState([
    { id: 1, username: "Clark", balance: 12, imgUrl: "./img/img1.jpg" },
    { id: 2, username: "Sarah", balance: 0, imgUrl: "./img/img1.jpg" },
    { id: 3, username: "Anthony", balance: -12, imgUrl: "./img/img1.jpg" },
  ]);
  const [selectData, setSelect] = useState({
    id: 1,
    username: "Name",
    balance: 12,
    imgUrl: "./img/img1.jpg",
  });
  const [isActiveFriend, setActiveFriend] = useState(false);
  const [isActiveForm, setActiveForm] = useState(false);

  const handleOnSelect = (id) => {
    setSelect(datas.find((item) => item.id === id));
    setActiveForm(true);
    console.log(selectData);
  };
  const handleAdd = (newData) => {
    setData((datas) => [...datas, newData]);
    handleAddFriend();
  };
  const handleAddFriend = () => {
    setActiveFriend((setActive) => !setActive);
  };
  const handleClose = () => {
    setActiveForm(false);
  };
  const addMoney = (balance, id) => {
    console.log(balance);
    setData((item) =>
      item.map((items) => {
        if (items.id === id) return { ...items, balance };
        return items;
      })
    );
  };
  return (
    <div className="main-container">
      <div className="container">
        <div className="cont">
          {datas.map((list) => (
            <Users
              data={list}
              key={list.id}
              selection={handleOnSelect}
              closeSelection={handleClose}
              formActive={isActiveForm}
            />
          ))}
          <button
            className={`${isActiveFriend ? "hide" : "view"} select-btn add`}
            onClick={handleAddFriend}
          >
            Add Friend
          </button>
          <div className="add-friend">
            <AddFriend
              addFriend={handleAdd}
              isActive={isActiveFriend}
              closeAddFriend={handleAddFriend}
            />
          </div>
        </div>
        <div className="cont">
          <Bill
            data={selectData}
            formActive={isActiveForm}
            formClose={handleClose}
            addMoney={addMoney}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
