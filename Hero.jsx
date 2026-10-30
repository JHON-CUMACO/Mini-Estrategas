import { heroGame, safetyPoints } from "../data/content.js";

export default function Hero() {
  return (
    <header id="inicio" className="hero section-anchor">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <span className="badge rounded-pill hero-badge mb-3">
              🎮 100% gratis y fácil de usar
            </span>
            <h1 className="display-4 fw-bold hero-title">
              ¡Bienvenido a <span className="text-accent">Mini Estrategas</span>!
            </h1>
            <p className="lead my-3">
              Aprende a pensar, planear y tomar buenas decisiones mientras te
              diviertes. Juegos de estrategia pensados para niñas y niños
              menores de 13 años.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <a href="#destacados" className="btn btn-play btn-lg">
                Ver juegos
              </a>
              <a href="#categorias" className="btn btn-outline-play btn-lg">
                Explorar categorías
              </a>
            </div>

            <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
              {safetyPoints.map((p) => (
                <li key={p} className="safety-chip">
                  ✔ {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <figure className="hero-figure mb-0">
              <img
                src={heroGame.image}
                alt={`Ilustración del juego destacado ${heroGame.name}`}
                className="img-fluid"
              />
              <figcaption className="hero-caption">
                <small>Juego destacado</small>
                <strong>{heroGame.name}</strong>
                <span>{heroGame.genre}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
}
