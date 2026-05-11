# SailConnect SPA - VelaLink

> A modern, responsive Single Page Application built with React and Vite for community engagement and marketplace management.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
  - [Preview](#preview)
- [Usage](#usage)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Components](#components)
- [Styling](#styling)
- [Firebase Integration](#firebase-integration)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

SailConnect is a comprehensive community platform that combines social engagement features with an integrated marketplace. Built as a modern Single Page Application (SPA) with fast performance and excellent user experience in mind.

## ✨ Features

- **Community Hub** - Connect with community members
- **Marketplace** - Buy, sell, and exchange within the community
- **Gallery** - Showcase community content and memories
- **Responsive Design** - Optimized for desktop and mobile devices
- **Real-time Updates** - Firebase integration for dynamic content
- **Smooth Animations** - Enhanced user experience with scroll reveals
- **Privacy & Terms** - Integrated modals for legal information

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.5
- **Build Tool**: Vite 8.0.10
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: React Icons 5.6.0
- **Backend**: Firebase
- **Linting**: ESLint 10.2.1
- **CSS Processing**: PostCSS + Autoprefixer
- **Package Manager**: npm

## 📁 Project Structure

```
SailConnect_SPA/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images and media
│   │   ├── Gallery/          # Gallery images
│   │   ├── hero/             # Hero section images
│   │   └── Marketplace/      # Marketplace images
│   ├── components/           # React components
│   │   ├── AboutStats.jsx    # Statistics and about section
│   │   ├── BaseModal.jsx     # Modal component wrapper
│   │   ├── Features.jsx      # Features/community section
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Gallery.jsx       # Gallery component
│   │   ├── Hero.jsx          # Hero banner section
│   │   ├── Marketplace.jsx   # Marketplace section
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── PrivacyModal.jsx  # Privacy policy modal
│   │   ├── ScrollReveal.jsx  # Scroll animation component
│   │   └── TermsModal.jsx    # Terms of service modal
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint configuration
├── firebase.json             # Firebase configuration
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0.0 or higher
- npm 7.0.0 or higher (or yarn/pnpm)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SailConnect_SPA
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase** (if needed)
   - Ensure `firebase.json` is properly configured
   - Set up your Firebase project credentials

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build

Create an optimized production build:

```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 📚 Usage

### Navigating the Application

The application is organized into sections accessible via the navigation bar:

- **Home** - Landing page with hero section
- **Community** - Features and community information
- **Marketplace** - Buy, sell, and exchange items
- **About** - Statistics and platform information
- **Gallery** - Visual content showcase

### Modals

The application includes modal dialogs for:
- Privacy Policy
- Terms of Service
- General base modals for extensibility

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## ⚙️ Configuration

### Vite Configuration
- Located in `vite.config.js`
- React plugin enabled with Oxc support
- Configured for optimal development and production performance

### Tailwind CSS
- Configuration in `tailwind.config.js`
- Global styles in `src/index.css`
- Component styles in respective component files

### ESLint
- Configuration in `eslint.config.js`
- Includes React and React Hooks rules
- Enforces code quality standards

### PostCSS
- Autoprefixer for browser compatibility
- Configuration in `postcss.config.js`

## 🧩 Components

### Navbar
Navigation component with smooth scrolling to sections.

### Hero
Eye-catching banner section to engage users.

### Features
Community features and value propositions.

### Marketplace
Section highlighting marketplace functionality.

### AboutStats
Platform statistics and about information.

### Gallery
Visual content showcase with animations.

### Footer
Footer with links and platform information.

### BaseModal / PrivacyModal / TermsModal
Reusable modal components for important information.

### ScrollReveal
Component wrapper for scroll-based reveal animations.

## 🎨 Styling

- **Framework**: Tailwind CSS
- **CSS Utilities**: Responsive design utilities
- **Custom Styles**: Component-specific CSS files
- **Color Scheme**: Primary dark theme with white background

Tailwind CSS provides utility-first styling. Customize colors, spacing, and other design tokens in `tailwind.config.js`.

## 🔥 Firebase Integration

The project integrates with Firebase for:
- Backend services
- Real-time database (Firestore)
- Authentication
- Other Firebase services as configured

Ensure your Firebase project is properly set up and credentials are configured in the environment.

## ✅ Code Quality

### ESLint

Run the linter to check code quality:

```bash
npm run lint
```

### Best Practices

- Follow React hooks conventions
- Use functional components
- Maintain component reusability
- Write semantic HTML
- Optimize performance with React.memo where needed

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the VelaLink/SailConnect ecosystem.

---

**Last Updated**: May 2026  
**Version**: 0.0.0

For more information or support, please contact the development team.
