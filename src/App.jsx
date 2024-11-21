import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

//Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

//Components
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
      );
      // console.log(response.data);
      // console.log(data.offers);

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Header />
        {isLoading ? (
          <span>En cours de chargement... </span>
        ) : (
          <Routes>
            <Route path="/" element={<Home data={data} />}></Route>
            <Route path="/offer/:id" element={<Offer />}></Route>
          </Routes>
        )}

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
