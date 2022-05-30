import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "DEPOSIT" | "WITHDRAW";
  category: string;
  createdAt: string;
}

type TransactionToCreate = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContextProps {
  transactions: Transaction[];
  addTransaction: (transaction: TransactionToCreate) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("/transactions")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  async function addTransaction(transactionToCreate: TransactionToCreate) {
    const response = await api.post<{ transaction: Transaction }>(
      "/transactions",
      { ...transactionToCreate, createdAt: new Date() }
    );

    const { transaction } = response.data;

    setTransactions([transaction, ...transactions]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
