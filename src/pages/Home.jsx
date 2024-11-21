const Home = ({ data }) => {
  // console.log(data.offers);
  return (
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
        {data.offers.map((offer, index) => {
          return (
            <div className="product" key={index}>
              <div className="owner">
                {/* <img src={offer.owner.account.avatar.url} alt="avatar" /> */}
                <h3>{offer.owner.account.username}</h3>
              </div>
              <img src={offer.product_pictures[0].url} alt="picture" />
              <p className="price">{offer.product_price} €</p>
              <p>{offer.product_details[1].TAILLE}</p>
              <p>{offer.product_details[0].MARQUE}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Home;
