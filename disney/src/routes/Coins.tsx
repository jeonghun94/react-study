import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { characters } from "../api";
import Header from "../components/Header";
import { useThemeStore } from "../zustand";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const CoinsList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 0px 10px;
`;

const Coin = styled.div`
  background-color: ${(props) => props.theme.itemBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    transition: all 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      transform: scale(1.05);
    }
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<ICharacter[]>(
    "allCharacters",
    characters
  );
  const { isLight, changeTheme } = useThemeStore();
  return (
    <Container>
      <Header
        title="Characters"
        isLight={Boolean(isLight)}
        changeTheme={changeTheme}
      />
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}/price`,
                }}
                state={{
                  name: coin.name,
                }}
              >
                <Img src={`${coin.imageUrl}`} />
                {coin.name.length > 10
                  ? coin.name.slice(0, 10) + "..."
                  : coin.name}
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};
export default Coins;
