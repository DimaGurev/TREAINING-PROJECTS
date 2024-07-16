import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface TransactionState {
  id: string;
  text: string;
  amount: number;
}
export interface TransactionsState {
  transactions: TransactionState[];
  income: number;
  expense: number;
  total: number;
}

const initialState: TransactionsState = {
  transactions: [],
  income: 0,
  expense: 0,
  total: 0,
};

let positiveNumber = 0;
let negativeNumber = 0;

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, actions: PayloadAction<TransactionState>) => {
      state.transactions.push(actions.payload);

      state.transactions.forEach((item) => {
        if (+item.amount > 0) positiveNumber += +item.amount;
        if (+item.amount < 0) negativeNumber = negativeNumber + +item.amount;
      });
      state.income = positiveNumber;
      state.expense = negativeNumber;
      state.total = positiveNumber + negativeNumber;
      positiveNumber = 0;
      negativeNumber = 0;
    },
    removeTransaction: (state, actions: PayloadAction<string>) => {
      state.transactions = state.transactions.filter((item) => {
        if (item?.id === actions.payload) return false;
        return true;
      });
      state.transactions.forEach((item) => {
        if (+item.amount > 0) positiveNumber += +item.amount;
        if (+item.amount < 0) negativeNumber = negativeNumber + +item.amount;
      });
      state.income = positiveNumber;
      state.expense = negativeNumber;
      state.total = positiveNumber + negativeNumber;
      positiveNumber = 0;
      negativeNumber = 0;
    },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;

export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;
export const selectIncome = (state: RootState) => state.transactions.income;
export const selectExpense = (state: RootState) => state.transactions.expense;
export const selectTotal = (state: RootState) => state.transactions.total;

export default transactionsSlice.reducer;
