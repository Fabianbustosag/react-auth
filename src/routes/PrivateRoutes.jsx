// PrivateRoute.js
import React from 'react';
import { Navigate , Outlet} from 'react-router-dom';
import { useAuth } from './AuthContext'; // Importa tu contexto de autenticación

function PrivateRoute(){
  const { isAuthenticated } = useAuth();

  // Si no está autenticado, redirigir a la página de inicio de sesión
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
