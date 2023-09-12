import React, { useState } from "react";
import "./Bill.css";
const Bill = ({ data, formActive, addMoney, formClose }) => {
  const [totalAmt, setTotalAmt] = useState("");
  const [myAmt, setMyAmt] = useState("");
  const [frndAmt, setFrndAmt] = useState("");
  const [user, setUser] = useState("you");
  
  const billFun = (billamt) => {
    setTotalAmt(billamt);
    setFrndAmt(billamt);
  };
  
  const myAmtFun = (myamt) => {
    setMyAmt(myamt);
    setFrndAmt(totalAmt - myamt);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "you") {
      const amt = data.balance + frndAmt;
      addMoney(amt, data.id);
    }
    if (user === data.username) {
      const amt = data.balance - myAmt;
      addMoney(amt, data.id);
    }
    formClose();
    setTotalAmt("");
    setMyAmt("");
    setFrndAmt("");
    setUser("you");
  };
  return (
    <form
      className={`${formActive ? "view" : "hide"} form`}
      onSubmit={handleSubmit}
    >
      <h2 className="form-title">
        SPLIT A BILL WITH {data.username.toUpperCase()}
      </h2>
      <div className="input-cont">
        <label htmlFor="bill-amt">💰 Bill value</label>
        <input
          type="text"
          id="bill-amt"
          name="bill-amt"
          className="input"
          value={totalAmt}
          onChange={(e) => billFun(Number(e.target.value))}
        />
      </div>
      <div className="input-cont">
        <label htmlFor="your-amt">🧍‍♀️ Your expense</label>
        <input
          type="text"
          id="your-amt"
          name="your-amt"
          className="input"
          value={myAmt}
          onChange={(e) => myAmtFun(Number(e.target.value))}
        />
      </div>
      <div className="input-cont">
        <label htmlFor="other-amt">👫 {data.username}'s expense</label>
        <input
          type="text"
          id="other-amt"
          name="other-amt"
          disabled
          className="input"
          value={frndAmt}
        />
      </div>
      <div className="input-cont">
        <label htmlFor="bill-amt">🤑 Who is paying the bill</label>
        <select
          className="input"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        >
          <option value="you">You</option>
          <option value={data.username}>{data.username}</option>
        </select>
      </div>
      <button className="select-btn">Split Bill</button>
    </form>
  );
};

export default Bill;
