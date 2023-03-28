import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";
import HomepageContainer from "./containers/HomepageContainer";
import BakeryContainer from "./containers/BakeryContainer";
import ProduceContainer from "./containers/ProduceContainer";
import DairyContainer from "./containers/DairyContainer";
import MeatsContainer from "./containers/MeatsContainer";
import GroceryContainer from "./containers/GroceryContainer";
import AlcoholContainer from "./containers/AlcoholContainer";

function App() {
  // STATE
  const [username, setUsername] = useState("");
  // FUNCTIONS
  const getUsername = (username) => {
    setUsername(username);
  };
  return (
    <Router>
      <NavBar username={username} />
      <Routes>
        <Route
          path="/"
          element={<LoginContainer getUsername={getUsername} />}
        />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/home" element={<HomepageContainer />} />
        <Route path="/produce" element={<ProduceContainer />} />
        <Route path="/bakery" element={<BakeryContainer />} />
        <Route path="/dairy" element={<DairyContainer />} />
        <Route path="/meats" element={<MeatsContainer />} />
        <Route path="/grocery" element={<GroceryContainer />} />
        <Route path="/alcohol" element={<AlcoholContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
