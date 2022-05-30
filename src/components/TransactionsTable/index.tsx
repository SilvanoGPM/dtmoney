import { useTransactions } from '../../contexts/TransactionsContext';
import * as S from "./styles";

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
  const { transactions } = useTransactions();

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
