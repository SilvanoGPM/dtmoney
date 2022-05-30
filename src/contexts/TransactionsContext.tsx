import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "DEPOSIT" | "WITHDRAW";
  category: string;
  createdAt: string;
}

interface TransactionsContextProps {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
});

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("/transactions")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
