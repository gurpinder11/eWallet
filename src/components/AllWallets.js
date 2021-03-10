import "./Styles.css";

import {useStore} from "react-redux";

function AllWallets() {
  const data = useStore().getState();

  const walletsTable = (
    <table className="table" cellSpacing="0">
      <thead>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Balance (Rs)</th>
        </tr>
      </thead>
      <tbody>
        {data.wallets.map((wallet) => {
          return (
            <tr>
              <td>{wallet.userId}</td>
              <td>{wallet.userName}</td>
              <td>{wallet.phone}</td>
              <td>{wallet.balance.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  return <div className="wallets">{walletsTable}</div>;
}

export default AllWallets;
