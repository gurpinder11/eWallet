export const FETCH_WALLETS = "FETCH_WALLETS";
export const ADD_WALLET = "ADD_WALLET";
export const UPDATE_MONEY = "UPDATE_MONEY";

export const fetchWallets = () => ({
  type: FETCH_WALLETS,
});

export const addWallet = (wallet) => ({
  type: ADD_WALLET,
  wallet,
});

export const updateMoney = (id, transactionType, amount) => ({
  type: UPDATE_MONEY,
  id,
  transactionType,
  amount,
});
