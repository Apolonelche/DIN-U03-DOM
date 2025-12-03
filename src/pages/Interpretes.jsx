import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

/**
 * Interpretes component - Displays a list of actors from movies
 * 
 * Renders a grid layout showing all available actors/interpretes from the movies collection.
 * Each actor is displayed in a card that links to their detailed view for a specific movie.
 * 
 * @component
 * @returns {React.ReactElement} A fragment containing the actors grid with navigation links
 * 
 * @requires peliculas - An array of movie objects containing actor information
 * @requires Link - React Router component for client-side navigation
 * @requires List - Custom component to display individual actor information
 * 
 * @example
 * return <Interpretes />
 */
function Interpretes() {
  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
        <p className="text-gray-700 mb-6">
            Estos son los intérpretes disponibles de nuestras películas:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {peliculas.map((pelicula) =>
                pelicula.actores.map((actor, idInterprete) => (
                    <Link 
                        key={`${pelicula.id}-${idInterprete}`} 
                        to={`/detalle/pelicula/${pelicula.id}/interprete/${idInterprete}`}
                        aria-label={`Ver detalles del intérprete ${actor.nombre}`}>
                        <List
                            // key={idInterprete} // No es necesario aquí porque el key está en el Link
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={pelicula.nota === 10}
                        >
                            {actor.biografia}
                        </List>
                    </Link>
                ))
            )}
        </div>
    </>
  );
}
export default Interpretes;