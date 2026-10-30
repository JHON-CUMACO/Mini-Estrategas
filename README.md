# Mini Estrategas

Landing page de una plataforma **ficticia** de videojuegos de estrategia, gratis y seguros para niñas y niños **menores de 13 años**. Proyecto académico construido con **React + Vite** y **Bootstrap 5**.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Pasos para ejecutarlo

```bash
# 1. Clonar el repositorio
git clone <URL-DEL-REPOSITORIO>
cd mini-estrategas

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

Otros comandos:

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve la versión de producción (http://localhost:4173)
```

## Estructura del proyecto

```
mini-estrategas/
├── public/images/        # Ilustraciones SVG propias (logo, hero y juegos)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Logo y enlaces a las secciones
│   │   ├── Hero.jsx          # Bienvenida, descripción y juego destacado
│   │   ├── Categories.jsx    # Categoría Estrategia y sus subcategorías
│   │   ├── FeaturedGames.jsx # Cuadrícula de juegos destacados
│   │   ├── GameCard.jsx      # Tarjeta: imagen, nombre, género y descripción
│   │   ├── News.jsx          # Lanzamientos, noticias y recomendaciones
│   │   ├── SectionTitle.jsx  # Título reutilizable de sección
│   │   └── Footer.jsx        # Cierre de la página
│   ├── data/content.js       # Textos y datos de la página
│   ├── App.jsx               # Composición de componentes
│   ├── main.jsx              # Punto de entrada
│   └── styles.css            # Estilos propios (colores, tarjetas, hero)
├── docs/capturas/        # Capturas de escritorio y móvil
├── index.html
└── package.json
```

## Bootstrap: dónde se usa

- **Sistema de rejilla** (`container`, `row`, `col-*`): Hero, categorías, juegos y novedades.
- **Navbar** (`navbar`, `navbar-expand-lg`, `collapse`): menú que se convierte en botón hamburguesa en móvil.
- **Tarjetas** (`card`) en los juegos, **badges** en géneros y novedades, **botones** y utilidades (`d-flex`, `gap-*`, `py-5`, `img-fluid`).

## Notas

- Los enlaces del Navbar llevan a secciones de la misma página (`#inicio`, `#categorias`, `#destacados`, `#novedades`).
- Todos los juegos, nombres e imágenes son ficticios y de creación propia.
