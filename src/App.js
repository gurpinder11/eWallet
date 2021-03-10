import {useState} from "react";
import "./App.css";
import {browserHistory} from "react-router";

function App({children}) {
  const menuItems = [
    {id: "allWallet", text: "All Wallets"},
    {id: "newWallet", text: "New Wallet"},
    {id: "checkBalance", text: "Check Balance"},
    {id: "addFunds", text: "Add Funds"},
    {id: "spendFunds", text: "Spend Funds"},
    {id: "allTransactions", text: "All Transactions"},
  ];

  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  const navTo = (selectedItem) => {
    const route = selectedItem.id === "allWallet" ? "/" : `/${selectedItem.id}`;

    setSelectedItem(selectedItem);
    browserHistory.push(route);
  };
  return (
    <div className="app-container">
      <div className="app">
        <div className="side-nav">
          {menuItems.map((item) => (
            <div onClick={() => navTo(item)}>{item.text}</div>
          ))}
        </div>
        <div className="main">
          <header className="app-header">{selectedItem.text}</header>
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
