import SectionTitle from "./SectionTitle.jsx";
import GameCard from "./GameCard.jsx";
import { featuredGames } from "../data/content.js";

export default function FeaturedGames() {
  return (
    <section id="destacados" className="py-5 section-anchor">
      <div className="container">
        <SectionTitle
          title="Juegos destacados"
          subtitle="Los favoritos de nuestra comunidad de pequeños estrategas."
        />

        <div className="row g-4">
          {featuredGames.map((game) => (
            <div className="col-12 col-md-6 col-lg-4" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
