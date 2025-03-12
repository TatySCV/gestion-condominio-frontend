import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="p-8 rounded-lg shadow-lg bg-purple-100 w-96">
        <h2 className="text-2xl font-bold text-center text-purple-700">Registro</h2>
        <form className="mt-4">
          <input type="text" placeholder="Nombre completo" className="w-full p-2 border rounded mt-2" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-2 border rounded mt-2" />
          <input type="password" placeholder="Contraseña" className="w-full p-2 border rounded mt-2" />
          <button className="w-full bg-purple-700 text-white p-2 rounded mt-4">Registrarse</button>
        </form>
        <p className="text-center mt-4 text-sm">
          ¿Ya tienes cuenta? <Link to="/login" className="text-purple-700">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;