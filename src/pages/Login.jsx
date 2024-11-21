import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <div className="container-form">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Adresse email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </form>
        <button className="button-signup">Se connecter</button>
      </div>
      <div className="link">
        <a href="http://localhost:5173/signup">
          Pas encore de compte? Inscris-toi !
        </a>
      </div>
    </>
  );
};
export default Login;
