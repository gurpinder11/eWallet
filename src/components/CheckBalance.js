import {useState} from "react";
import "./Styles.css";

import {useStore} from "react-redux";

function CheckBalance() {
  const data = useStore().getState();
  const [selectedUserId, setSelectedUserId] = useState(data.wallets[0].id);
  const [balance, setBalance] = useState(data.wallets[0].balance);

  const check = () => {
    const selectedWallet = data.wallets.filter((wallet) => {
      return wallet.id === selectedUserId;
    })[0];
    selectedWallet && setBalance(selectedWallet.balance);
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
          <label>{balance.toFixed(2)}</label>
        </div>
      </div>
      <div className="action">
        <input type="check" value="Check Balance" onClick={check} />
      </div>
    </div>
  );
}

export default CheckBalance;
