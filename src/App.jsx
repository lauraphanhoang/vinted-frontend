import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(Cookies.get("vinted-token") || null);
  const [title, setTitle] = useState("");

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
        <Header
          token={token}
          handleConnexionStatus={handleConnexionStatus}
          title={title}
          setTitle={setTitle}
        />
        <Routes>
          <Route
            path="/"
            element={<Home title={title} setTitle={setTitle} />}
          ></Route>
          <Route path="/offers/:id" element={<Offer token={token} />}></Route>
          <Route
            path="/signup"
            element={<Signup handleConnexionStatus={handleConnexionStatus} />}
          ></Route>
          <Route
            path="/login"
            element={<Login handleConnexionStatus={handleConnexionStatus} />}
          ></Route>
          <Route path="/publish" element={<Publish token={token} />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
