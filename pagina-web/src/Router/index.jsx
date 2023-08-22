import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Login from "../Login";
import Contacto from "../Contacto";
import Producto from "../Producto";
import { Pokedex } from "../Pokedex";
import { Navigate } from "react-router-dom";

export const Router = ({ isLogged, addProduct }) => {
  return (
    <>
      <Routes>
        {isLogged ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/producto"
              element={<Producto addProduct={addProduct} />}
            />
            <Route path="/pokedex" element={<Pokedex />} />
            {/* <Route path="/pokedex2" element={<Pokedex2 />} /> */}
            {/* <Route path='/[MyRuta]' element={<MyComponent/>}/> */}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
            {/* <Route path="**" element={<Home />} /> */}
          </>
        )}
      </Routes>
    </>
  );
};
