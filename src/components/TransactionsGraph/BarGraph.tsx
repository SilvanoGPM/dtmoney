import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { useTransactions } from '../../contexts/TransactionsContext';

interface BarGraphProps {
  title: string;
  color: string;
  graphType: 'WITHDRAW' | 'DEPOSIT';
}

interface Category {
  name: string;
  value: number;
}

const options: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    valuePrefix: 'R$ ',
  },
  yAxis: {
    title: {
      text: 'Dinheiro',
      align: 'middle',
    },
  },
};

export function BarGraph({ title, color, graphType }: BarGraphProps) {
  const { transactions } = useTransactions();

  const categories = transactions
    .filter(({ type }) => type === graphType)
    .reduce((categories, { category, amount }) => {
      const transactionCategory =
        category.slice(0, 1) + category.slice(1).toLowerCase();

      const categoryExists = categories.find(
        ({ name }) => name.toLowerCase() === transactionCategory.toLowerCase(),
      );

      if (categoryExists) {
        const updatedCategory = {
          ...categoryExists,
          value: categoryExists.value + amount,
        };

        return categories.map((category) =>
          category.name === transactionCategory ? updatedCategory : category,
        );
      }

      return [...categories, { name: transactionCategory, value: amount }];
    }, [] as Category[]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        ...options,
        title: {
          text: title,
        },
        colors: [color],
        xAxis: {
          title: {
            text: 'Categorias',
            align: 'high',
          },
          categories: categories.map(({ name }) => name),
        },
        series: [
          {
            name: 'Transações (por Categoria)',
            colorByPoint: true,
            data: categories.map(({ name, value }) => ({
              name,
              y: value,
            })),
            showInLegend: false,
          },
        ],
      }}
    />
  );
}
