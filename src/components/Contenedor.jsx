import { Outlet } from "react-router-dom";

/**
 * Contenedor component - Main layout wrapper for routing content
 * 
 * Renders a semantic main section with configurable title and dynamic content
 * via React Router's Outlet component. Provides accessibility features including
 * proper ARIA labels and semantic HTML structure.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.titulo] - Optional page title displayed as h1 heading
 * @returns {JSX.Element} Main container with gradient background and centered content
 * 
 * @example
 * // Usage with title
 * <Contenedor titulo="Películas" />
 * 
 * @example
 * // Usage without title (children rendered via Outlet)
 * <Contenedor />
 */
function Contenedor({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        {/* {children} */}
        {/* Aquí se muestra el contenido según la ruta */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;