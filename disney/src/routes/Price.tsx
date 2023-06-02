import styled from "styled-components";
import { useOutletContext } from "react-router";

interface TickersProps {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  tickersData: TickersProps;
}

const PriceTab = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  padding: 1.2rem;
  justify-content: space-between;
  border-radius: 0.7rem;
  background-color: ${(props) => props.theme.itemBgColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 110px;
  gap: 15px;
  margin-bottom: 15px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.itemBgColor};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

const Price = () => {
  const { tickersData } = useOutletContext<PriceProps>();

  const {
    percent_change_1h,
    percent_change_6h,
    percent_change_12h,
    percent_change_24h,
    percent_change_7d,
    percent_change_30d,
    ath_date,
    ath_price,
  } = tickersData.quotes.USD;

  const athDate = new Date(ath_date);

  const data = [
    {
      label: "Compared to 1 hours ago,",
      percentage: percent_change_1h,
    },
    {
      label: "Compared to 6 hours ago,",
      percentage: percent_change_6h,
    },
    {
      label: "Compared to 12 hours ago,",
      percentage: percent_change_12h,
    },
    {
      label: "Compared to 24 hours ago,",
      percentage: percent_change_24h,
    },
    {
      label: "Compared to 7 days ago,",
      percentage: percent_change_7d,
    },
    {
      label: "Compared to 30 days ago,",
      percentage: percent_change_30d,
    },
  ];

  return (
    <Container>
      <PriceTab>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <p>Highest Price</p>
          <p> {athDate.toDateString()}</p>
        </div>
        <div>${ath_price.toFixed(2)}</div>
      </PriceTab>
      {data.map((item) => {
        return (
          <Item>
            <Title>{item.label}</Title>
            {item.percentage + "%"}
          </Item>
        );
      })}
    </Container>
  );
};

export default Price;
