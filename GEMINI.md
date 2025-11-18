# GEMINI Onboarding Guide for event-redirects

Welcome to the `event-redirects` project! This guide is intended to help new contributors, including the Gemini assistant, get started with the project.

## What is this project?

This is a React-based web application built with Vite. Its primary purpose is to act as a redirection service for various web links, with a current focus on HoYoverse games (like Genshin Impact, Honkai: Star Rail, Zenless Zone Zero, Honkai Impact 3rd) and a User-Generated Content (UGC) sharing feature for Genshin Impact's "Miliastra Wonderland".

The application detects the user's device (mobile/desktop) and region (Global/CN/VN) to redirect them to the appropriate game client or download page using deep links. It also handles cases where the link is opened within an in-app browser (e.g., Instagram, Facebook) by prompting the user to open it in their system's default browser.

In the future, this project might be expanded to handle general-purpose short link redirection.

## Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Routing:** `react-router-dom`
- **Device Detection:** `react-device-detect`
- **Linting:** ESLint
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js and npm (or a compatible package manager)

### Installation

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Available Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Builds the application for production into the `dist/` directory.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run preview`: Serves the production build locally for previewing.

## Project Structure

-   `src/`: Contains all the source code.
-   `src/pages/`: Each file or subdirectory represents a specific redirection page.
    -   `src/pages/event/`: Contains redirection logic for specific games and regions (e.g., `ys_global.jsx` for Genshin Impact Global).
    -   `src/pages/ugc/`: Contains redirection logic for UGC content, which uses URL parameters.
    -   `src/pages/components/`: Shared components used across different pages.
-   `src/Routes.jsx`: Defines all the URL paths and maps them to their corresponding page components.
-   `public/`: Static assets that are directly served.
-   `package.json`: Lists project dependencies and available scripts.
-   `vite.config.js`: Vite configuration file.
-   `vercel.json`: Configuration for deploying to Vercel.

## How to Contribute

We welcome contributions! Here are some common ways to contribute:

### Adding a New Redirection Page

1.  Create a new component file in `src/pages/event/` or `src/pages/ugc/`. It's best to copy an existing component (like `ys_global.jsx`) as a template.
2.  Implement the redirection logic inside a `useEffect` hook. Use `isMobile` from `react-device-detect` to differentiate between devices.
3.  Add a new `<Route>` in `src/Routes.jsx` to map a URL path to your new component.
4.  Ensure you provide fallback download links for users who may not have the game installed.

### Updating a Link

1.  Find the component file in `src/pages/` that corresponds to the link you want to update.
2.  Locate the `window.location.href` assignment and change the URL.
3.  If necessary, update the `<a>` tag for the manual download link as well.

### Code Style

Please run the linter before committing your changes to ensure your code conforms to the project's style.

```bash
npm run lint
```

Thank you for contributing!
