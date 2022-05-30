import { useTransactions } from "../../contexts/TransactionsContext";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import * as S from "./styles";
import { formatAmount } from "../../utils/formatters";

export function Summary() {
  const { transactions } = useTransactions();

  function calculateTransactionsType(type: "WITHDRAW" | "DEPOSIT") {
    return transactions.reduce((acc, transaction) => {
      const value = transaction.type === type ? transaction.amount : 0;
      return (acc += value);
    }, 0);
  }

  const deposits = calculateTransactionsType("DEPOSIT");
  const withdraws = calculateTransactionsType("WITHDRAW");
  const total = deposits - withdraws;

  return (
    <S.Container>
        <S.Card>
          <S.CardHeader>
            <p>Entradas</p>
            <img alt="Income icon" src={incomeImg} />
          </S.CardHeader>

          <S.CardContent>{formatAmount(deposits)}</S.CardContent>
        </S.Card>

        <S.Card>
          <S.CardHeader>
            <p>Saidas</p>
            <img alt="Outcome icon" src={outcomeImg} />
          </S.CardHeader>

          <S.CardContent>{formatAmount(withdraws * -1)}</S.CardContent>
        </S.Card>

        <S.Card className="highlight">
          <S.CardHeader>
            <p>Total</p>
            <img alt="Total icon" src={totalImg} />
          </S.CardHeader>

          <S.CardContent>{formatAmount(total)}</S.CardContent>
        </S.Card>
    </S.Container>
  );
}
