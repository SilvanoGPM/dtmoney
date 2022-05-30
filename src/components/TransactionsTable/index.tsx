import { BsSortDown, BsSortUpAlt } from "react-icons/bs";

import { formatAmount, formatDate } from "../../utils/formatters";
import {
  Transaction,
  useTransactions,
} from "../../contexts/TransactionsContext";

type TransactionKey = keyof Transaction;

import * as S from "./styles";
import { useState } from "react";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  const [sortKey, setSortKey] = useState<TransactionKey>("createdAt");
  const [ascOrder, setAscOder] = useState(true);

  function sortBy(
    a: Transaction,
    b: Transaction,
    property: TransactionKey,
    asc = true
  ) {
    if (a[property] === b[property]) return 0;

    if (asc) {
      return a[property] > b[property] ? 1 : -1;
    }

    return a[property] < b[property] ? 1 : -1;
  }

  function sortTransactions(a: Transaction, b: Transaction) {
    return sortBy(a, b, sortKey, ascOrder);
  }

  function handleSetSortKey(key: TransactionKey) {
    return () => {
      setAscOder(true);
      setSortKey(key);
    };
  }

  function handleToggleAscOrder() {
    setAscOder(!ascOrder);
  }

  return (
    <S.Container>
      <S.Title>Listagem</S.Title>

      <S.Table>
        <thead>
          <tr>
            <th>
              <S.SortButton
                onClick={handleSetSortKey("title")}
                isActive={sortKey === "title"}
              >
                Título
              </S.SortButton>
            </th>
            <th>
              <S.SortButton
                onClick={handleSetSortKey("amount")}
                isActive={sortKey === "amount"}
              >
                Valor
              </S.SortButton>
            </th>
            <th>
              <S.SortButton
                onClick={handleSetSortKey("category")}
                isActive={sortKey === "category"}
              >
                Categoria
              </S.SortButton>
            </th>
            <th>
              <S.SortButton
                onClick={handleSetSortKey("createdAt")}
                isActive={sortKey === "createdAt"}
              >
                Data
              </S.SortButton>

              <S.AscButton
                title={`Clique para odernar ${
                  ascOrder ? "descendentemente" : "ascendentemente"
                }`}
                onClick={handleToggleAscOrder}
              >
                {ascOrder ? (
                  <BsSortUpAlt size={16} />
                ) : (
                  <BsSortDown size={16} />
                )}
              </S.AscButton>
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions
            .sort(sortTransactions)
            .map(({ id, title, amount, type, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={`amount ${type.toLowerCase()}`}>
                  {formatAmount(amount * (type === "WITHDRAW" ? -1 : 1))}
                </td>
                <td className="category">{category}</td>
                <td className="createdAt">{formatDate(new Date(createdAt))}</td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
