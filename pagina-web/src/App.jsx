import Home from "./Home";
import Barra from "./BarraHorizontal"; // export defualt
import { BarraVertical as Vertical } from "./BarraVertical"; // sin export default // as -> alias ejemplo: { BarraVertical as Vertical }
import Imagen from "./assets/Imagen/user.jpeg";
import Logo from "./assets/Imagen/logo2.png";

import "./App.css";
import Contacto from "./Contacto";

export const App = () => {
  const userName = "Santiago_444";

  const options = [
    { id: 1, nombre: "Inicio", enlace: "/inicio" },
    { id: 2, nombre: "Productos", enlace: "/productos" },
    { id: 3, nombre: "Contacto", enlace: "/contacto" },
    { id: 4, nombre: "Nosotros", enlace: "/nosotros" },
  ];

  return (
    <section className="box-container">
      <div className="box-1">
        <Vertical menuOptions={options} Urlogo={Logo} />
      </div>
      <div className="box-2">
        <Barra userName={userName} urlimagen={Imagen} />
        <div className="home-container">
          {/* <Home /> */}
          <Contacto />
        </div>
      </div>
    </section>
  );
};

export default App;
