import { StringifyOptions } from "querystring";
import { useState } from "react";
import styled from "styled-components";
const Text = styled.div`
  color: ${(props) => props.theme.textColor};
  width: 100;
  height: 100;
  border: 1px solid black;
`;

interface Props {
  children?: StringifyOptions;
}

function App() {
  const d = useState<Props>();
  return (
    <div className="App">
      <h1>gi</h1>
      <Text> gi</Text>
    </div>
  );
}

export default App;
