# Weather App — Real-Time Weather SPA (Vanilla JS, Modular, Fully Tested)

<div align="center">

A blazing-fast, responsive, and animated **Single Page Application (SPA)** that fetches **real-time weather data** from OpenWeatherMap and renders it dynamically — built with **vanilla JavaScript**, **GSAP**, and fully tested with **Vitest + jsdom**.

Implements **OOP architecture**, **modular design**, and **SOLID principles** to deliver a scalable, testable, and production-ready weather dashboard.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?style=for-the-badge&logo=vitest)](https://vitest.dev)
[![jsdom](https://img.shields.io/badge/jsdom-DOM_Simulation-blue?style=for-the-badge)](https://github.com/jsdom/jsdom)
[![Accessibility](https://img.shields.io/badge/Accessibility-Focused-green?style=for-the-badge)](https://www.w3.org/WAI/)
[![SPA](https://img.shields.io/badge/SPA-Dynamic_Routing-blueviolet?style=for-the-badge)]()
[![Animations](https://img.shields.io/badge/GSAP-UI_Animation-88CE02?style=for-the-badge)](https://greensock.com/gsap/)
[![dotenv](https://img.shields.io/badge/dotenv-Env_Management-orange?style=for-the-badge)](https://www.npmjs.com/package/dotenv)

</div>

---

## 🌍 Project Overview

**Weather App** is a fully modular, animated, and accessible SPA that fetches and displays **real-time weather** for any city using the OpenWeatherMap API. No page reloads, no frameworks — all content is dynamically rendered with JavaScript and GSAP-enhanced animations.

> **For Recruiters & Freelance Clients**:  
> This is **not a beginner project or UI mockup** — it's a production-style frontend build. It features **API integration**, **DOM abstraction**, **animation**, **environment variable management**, and **full test coverage** via `Vitest` and `jsdom`.  
> Built from scratch using modern tooling like `Vite`, `dotenv`, `ESModules`, and `CSS variables`.

---

## ✨ Feature Summary

| Feature                | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| Real-Time Weather API  | Fetches weather data via OpenWeatherMap API                     |
| SPA Architecture       | Dynamic routing and UI rendering without reloads                |
| Modular Components     | Each feature isolated into reusable classes                     |
| Search Interface       | City-based search with feedback and error handling              |
| Custom Cursor & Loader | GSAP-powered cursor + animated progress bar on search           |
| Responsive UI          | Mobile-first grid, fluid fonts, adaptive containers             |
| Accessibility Support  | Semantic HTML, color contrast, alt texts, keyboard support      |
| Full Testing Coverage  | Tested with `Vitest` and `jsdom` using real event and DOM flows |
| Secure Env Handling    | `.env` file used to manage sensitive API keys                   |

---

## 🔧 Technologies Used

- **Vanilla JavaScript (ES6+):** OOP, classes, modular structure
- **HTML5 & CSS3:** Semantic markup, responsive design using Flex/Grid
- **GSAP:** Animation library for cursor, scroll, and entry effects
- **Vite:** Fast build tool for development and production
- **dotenv:** Handles API keys securely through `.env` file
- **Vitest:** Testing framework with blazing speed
- **jsdom:** Simulates browser-like DOM for testing purposes

---

## 🧠 Architecture Overview

### Core Modules

| File / Class             | Responsibility                                                 |
| ------------------------ | -------------------------------------------------------------- |
| `UtilityMethods.js`      | DOM helpers: element creation, time formatting, live messages  |
| `WeatherAPIHandler.js`   | Fetches weather data, handles API errors securely via `dotenv` |
| `RenderWeather.js`       | Renders entire weather UI from API data                        |
| `InputHandler.js`        | Handles form submit, triggers fetch + animation                |
| `Header.js`              | Renders search form and attaches submit listener               |
| `WeatherDescriptions.js` | Maps weather types to icons and readable labels                |
| `animatingApp.js`        | GSAP scroll effects for dynamic component entrance             |
| `main.js`                | Bootstraps app, loads cursor, initializes all modules          |

---

## 📊 Testing Strategy (Vitest + jsdom)

> All modules are tested in isolation using `Vitest`. DOM-based classes use `jsdom` to simulate browser rendering. No spies or mocks unless absolutely required. Strict line-by-line coverage per file.

### ✅ Coverage Overview

| File                          | Type              | Test Description                                   |
| ----------------------------- | ----------------- | -------------------------------------------------- |
| `UtilityMethods.test.js`      | Unit (DOM)        | Element creation, time formatting, error display   |
| `WeatherAPIHandler.test.js`   | Unit (API)        | Validates fetch logic and error scenarios          |
| `RenderWeather.test.js`       | Integration (DOM) | Verifies all sections render correctly with input  |
| `InputHandler.test.js`        | Integration       | Tests search flow, form validation, error handling |
| `Header.test.js`              | Unit              | Checks form structure and listeners                |
| `WeatherDescriptions.test.js` | Unit (Data)       | Ensures weather condition maps are accurate        |

---

## 📂 Folder Structure

```
weather-app/
├── .env                   # Stores API key securely using dotenv
├── .gitignore             # Ignore node_modules, .env, dist, logs
├── README.md              # Full documentation
├── index.html             # Entry HTML with advanced <meta> tags for SEO, theming, UX
├── vite.config.js         # Vite config (port, aliases, base path)
├── vitest.config.js       # Testing setup using jsdom
├── vitest.setup.js        # Optional setup file for test environment
├── package.json           # Project metadata and scripts
│
├── src/
│   ├── assets/            # Icons, weather images, font
│   │   ├── Montserrat-Regular.woff2
│   │   ├── clear-sky.png, thunderstorm.png, etc.
│   │   └── search.svg, humidity.png, sunrise.png, etc.
│   │
│   ├── Header.js              # Renders header and search form
│   ├── InputHandler.js        # Handles user input and validation
│   ├── RenderWeather.js       # Renders dynamic weather components
│   ├── UtilityMethods.js      # DOM helpers + formatter + feedback UI
│   ├── WeatherAPIHandler.js   # Weather API logic using .env key
│   ├── WeatherDescriptions.js # Weather condition → image mapping
│   ├── animatingApp.js        # Scroll + load animation via GSAP
│   ├── main.js                # Entry point that initializes app
│   └── style.css              # Global theme, layout, media queries
```

---

| Category              | Highlights                                                               |
| --------------------- | ------------------------------------------------------------------------ |
| **Semantic HTML**     | Proper use of headings, landmarks, and ARIA roles                        |
| **Responsive Layout** | Mobile-first grid/flex, font scaling                                     |
| **Alt Texts**         | Descriptive alt for all icons and visuals                                |
| **Accessible Colors** | Contrast-checked palette and readable fonts                              |
| **Keyboard Friendly** | Fully operable with keyboard navigation                                  |
| **Meta Tags**         | Includes `theme-color`, `color-scheme`, `format-detection` for better UX |

## 📚 Key Learning Objectives

- **Modular Architecture:** Built fully with isolated JS classes per feature
- **DOM Abstraction:** Wrote custom DOM utility functions for reuse and cleanliness
- **API Integration:** Used `fetch()` with error catching and validation
- **Environment Variables:** Used `dotenv` to secure and manage API key
- **Animations with GSAP:** Enhanced UI with timeline + scroll-based animations
- **Testing with jsdom + Vitest:** Built unit/integration tests with real DOM logic
- **Performance:** Optimized loading with `Vite`, CSS variables, and responsive queries
- **Accessibility:** Designed with semantic HTML, keyboard nav, and color compliance
- **Meta Tags Optimization:** Added <meta> tags for SEO, theming, and mobile UX refinement

---

## 🚀 Getting Started

```bash
# Clone repo
git clone https://github.com/umarSiddique010/weather-app-js

# Enter project folder
cd weather-app-js

# Install dependencies
npm install

# Create .env file for API key
echo "VITE_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

---

## 👨‍💼 Author

**Md Umar Siddique**

[![GitHub](https://img.shields.io/badge/@umarSiddique010-181717?style=flat-square&logo=github)](https://github.com/umarSiddique010)
[![LinkedIn](https://img.shields.io/badge/LinkedIn:%20Md%20Umar%20Siddique-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/md-umar-siddique-1519b12a4/)
[![npm](https://img.shields.io/badge/npm-%40umarsiddique010-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/~umarsiddique010)
[![Gmail](https://img.shields.io/badge/us70763@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:us70763@gmail.com)

---

<div align="center">

**Modular. Tested. Accessible. Animated. Real.**
This weather SPA isn't just a side project — it's a real-world showcase of frontend engineering discipline.
If you're a recruiter, client, or dev collaborator — feel free to connect or ask for a walkthrough.

</div>
