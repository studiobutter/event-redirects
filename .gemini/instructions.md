# Gemini Onboarding Instructions for event-redirects

This document provides instructions for Gemini to understand and contribute to the `event-redirects` project.

## Project Overview

This is a React-based web application built with Vite. Its primary purpose is to act as a redirection service for various web links, with a current focus on HoYoverse games (like Genshin Impact, Honkai: Star Rail, Zenless Zone Zero, Honkai Impact 3rd) and a User-Generated Content (UGC) sharing feature for Genshin Impact's "Miliastra Wonderland".

The application detects the user's device (mobile/desktop) and region (Global/CN/VN) to redirect them to the appropriate game client or download page using deep links. It also handles cases where the link is opened within an in-app browser (e.g., Instagram, Facebook) by prompting the user to open it in their system's default browser.

## Key Technologies

- **Framework:** React
- **Build Tool:** Vite
- **Routing:** `react-router-dom`
- **Device Detection:** `react-device-detect`
- **Linting:** ESLint

## Project Structure

- `src/`: Contains all the source code.
- `src/pages/`: Each file or subdirectory represents a specific redirection page.
  - `src/pages/event/`: Contains redirection logic for specific games and regions (e.g., `ys_global.jsx` for Genshin Impact Global).
  - `src/pages/ugc/`: Contains redirection logic for UGC content, which uses URL parameters.
  - `src/pages/components/`: Shared components used across different pages.
- `src/Routes.jsx`: Defines all the URL paths and maps them to their corresponding page components.
- `package.json`: Lists project dependencies and available scripts.
- `vite.config.js`: Vite configuration file.
- `vercel.json`: Configuration for deploying to Vercel.

## How to Contribute

### Common Tasks

1.  **Adding a new redirection page:**
    -   Create a new component file in `src/pages/event/` or `src/pages/ugc/`. Follow the pattern of existing files (e.g., `src/pages/event/ys_global.jsx`).
    -   The component should handle device detection and redirect using `window.location.href`.
    -   Add a new route in `src/Routes.jsx` to map a URL path to your new component.
    -   Provide download links for users who may not have the game installed.

2.  **Updating a redirection link:**
    -   Locate the relevant component file in `src/pages/`.
    -   Find the `window.location.href` assignment and update the URL.
    -   Update any corresponding download links if necessary.

3.  **Fixing a bug:**
    -   Identify the component responsible for the buggy behavior.
    -   Use your understanding of React and the project's logic to fix the issue.

### Development Workflow

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

3.  **Build for production:**
    ```bash
    npm run build
    ```
    The output will be in the `dist/` directory.

4.  **Run linter:**
    ```bash
    npm run lint
    ```
    Fix any issues reported by the linter.

## Important Notes

-   When adding or modifying redirection logic, always consider both mobile and desktop users.
-   The project uses deep links (e.g., `genshin://`, `hyp-global://`) to open games directly. Ensure these are correct.
-   Pay attention to the in-app browser detection logic to ensure a smooth user experience.
-   For UGC links, the logic parses URL query parameters (`ugc_id`, `server`).
-   Follow the existing code style and conventions.
