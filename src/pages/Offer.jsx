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
    <div className="container">
      {/* <h2>Offer</h2>
      <p>{data.product_name}</p> */}

      {data.product_details.map((detail, index) => {
        const keysInObj = Object.keys(detail);

        const keyInObj = keysInObj[0];

        return (
          <p key={index}>
            {keyInObj} : {detail[keyInObj]}
          </p>
        );
      })}
    </div>
  );
};
export default Offer;
