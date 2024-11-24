import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, handleConnexionStatus }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <Link target="_blank" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vinted_logo.png/1200px-Vinted_logo.png"
            alt="logo vinted "
          />
        </Link>

        <div className="search">
          <input type="text" placeholder="Rechercher des articles ? "></input>
          <div className="filters">
            <span>Trier par prix : </span>
            <div className="switch">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </div>
            <span>Prix entre : </span>
          </div>
        </div>

        <nav>
          <div className="login">
            {token ? (
              <button
                className="deconnexion"
                onClick={() => {
                  handleConnexionStatus(null);
                  navigate("/");
                }}
              >
                Déconnexion
              </button>
            ) : (
              <>
                <button onClick={() => navigate("/signup")}>S'inscrire</button>
                <button onClick={() => navigate("/login")}>Se connecter</button>
              </>
            )}
          </div>
          <div className="selling">
            <button>Vends tes articles</button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
