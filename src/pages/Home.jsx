import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ title }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let filters = "";
        if (title) {
          filters += "?title=" + title;
        }

        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers" + filters
        );
        // console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [title]);

  return isLoading === true ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="banniere">
        <div className="container">
          <div className="homepage">
            <p>Prêts à faire du tri dans vos placards ?</p>
            <button onClick={() => navigate("/publish")}>
              {" "}
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>
      <div className="container-offerslist">
        {data.offers.map((offer) => {
          return (
            <Link to={`/offers/${offer._id}`} key={offer._id}>
              <div className="product">
                <div className="owner">
                  {offer.owner.account.avatar && (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt="avatar"
                    />
                  )}
                  <span>{offer.owner.account.username}</span>
                </div>
                <img src={offer.product_pictures[0].url} alt="picture" />
                <p className="price">{offer.product_price.toFixed(2)} €</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[0].MARQUE}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Home;
