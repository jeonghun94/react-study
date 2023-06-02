import { Helmet } from "react-helmet";
import styled from "styled-components";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface HeaderProps {
  backBtn?: boolean;
  title: string;
  isLight: boolean;
  changeTheme: () => void;
}

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  place-items: center;
  gap: 10px;
  height: 13vh;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${(props) => props.theme.accentColor};
`;

const IconContainer = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.accentColor};
`;

const Header = ({ backBtn, title, isLight, changeTheme }: HeaderProps) => {
  return (
    <Container>
      <Helmet>
        <title>Crypto Tracker{` - ${title}`}</title>
      </Helmet>
      <IconContainer>
        <Link to={"/"}>{backBtn && <FaArrowLeft size={30} />}</Link>
      </IconContainer>
      <Title>{title}</Title>
      <IconContainer onClick={changeTheme}>
        {isLight ? <BsMoonStarsFill /> : <BsFillSunFill />}
      </IconContainer>
    </Container>
  );
};

export default Header;
