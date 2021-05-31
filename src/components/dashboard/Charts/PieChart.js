import { Pie } from '@ant-design/charts';

const PieChart = () => {
  let data = [
    {
      type: 'Item One',
      value: 27,
    },
    {
      type: 'Item Two',
      value: 25,
    },
    {
      type: 'Item Three',
      value: 18,
    },
    {
      type: 'Item Four',
      value: 15,
    },
    {
      type: 'Item Five',
      value: 10,
    },
    {
      type: 'Other',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat(percent * 100, '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie {...config} height={200} />;
};

export default PieChart;
