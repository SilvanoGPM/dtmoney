import { useTransactions } from "../../contexts/TransactionsContext";
import { formatAmount, formatDate } from "../../utils/formatters";

import * as S from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      <S.Title>Listagem</S.Title>

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
                <td className={`amount ${type.toLowerCase()}`}>
                  {formatAmount(amount * (type === "WITHDRAW" ? -1 : 1))}
                </td>
                <td className="category">{category}</td>
                <td className="createdAt">{formatDate(new Date(createdAt))}</td>
              </tr>
            )
          )}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
