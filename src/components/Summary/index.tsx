import CountUp from 'react-countup';

import { useTransactions } from '../../contexts/TransactionsContext';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import * as S from './styles';

export function Summary() {
  const { getSummary } = useTransactions();

  const { total, deposits, withdraws } = getSummary();

  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <p>Entradas</p>
          <img alt="Income icon" src={incomeImg} />
        </S.CardHeader>

        <S.CardContent>
          <CountUp
            end={deposits}
            decimals={2}
            decimal=","
            prefix="R$ "
            separator="."
          />
        </S.CardContent>
      </S.Card>

      <S.Card>
        <S.CardHeader>
          <p>Saidas</p>
          <img alt="Outcome icon" src={outcomeImg} />
        </S.CardHeader>

        <S.CardContent>
          <CountUp
            end={-withdraws}
            decimals={2}
            decimal=","
            prefix="R$ "
            separator="."
          />
        </S.CardContent>
      </S.Card>

      <S.Card className="highlight">
        <S.CardHeader>
          <p>Total</p>
          <img alt="Total icon" src={totalImg} />
        </S.CardHeader>

        <S.CardContent>
          <CountUp
            end={total}
            decimals={2}
            decimal=","
            prefix="R$ "
            separator="."
          />
        </S.CardContent>
      </S.Card>
    </S.Container>
  );
}
