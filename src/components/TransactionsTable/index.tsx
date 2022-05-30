import { useState, useEffect } from "react";

import { api } from "../../services/api";

import * as S from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "DEPOSIT" | "WITHDRAW";
  category: string;
  createdAt: string;
}

const locale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

const numberFormatter = new Intl.NumberFormat(locale, {
  style: "currency",
  currency: "BRL",
});

const dateFormatter = new Intl.DateTimeFormat(locale);

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("/transactions")
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  function formatAmount(amount: number) {
    return numberFormatter.format(amount);
  }

  function formatDate(date: Date) {
    return dateFormatter.format(date);
  }

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            ({ id, title, amount, type, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type.toLowerCase()}>
                  {formatAmount(amount)}
                </td>
                <td>{category}</td>
                <td>{formatDate(new Date(createdAt))}</td>
              </tr>
            )
          )}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
