# Technical Portfolio Starter

This is a React + TypeScript portfolio starter built with Vite and configured for GitHub Pages.

## What’s included

- A single-page portfolio layout with About, Projects, Experience, Skills, and Contact sections
- Placeholder content you can replace with your own material
- Relative asset paths for GitHub Pages compatibility
- A GitHub Pages workflow for automated deployment

## Setup

1. Install dependencies.
2. Run the development server.
3. Replace the placeholder copy in `src/content.ts`.

## Scripts

- `npm run dev` - start the local dev server
- `npm run build` - type-check and build for production
- `npm run preview` - preview the production build locally

## GitHub Pages

The app uses a relative Vite base so it can be deployed to GitHub Pages without hardcoding a repo path. The workflow in `.github/workflows/deploy.yml` builds the site and publishes the `dist` output.