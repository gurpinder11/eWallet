import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./App";
import AllWallets from "./components/AllWallets";
import NewWallet from "./components/NewWallet";
import CheckBalance from "./components/CheckBalance";
import AddFunds from "./components/AddFunds";
import SpendFunds from "./components/SpendFunds";
import AllTransactions from "./components/AllTransactions";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={(props) => <AllWallets {...props} />} />
    <Route path="newWallet" component={(props) => <NewWallet {...props} />} />
    <Route path="checkBalance" component={(props) => <CheckBalance {...props} />} />
    <Route path="addFunds" component={(props) => <AddFunds {...props} />} />
    <Route path="spendFunds" component={(props) => <SpendFunds {...props} />} />
    <Route path="allTransactions" component={(props) => <AllTransactions {...props} />} />
  </Route>
);
