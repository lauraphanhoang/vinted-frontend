import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, handleConnexionStatus, title, setTitle }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vinted_logo.png/1200px-Vinted_logo.png"
            alt="logo vinted "
          />
        </Link>

        <div className="search">
          <input
            type="text"
            placeholder="Rechercher des articles ?"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
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
            <button onClick={() => navigate("/publish")}>
              Vends tes articles
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
