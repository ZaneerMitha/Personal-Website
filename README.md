# Personal Website

[Visit the website](https://zaneermitha.com/index.html)

This portfolio highlights my skills, projects, experience, leadership, and contact information across four React pages, with Vite for local development and production builds.

## Technologies

- React
- Vite
- CSS custom properties for shared design tokens

## Updating portfolio content

Edit the portfolio content in `src/data/portfolio.js`:

- Add or edit skills, projects, experience, social links, and contact details in the exported data.
- The React components in `src/components/` render that data into accessible cards.
- The homepage is `index.html`; projects, experience, and leadership have their own HTML entry pages.

The cards use reusable classes in `index.css`. Shared colors, spacing, and layout values are near the top of that file.

## Development

- `npm install` installs dependencies.
- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
