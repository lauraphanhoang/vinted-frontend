import { useState } from "react";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <div className="container-form">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
          <input
            type="email"
            placeholder="Email"
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
        <div>
          <input type="checkbox"></input>
          <span>S'inscrire à notre newsletter</span>

          <p>
            En m'inscrivant je confirme avoir lu et accepré les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir moins de 18ans.
          </p>
          <button className="button-signup">S'inscrire</button>
          <div className="link">
            <a href="http://localhost:5173/signup">
              Pas encore de compte? Inscris-toi !
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
