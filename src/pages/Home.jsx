import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        // console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading === true ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="banniere">
        <div className="container">
          <div className="homepage">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <button> Commencer à vendre</button>
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
