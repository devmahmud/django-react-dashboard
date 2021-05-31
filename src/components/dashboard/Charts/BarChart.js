import { Column } from '@ant-design/charts';

const BarChart = () => {
  let data = [
    {
      type: 'furniture',
      sales: 38,
    },
    {
      type: 'Grain, oil and food',
      sales: 52,
    },
    {
      type: 'Fresh fruit',
      sales: 61,
    },
    {
      type: 'Beauty Care',
      sales: 145,
    },
    {
      type: 'baby supplies',
      sales: 48,
    },
    {
      type: 'Imported Food',
      sales: 38,
    },
    {
      type: 'Food and Beverage',
      sales: 38,
    },
    {
      type: 'Household cleaning',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: 'category' },
      sales: { alias: 'sales' },
    },
  };
  return <Column {...config} height={200} />;
};

export default BarChart;
