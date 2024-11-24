import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);

  const handleConnexionStatus = (token) => {
    if (token === null) {
      Cookies.remove("vinted-token");
    } else {
      Cookies.set("vinted-token", token, { expires: 14 });
    }
    setToken(token);
  };

  return (
    <>
      <Router>
        <Header token={token} handleConnexionStatus={handleConnexionStatus} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offers/:id" element={<Offer />}></Route>
          <Route
            path="/signup"
            element={<Signup handleConnexionStatus={handleConnexionStatus} />}
          ></Route>
          <Route
            path="/login"
            element={<Login handleConnexionStatus={handleConnexionStatus} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
