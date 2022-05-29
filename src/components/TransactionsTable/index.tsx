import * as S from './styles';

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Programação</td>
            <td>29/05/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100</td>
            <td>Casa</td>
            <td>12/05/2022</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  );
}
