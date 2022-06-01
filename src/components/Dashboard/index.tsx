import { Summary } from '../Summary';
import { TransactionsGraph } from '../TransactionsGraph';
import { TransactionsTable } from '../TransactionsTable';

import * as S from './styles';

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable />
      <TransactionsGraph />
    </S.Container>
  );
}
