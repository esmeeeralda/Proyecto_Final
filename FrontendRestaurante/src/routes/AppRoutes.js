import React from "react";
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import Home from "../pages/home";
import Empleado from "../pages/empleado";
import Usuario from "../pages/usuario";
import Login from "../auth/Login";
import Logout from '../auth/Logout';
import Sidebar from '../layout/Sidebar';
import Reporteuser from '../pages/reporteuser';
import Ajustes from '../pages/ajustes';
import Categoriaplato from "../pages/categoriaplato";
import Plato from "../pages/plato";
import Mesa from "../pages/mesa";
import Orden from "../pages/orden";
import Detalleorden from "../pages/detalleorden";
import AdminPanel from '../pages/AdminPanel';
import Reporteempleado from  "../pages/reporteempleado";
import ReportePlato from  "../pages/reporteplato";
import Frontmesero from "../pages/frontmesero"
import Error404 from '../pages/Error404';
import Cocina from "../pages/Cocina";
import Historial from "../pages/Historial";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PrivateLayout = () => {
  const { user } = useAuth();

  // Redirige al login si no hay un usuario autenticado
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 p-3 bg-light overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Ruta de login */}
      <Route path="/" element={user ? <Navigate to="/home" replace /> : <Login />} />

      {/* Rutas protegidas */}
      <Route element={<PrivateLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="usuario" element={<Usuario />} />
        <Route path="empleado" element={<Empleado />} />
        <Route path="reporteuser" element={<Reporteuser />} />
        <Route path="reporteempleado" element={<Reporteempleado />} />
        <Route path="categoriaplato" element={<Categoriaplato />} />
        <Route path="plato" element={<Plato />} />
        <Route path="mesa" element={<Mesa />} />
        <Route path="orden" element={<Orden />} />
        <Route path="detalleorden" element={<Detalleorden />} />
        <Route path="reporteplato" element={<ReportePlato />} />
        <Route path="frontmesero" element={<Frontmesero />} />
        <Route path="Cocina" element={<Cocina />} />
        <Route path="Historial" element={<Historial />} />
        <Route path="ajustes" element={<Ajustes />} />
        <Route path="Logout" element={<Logout />} />
      </Route>

      {/* Ruta para errores 404 */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
