import "./login-styles.css";
import log from "../assets/Imagen/aa.avif";

const Login = ({ handleChangeInput, handleLogin, nombreUsuario, mensaje }) => {
  return (
    <div className="card-login">
      <div className="ime-login">
        <img className="img-log" src={log} alt="" />
        {/* <h1>Login</h1> Cambiarlo por una imagen */}
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={nombreUsuario}
            onChange={handleChangeInput}
            placeholder="User name:"
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
