export default function GameCard({ game }) {
  return (
    <div className="card game-card h-100">
      <img
        src={game.image}
        className="card-img-top"
        alt={`Imagen del juego ${game.name}`}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <span className="badge genre-badge align-self-start mb-2">
          {game.genre}
        </span>
        <h3 className="card-title h5 fw-bold">{game.name}</h3>
        <p className="card-text flex-grow-1">{game.description}</p>
        <a href="#inicio" className="btn btn-play btn-sm align-self-start">
          Jugar ahora
        </a>
      </div>
    </div>
  );
}
