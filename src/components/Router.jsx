/**
 * AppRouter Component
 * 
 * Defines the routing structure for the application using React Router.
 * Sets up all main routes with a shared layout (Contenedor) and handles navigation
 * between different pages including movies, actors, administration, and detail views.
 * 
 * @component
 * @returns {JSX.Element} A Routes component containing all application routes with nested layout
 * 
 * @description
 * Routes Structure:
 * - "/" - Home page
 * - "/inicio" - Redirects to home
 * - "/peliculas" - Movies listing page
 * - "/interpretes" - Actors/Interpreters listing page
 * - "/admin" - Administration page
 * - "/detalle/pelicula/:idPeli" - Movie details page
 * - "/detalle/pelicula/:idPeli/interprete/:idInterprete" - Actor details within movie context
 * - "*" - Catch-all 404 page for undefined routes
 * 
 * @example
 * import AppRouter from './components/Router';
 * 
 * function App() {
 *   return <AppRouter />;
 * }
 */
import { Routes, Route, Navigate } from "react-router-dom";

import Contenedor from "./Contenedor";
import Detail from "./Detail";

import Home from "../pages/Home";
import Peliculas from "../pages/Peliculas";
import Interpretes from "../pages/Interpretes";
import Admin from "../pages/Admin";

function AppRouter() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detalle/pelicula/:idPeli" element={<Detail es="pelicula" />} />
        <Route path="/detalle/pelicula/:idPeli/interprete/:idInterprete" element={<Detail es="interprete" />} />
      </Route>

      {/* Página 404 */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta no existe.</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}
export default AppRouter;