// components
import Chart, { useChart } from '../chart';

// ----------------------------------------------------------------------

const series = [{ name: 'profit', data: [31, 40, 28, -151, 42, 109, 100] }];

export default function ChartArea({ data }) {
  const chartOptions = useChart({
    xaxis: {
      type: 'category',
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  });

  return (
    <Chart
      type="area"
      series={[{ name: 'profit', data }]}
      options={chartOptions}
      width={265}
    />
  );
}
