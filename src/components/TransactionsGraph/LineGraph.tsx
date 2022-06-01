import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useTransactions } from '../../contexts/TransactionsContext';
import { formatDate } from '../../utils/formatters';

interface Dates {
  name: string;
  value: number;
}

const options: Highcharts.Options = {
  chart: {
    type: 'line',
  },
  yAxis: {
    title: {
      text: 'Dinheiro',
      align: 'middle',
    },
  },
  title: {
    text: 'Total (por Data)',
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    valuePrefix: 'R$ ',
  },
  colors: ['#33cc95'],
};

export function LineGraph() {
  const { transactions } = useTransactions();

  const dates = transactions.reduce((dates, { createdAt, amount, type }) => {
    const date = formatDate(new Date(createdAt));
    const value = type === 'DEPOSIT' ? amount : -amount;

    const dateExists = dates.find(({ name }) => name === date);

    if (dateExists) {
      const updatedDate = {
        ...dateExists,
        value: dateExists.value + value,
      };

      return dates.map((category) =>
        category.name === date ? updatedDate : category,
      );
    }

    return [...dates, { name: date, value }];
  }, [] as Dates[]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        ...options,
        xAxis: {
          title: {
            text: 'Datas',
            align: 'high',
          },
          categories: dates.map(({ name }) => name),
        },
        series: [
          {
            showInLegend: false,
            data: dates.map(({ name, value }) => ({ name, y: value })),
          },
        ],
      }}
    />
  );
}
