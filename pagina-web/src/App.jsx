import Barra from "./BarraHorizontal"; // export defualt
import { BarraVertical as Vertical } from "./BarraVertical"; // sin export default // as -> alias ejemplo: { BarraVertical as Vertical }
import Imagen from "./assets/Imagen/user.jpeg";
import Logo from "./assets/Imagen/logo2.png";

import "./App.css";
import { Router } from "./Router";
import { useState } from "react";

export const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  // const userName = "Santiago_444";

  let options = [];
  isLogged &&
    options.push([
      { id: 1, nombre: "Inicio", enlace: "/" },
      { id: 2, nombre: "Producto", enlace: "/producto" },
      { id: 3, nombre: "Contacto", enlace: "/contacto" },
      { id: 4, nombre: "Pokedex", enlace: "/pokedex" },
      // { id: 5, nombre: "Pokedex2", enlace: "/pokedex2" },
    ]);

  return (
    <>
      {isLogged ? (
        <section className="box-container">
          <div className="box-1">
            <Vertical menuOptions={options} Urlogo={Logo} />
          </div>
          <div className="box-2">
            <Barra userName={userName} urlimagen={Imagen} />
            <div className="views-container">
              <Router />
              {/* <Contacto Ulrcontact={contact} /> */}
            </div>
          </div>
        </section>
      ) : (
        <h1>Hola</h1>
      )}
    </>
  );
};

export default App;
