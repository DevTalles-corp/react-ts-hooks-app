import { Link } from 'react-router';

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2">
        <Link to="/profile" className="hover:text-blue-500 underline text-2xl">
          Perfil
        </Link>
        <Link to="/login" className="hover:text-blue-500 underline text-2xl">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};
