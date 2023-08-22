import "./login-styles.css";
import log from "../assets/Imagen/aa.avif";

const Login = ({ handleChangeInput, handleLogin, nombreUsuario, mensaje }) => {
  return (
    <div className="card-login">
      <div className="ime-login">
        <img className="img-log" src={log} alt="" />
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={nombreUsuario}
            onChange={handleChangeInput}
            placeholder="User name:"
            minLength="2"
            required={nombreUsuario}
          />
        </label>
        <button className="btn-log" type="submit">
          Login
        </button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
};

export default Login;
