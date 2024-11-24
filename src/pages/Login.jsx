import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

const Login = ({ handleConnexionStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const [token, setToken] = useState(Cookies.get("vinted-token") || null);

  const handleLogin = async (event) => {
    event.preventDefault();
    // console.log(event);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      // console.log(response.data);
      handleConnexionStatus(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-form">
        <h1>Se connecter</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className="button-signup">Se connecter</button>
        </form>
      </div>
      <div className="link">
        <Link className="a" to="/signup">
          Pas encore de compte? Inscris-toi !
        </Link>
      </div>
    </>
  );
};
export default Login;
