# Tamir Madar · CV Viewer

A sleek Next.js single-page experience that embeds `Tamir_Madar_CV.pdf`, lets visitors preview it inline, and download or open it in a new tab.

## Prerequisites

- Node.js 20.9+
- npm 10+ (ships with Node 20)

## Local development

```bash
npm install
npm run dev
```

The site will be served on <http://localhost:3000>. Edit files inside `pages/`, `components/`, or `styles/` and the browser will hot-reload automatically.

## Production build

```bash
npm run build
npm start
```

The `build` command generates the optimized `.next` output; `npm start` runs the production server on port 3000.

## Docker

Build and run the containerized app:

```bash
docker build -t tamir-cv .
docker run --rm -p 3000:3000 tamir-cv
```

This uses a multi-stage build to output a small production image that serves the optimized Next.js bundle.

### Docker Compose

If you prefer Compose, the repository already includes `docker-compose.yml`:

```bash
docker compose up --build
```

This will build the image and serve the site on port 3000.
