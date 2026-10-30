import { navLinks } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="app-footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <div className="d-flex align-items-center gap-2 mb-2">
              <img src="/images/logo.svg" alt="" width="36" height="36" />
              <span className="brand-name text-white">Mini Estrategas</span>
            </div>
            <p className="mb-0 footer-text">
              Plataforma ficticia creada con fines educativos. Juegos de
              estrategia gratis y seguros para menores de 13 años.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h2 className="h6 text-uppercase fw-bold">Explora</h2>
            <ul className="list-unstyled mb-0">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="footer-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h2 className="h6 text-uppercase fw-bold">Para las familias</h2>
            <p className="footer-text mb-0">
              Si eres mamá, papá o cuidador: no hay compras ni chats abiertos.
              Te recomendamos acompañar a los más pequeños.
            </p>
          </div>
        </div>

        <hr className="border-light opacity-25 my-4" />
        <p className="text-center small mb-0 footer-text">
          © 2026 Mini Estrategas · Proyecto académico de React · Todos los
          juegos e imágenes son ficticios.
        </p>
      </div>
    </footer>
  );
}
