import { navLinks } from "../data/content.js";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top app-navbar">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
          <img src="/images/logo.svg" alt="" width="40" height="40" />
          <span className="brand-name">Mini Estrategas</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a className="nav-link" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a className="btn btn-play" href="#destacados">
                ¡Jugar gratis!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
