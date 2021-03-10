import "./Styles.css";

import {useStore} from "react-redux";

function AllTransactions() {
  const data = useStore().getState();

  const transactionRowList = data.wallets.reduce((transactionList, wallet) => {
    return [
      ...transactionList,
      ...wallet.transactions.map((transaction) => {
        const date = new Date(transaction.timestamp);
        const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
          month: "short",
        })} ${date.getFullYear()}, ${date.getHours() % 12} ${
          Math.floor(date.getHours() / 12) ? "pm" : "am"
        }`;
        console.log(date);
        return (
          <tr>
            <td>{wallet.userId}</td>
            <td>{formattedDate}</td>
            <td>
              {transaction.type === "CREDIT" ? "+" : "-"}
              {transaction.amount}
            </td>
            <td>{transaction.balance.toFixed(2)}</td>
          </tr>
        );
      }),
    ];
  }, []);

  const transactionsTable = (
    <table className="table" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount (Rs)</th>
          <th>Balance (Rs)</th>
        </tr>
      </thead>
      <tbody>{transactionRowList}</tbody>
    </table>
  );
  return <div>{transactionsTable}</div>;
}

export default AllTransactions;
