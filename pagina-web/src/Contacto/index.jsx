import React, { useState } from "react";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleChangeinput = (setState) => (e) => {
    setState(e.target.value);
  }; // control de cambios de todos los input

  const handleClickEnviar = () => {
    // {name-> llave: name-> valor }
    let objContact = {
      name,
      email,
      tel,
    };
    console.log("objContact: ", objContact);
  };

  return (
    <form>
      <h2>Contatanos:</h2>
      <img src="" alt="" />
      <div>
        <label htmlFor="">Nombre</label>
        <input
          onChange={handleChangeinput(setName)}
          required
          type="text"
          name="Nombre"
          id="Nombre"
          value={name}
        />
      </div>
      <div>
        <label htmlFor="">Correo</label>
        <input
          onChange={handleChangeinput(setEmail)}
          required
          type="email"
          name="Correo"
          id="Correo"
          value={email}
        />
      </div>
      <div>
        <label htmlFor="">Telefono</label>
        <input
          onChange={handleChangeinput(setTel)}
          required
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          maxLength={10}
          name="Telefono"
          id="Telefono"
          value={tel}
        />
      </div>
      <button onClick={handleClickEnviar} type="button">
        Enviar
      </button>
    </form>
  );
};

export default Contacto;
