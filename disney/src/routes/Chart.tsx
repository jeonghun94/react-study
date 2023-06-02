import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";
import ReactApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}

const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const { data, isLoading } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  let validData = data ?? [];
  if ("error" in validData) validData = [];

  return (
    <>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <ReactApexChart
            options={{
              chart: {
                type: "candlestick",
                height: 350,
              },
              title: {
                text: "CandleStick Chart",
                align: "left",
              },
              xaxis: {
                type: "datetime",
              },
              yaxis: {
                tooltip: {
                  enabled: true,
                },
              },
            }}
            series={[
              {
                name: "시세",
                data: validData.map((price) => ({
                  x: Number(price.time_open) * 1000,
                  y: [price.open, price.high, price.low, price.close],
                })),
              },
            ]}
            type="candlestick"
            height={350}
          />
        </>
      )}
    </>
  );
};

export default Chart;
