# Personal Website

[Visit the website](https://zaneermitha.com/index.html)

This portfolio highlights my skills, projects, experience, and contact information across three public React pages, with Vite for local development and production builds. Leadership files are retained for offline work and are not included in the deployment.

## Technologies

- React
- Vite
- CSS custom properties for shared design tokens

## Updating portfolio content

Edit the portfolio content in `src/data/portfolio.js`:

- Add or edit skills, projects, experience, social links, and contact details in the exported data.
- The React components in `src/components/` render that data into accessible cards.
- The homepage is `index.html`; projects and experience have their own HTML entry pages.
- Add or replace site images in `public/images/`; this folder is copied into the production build.

The cards use reusable classes in `index.css`. Shared colors, spacing, and layout values are near the top of that file.

## Development

- `npm install` installs dependencies.
- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the site and deploys the `dist/` folder when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
