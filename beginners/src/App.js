import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./routes/Character";
import Characters from "./routes/Characters";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
};

export default App;
