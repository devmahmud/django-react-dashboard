import { Liquid } from '@ant-design/charts';

const LiquidChart = () => {
  var config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} height={200} />;
};

export default LiquidChart;
