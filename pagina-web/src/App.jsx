import Horizontal from "./BarraHorizontal"; // export defualt
import { BarraVertical as Vertical } from "./BarraVertical"; // sin export default // as -> alias ejemplo: { BarraVertical as Vertical }
import Imagen from "./assets/Imagen/user.jpeg";
import Logo from "./assets/Imagen/logo2.png";
import Login from "./Login";
import Swal from "sweetalert2";
import { users } from "./db/users.json";

import "./App.css";
import { Router } from "./Router";
import { useState } from "react";
import { useToggleIsOpen } from "./hooks/useToggleIsOpen";

export const App = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [mensaje, setMensaje] = useState(""); // estado -> depende de como queras inicializar el estado
  const { isCartOpen, toggleCart } = useToggleIsOpen();

  const handleChangeInput = (e) => {
    setNombreUsuario(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.nombreUsuario === nombreUsuario);

    if (user) {
      Swal.fire({
        title: "Success!",
        text: "User correct",
        icon: "success",
        confirmButtonText: "Go to home",
      });
      setIsLogged(true); // aqui deberia poner el setIsLogged(true)
      setMensaje("");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Usuario no existe",
        icon: "error",
        confirmButtonText: "Cool",
      });
      setMensaje("El usuario no existe");
    }
  };

  let options = [
    { id: 1, nombre: "Inicio", enlace: "/" },
    { id: 2, nombre: "Producto", enlace: "/producto" },
    { id: 3, nombre: "Contacto", enlace: "/contacto" },
    { id: 4, nombre: "Pokedex", enlace: "/pokedex" },
    // { id: 5, nombre: "Pokedex2", enlace: "/pokedex2" },
  ];

  return (
    <>
      {!isLogged ? (
        <section className="login-container">
          <Login
            setNombreUsuario={setNombreUsuario}
            handleChangeInput={handleChangeInput}
            handleLogin={handleLogin}
            mensaje={mensaje}
          />
        </section>
      ) : (
        <section className="box-container">
          <div className="box-1">
            <Vertical menuOptions={options} Urlogo={Logo} />
          </div>
          <div className="box-2">
            <Horizontal
              userName={nombreUsuario}
              urlimagen={Imagen}
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
            />
            <div className="views-container">
              <Router isLogged={isLogged} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default App;
