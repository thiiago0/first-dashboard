import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export const useIsLogged = (users) => {
  const initialState = localStorage.getItem("isLogged") || false;
  const initialUsernameState = localStorage.getItem("user") || "";

  const [isLogged, setIsLogged] = useState(initialState);
  const [mensaje, setMensaje] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState(initialUsernameState);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setNombreUsuario(e.target.value);
  };

  const handleLogin = () => {
    const user = users.find((user) => user.nombreUsuario === nombreUsuario);

    if (user && user.nombreUsuario === nombreUsuario) {
      Swal.fire({
        title: "Success!",
        text: "User correct",
        icon: "success",
        confirmButtonText: "Go to home",
      });
      localStorage.setItem("user", user.nombreUsuario);
      localStorage.setItem("isLogged", true);
      setIsLogged(true); // aqui deberia poner el setIsLogged(true)
      setMensaje("");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Usuario no existe",
        icon: "error",
        confirmButtonText: "Cool",
      });
      setIsLogged(false);
      setMensaje("El usuario no existe");
    }
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "log out",
      text: "Estas seguro?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.removeItem("isLogged");
        setIsLogged(false);
        setNombreUsuario("");
        setMensaje("");
        navigate("/login");
        window.location.reload(); // forzando el reload de la pagina
      }
    });
  };

  return {
    isLogged,
    mensaje,
    nombreUsuario,
    handleLogin,
    handleLogOut,
    handleChangeInput,
    setNombreUsuario,
  };
};
