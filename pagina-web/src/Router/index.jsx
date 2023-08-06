import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Home";
import Contacto from "../Contacto";
import Producto from "../Producto";
import { Pokedex } from "../Pokedex";
// import { Pokedex2 } from "../Pokedex";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/pokedex" element={<Pokedex />} />
        {/* <Route path="/pokedex2" element={<Pokedex2 />} /> */}
        {/* <Route path='/[MyRuta]' element={<MyComponent/>}/> */}
      </Routes>
    </>
  );
};
