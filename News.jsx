import SectionTitle from "./SectionTitle.jsx";
import { news } from "../data/content.js";

export default function News() {
  return (
    <section id="novedades" className="py-5 section-anchor bg-soft">
      <div className="container">
        <SectionTitle
          title="Novedades"
          subtitle="Lanzamientos, noticias y recomendaciones del equipo."
        />

        <div className="row g-4">
          {news.map((item) => (
            <div className="col-12 col-lg-4" key={item.id}>
              <article className="news-card h-100">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className={`badge ${item.badge}`}>{item.type}</span>
                  <small className="text-muted">{item.date}</small>
                </div>
                <h3 className="h5 fw-bold">{item.title}</h3>
                <p className="mb-0">{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
