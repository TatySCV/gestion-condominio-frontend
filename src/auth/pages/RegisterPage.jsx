import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import { FaGoogle } from "react-icons/fa";
import image from "../../img/login.jpeg";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría el manejo de la autenticación del formulario
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);  // Aquí puedes obtener los datos del usuario autenticado
      navigate("/");
      // Realiza lo que necesites con el usuario (ej. redirigir al dashboard)
    } catch (error) {
      console.error("Error de autenticación con Google:", error);
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen bg-purple-100">

      {/* Sección de la imagen (60%) con superposición */}
      <div className="col-span-3 hidden md:block relative">
        <img
          src={image}
          alt="Imagen decorativa"
          className="w-full h-full object-cover rounded-r-[100px] shadow-lg -ml-5"
        />
      </div>

      {/* Sección del formulario (40%) */}
      <div className="flex justify-center items-center col-span-2 relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-3xl text-center text-purple-600 mb-6">
            Registro
          </h2>

          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <InputField
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputField
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              style="bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
            >
              Registrarse
            </Button>

            <div className="my-4 text-center gap-4">
              <Button onClick={handleGoogleLogin} style="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-5">
                <FaGoogle size={20} /> Regístrate con Google
              </Button>
            </div>

            <p className="text-center text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <LinkButton href="/login" className="text-purple-600">
                Inicia sesión aquí
              </LinkButton>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;