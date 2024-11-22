import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        // console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return isLoading === true ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div className="container-offer">
        <div className="image-offer">
          <img src={data.product_pictures[0].secure_url} alt="image" />
        </div>

        <div className="description">
          <p>{data.product_price} €</p>
          {data.product_details.map((detail, index) => {
            const keysInObj = Object.keys(detail);

            const keyInObj = keysInObj[0];

            return (
              <>
                <p key={index} className="details">
                  <span className="keyInObj">{keyInObj}</span> :{" "}
                  <span className="keyInObj-detail">{detail[keyInObj]}</span>
                </p>
              </>
            );
          })}
          <div className="separator"></div>
          <p className="name">{data.product_name}</p>
          <div className="owner">
            {data.owner.account.avatar && (
              <img src={data.owner.account.avatar.secure_url} alt="avatar" />
            )}
            <span>{data.owner.account.username}</span>
          </div>
          <button className="buy">Acheter</button>
        </div>
      </div>
    </main>
  );
};
export default Offer;
