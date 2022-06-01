import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useTransactions } from '../../contexts/TransactionsContext';

const options: Highcharts.Options = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Relações',
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    valuePrefix: 'R$ ',
  },
  colors: ['#33cc95', '#e52e4d'],
};

export function PieGraph() {
  const { getSummary } = useTransactions();

  const { deposits, withdraws } = getSummary();

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        ...options,
        series: [
          {
            data: [
              { name: 'Depositos', y: deposits },
              { name: 'Saídas', y: withdraws },
            ],
          },
        ],
      }}
    />
  );
}
