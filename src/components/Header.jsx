import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link target="_blank" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vinted_logo.png/1200px-Vinted_logo.png"
            alt="logo vinted "
          />
        </Link>

        <input type="text" placeholder="Rechercher des articles ? "></input>

        <nav>
          <div className="login">
            <button>S'inscrire</button>
            <button>Se connecter</button>
          </div>
          <div className="sell">
            <button>Vends tes articles</button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
