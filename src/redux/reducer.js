import * as ActionTypes from "./actions";
import walletData from "../data.json";

const walletsReducer = (state = walletData, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_WALLETS:
      return Object.assign({}, state);
    case ActionTypes.ADD_WALLET:
      const id = state.wallets.length + 1;
      const {name, phone, amount} = action.wallet;
      alert(`User Added. Total users are ${id}`);
      return Object.assign(
        {},
        {
          wallets: [
            ...state.wallets,
            {
              id,
              userId: `User ${id}`,
              userName: name || `Name ${id}`,
              phone: phone || "000",
              balance: amount || 100,
              transactions: [],
            },
          ],
        }
      );
    case ActionTypes.UPDATE_MONEY:
      const {id: walletId, transactionType, amount: amt} = action;
      const selectedWallet = state.wallets.filter((wallet) => {
        return wallet.id === walletId;
      })[0];

      if (selectedWallet) {
        if (transactionType === "CREDIT") {
          selectedWallet.balance += amt;

          alert(`Amount ${amt} Added for ${selectedWallet.userName} `);
        } else {
          if (selectedWallet.balance - amt >= 0) {
            selectedWallet.balance -= amt;

            alert(`Amount ${amt} Spent for ${selectedWallet.userName} `);
          } else {
            alert(`Not Enough Money`);
          }
        }
      }

      selectedWallet.transactions.push({
        id: selectedWallet.transactions.length + 1,
        type: transactionType,
        amount: amt,
        balance: selectedWallet.balance,
        timestamp: Date.now(),
      });

      return Object.assign({}, state);
    default:
      return state;
  }
};

export default walletsReducer;
