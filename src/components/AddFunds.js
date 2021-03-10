import {useState} from "react";
import "./Styles.css";

import {useStore, useDispatch} from "react-redux";
import {updateMoney} from "../redux/actions";

function AddFunds() {
  const data = useStore().getState();
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(10);
  const [selectedUserId, setSelectedUserId] = useState(data.wallets[0].id);

  const submit = () => {
    dispatch(updateMoney(selectedUserId, "CREDIT", amount));
  };

  return (
    <div className="form">
      <div className="inputSection">
        <div>
          <label className="input">User Name</label>
          <select
            id="name"
            name="name"
            onChange={(event) => setSelectedUserId(parseInt(event.target.value))}
          >
            {data.wallets.map((wallet) => (
              <option value={wallet.id}>{wallet.userName}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="input">Balance</label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(event) => setAmount(parseInt(event.target.value))}
          />
        </div>
      </div>
      <div className="action">
        <input type="submit" value="Submit" onClick={submit} />
      </div>
    </div>
  );
}

export default AddFunds;
