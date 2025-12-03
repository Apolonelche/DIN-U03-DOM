import Nav from "./Nav";

/**
 * Header component that displays the application header with a title and navigation menu.
 * 
 * @component
 * @returns {JSX.Element} A header element containing the app title "Películas" and a navigation component.
 * 
 * @example
 * return (
 *   <Header />
 * )
 */
function Header() {

  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Películas</h1>
        <Nav />
      </div>
    </header>
  );
}
export default Header;
