import Horizontal from "./BarraHorizontal"; // export defualt
import { BarraVertical as Vertical } from "./BarraVertical"; // sin export default // as -> alias ejemplo: { BarraVertical as Vertical }
import Imagen from "./assets/Imagen/user.jpeg";
import Logo from "./assets/Imagen/logo2.png";
import Login from "./Login";

import { users } from "./db/users.json";

import "./App.css";
import { Router } from "./Router";
import { useToggleIsOpen } from "./hooks/useToggleIsOpen";
import { useAddDeleteCar } from "./hooks/useAddDeleteCar";
import { useIsLogged } from "./hooks/useIsLogged";
import { useButton } from "./hooks/useButton";

export const App = () => {
  const { isCartOpen, toggleCart } = useToggleIsOpen(false); // estado -> depende de como queras inicializar el estado
  const { addProduct, removeProduct, products } = useAddDeleteCar([]);
  const { handleLogOut } = useIsLogged();
  const { showButton, toggleButton } = useButton();
  const {
    isLogged,
    mensaje,
    handleLogin,
    handleChangeInput,
    setNombreUsuario,
    nombreUsuario,
  } = useIsLogged(users);

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
              removeProduct={removeProduct}
              products={products}
              handleLogOut={handleLogOut}
              toggleButton={toggleButton}
              showButton={showButton}
            />

            <div className="views-container">
              <Router isLogged={isLogged} addProduct={addProduct} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default App;
