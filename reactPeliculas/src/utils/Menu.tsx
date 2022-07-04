import { Link, NavLink } from "react-router-dom";

export default function Menu() {
  const claseActiva = "active";

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand isActive">
          <h3>React Peliculas</h3>
        </NavLink>
        <div
          className="collapse navbar-collapse"
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item isActive">
              <NavLink to="/generos" className="nav-link">
                <h5>Generos</h5>
              </NavLink>
            </li>
            <li className="nav-item isActive">
              <NavLink to="/peliculas/filtrar" className="nav-link">
                <h5>Filtrar Peliculas</h5>
              </NavLink>
            </li>
            <li className="nav-item isActive">
              <NavLink to="/actores" className="nav-link">
                <h5>Actores</h5>
              </NavLink>
            </li>
            <li className="nav-item isActive">
              <NavLink to="/cines" className="nav-link">
                <h5>Cines</h5>
              </NavLink>
            </li>
            <li className="nav-item isActive">
              <NavLink to="/peliculas/crear" className="nav-link">
                <h5>Crear Películas</h5>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
