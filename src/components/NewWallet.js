import {useState} from "react";
import "./Styles.css";

import {useDispatch} from "react-redux";
import {addWallet} from "../redux/actions";

function NewWallet() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const submit = () => {
    dispatch(addWallet({name, phone, amount}));
  };

  return (
    <div className="form">
      <div className="inputSection">
        <div>
          <label className="input">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label className="input">Phone</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <label className="input">Amount (Rs)</label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
      </div>
      <div className="action submit">
        <input type="submit" value="Submit" onClick={submit} />
      </div>
    </div>
  );
}

export default NewWallet;
