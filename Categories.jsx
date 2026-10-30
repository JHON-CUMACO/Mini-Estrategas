import SectionTitle from "./SectionTitle.jsx";
import { categories } from "../data/content.js";

export default function Categories() {
  return (
    <section id="categorias" className="py-5 section-anchor bg-soft">
      <div className="container">
        <SectionTitle
          title="Categoría: Estrategia"
          subtitle="Elige el tipo de reto que más te gusta. ¡Todos entrenan tu cerebro!"
        />

        <div className="row g-4">
          {categories.map((cat) => (
            <div className="col-12 col-sm-6 col-lg-4" key={cat.id}>
              <article className={`category-card h-100 ${cat.color}`}>
                <span className="category-icon" aria-hidden="true">
                  {cat.icon}
                </span>
                <h3 className="h5 fw-bold">{cat.title}</h3>
                <p className="mb-0">{cat.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
