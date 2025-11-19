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

### Multi-architecture images

Running on ARM-based clusters (like Raspberry Pi / k3s) requires publishing an image for that CPU architecture. The Dockerfile is now multi-arch aware, so you can create and push a manifest with BuildKit:

```bash
docker buildx create --name multi --use --bootstrap   # once, if you don’t have a builder
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t rollersweet/tamir-cv:latest \
  --push .
```

After the push, update your Deployment to pull the newly published tag.
