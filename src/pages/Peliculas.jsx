import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

/**
 * Renders a list of available movies with their details.
 *
 * Displays a heading, a description, and a responsive grid of movie cards.
 * Each card links to the detailed view of the selected movie.
 *
 * @component
 * @returns {JSX.Element} The rendered list of movies.
 */
function Peliculas() {
  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de películas</h2>
        <p className="text-gray-700 mb-6">
            Estas son los películas disponibles:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {peliculas.map((pelicula) => (
                <Link key={pelicula.id} to={`/detalle/pelicula/${pelicula.id}`}>
                    <List
                        // key={pelicula.id}  // No es necesario aquí porque el key está en el Link
                        nombre={pelicula.nombre}
                        foto={pelicula.cartelera}
                    >
                        {pelicula.clasificacion}
                    </List>
                </Link>
                ))
            }
        </div>
    </>
  );
}
export default Peliculas;