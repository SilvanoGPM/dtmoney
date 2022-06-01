import { BarGraph } from './BarGraph';
import { LineGraph } from './LineGraph';
import { PieGraph } from './PieGraph';

import * as S from './styles';

export function TransactionsGraph() {
  return (
    <S.Container>
      <S.Graph full>
        <PieGraph />
      </S.Graph>

      <S.Group>
        <S.Graph>
          <BarGraph
            title="Entradas (por Categoria)"
            color="#33cc95"
            graphType="DEPOSIT"
          />
        </S.Graph>

        <S.Graph>
          <BarGraph
            title="Saídas (por Categoria)"
            color="#e52e4d"
            graphType="WITHDRAW"
          />
        </S.Graph>
      </S.Group>

      <S.Graph full>
        <LineGraph />
      </S.Graph>
    </S.Container>
  );
}
