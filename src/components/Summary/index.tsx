import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../contexts/TransactionsContext';

import * as S from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  console.log(transactions);

  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <p>Entradas</p>
          <img alt="Income icon" src={incomeImg} />
        </S.CardHeader>

        <S.CardContent>R$ 1000,00</S.CardContent>
      </S.Card>

      <S.Card>
        <S.CardHeader>
          <p>Saidas</p>
          <img alt="Outcome icon" src={outcomeImg} />
        </S.CardHeader>

        <S.CardContent>- R$ 500,00</S.CardContent>
      </S.Card>

      <S.Card className="highlight">
        <S.CardHeader>
          <p>Total</p>
          <img alt="Total icon" src={totalImg} />
        </S.CardHeader>

        <S.CardContent>R$ 500,00</S.CardContent>
      </S.Card>
    </S.Container>
  );
}
