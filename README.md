# Portfolio

My personal developer portfolio — built to showcase my projects, experience, and skills as a Computer Science graduate and aspiring software developer.

**Live site:** https://portfolio-psi-gules-29.vercel.app

## About

Hi, I'm Renz Vargas — a Computer Science graduate with hands-on experience in software development, AI and machine learning, databases, Linux systems, and hardware-integrated projects. This site highlights my work and background, including projects like a smart garbage waste management system and an AI-powered egg counting machine using YOLOv5.

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — styling
- **Lucide React** — icon set
- **React Icons** — brand/logo icons (GitHub, LinkedIn)
- **EmailJS** — contact form email delivery
- **Vercel** — hosting and deployment

## Features

- Responsive navbar with scroll-aware background and mobile menu
- Animated hero section with drifting particle background
- About, Experience, and Projects sections with scroll-in animations
- Functional contact form powered by EmailJS
- Downloadable resume (CV)
- Custom animated-border button component
- Dark, glassmorphism-inspired design system

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/Primiyukii/Portfolio.git
cd Portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can find these values in your [EmailJS dashboard](https://dashboard.emailjs.com).

### Run Locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

## Project Structure

```
├── public/
│   ├── hero-bg.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   └── AnimatedBorderButton.jsx
│   ├── sections/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── index.css
│   └── App.jsx
├── .env
└── package.json
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). Pushes to the `main` branch automatically trigger a new production deployment. Make sure your EmailJS environment variables are also added in your Vercel project's **Settings → Environment Variables**, since local `.env` files are not pushed to GitHub.

## Contact

- **Email:** renzvargasmain9@gmail.com
- **Phone:** +63 967 179 7300
- **Location:** Antique, Philippines

## License

This project is open source and available for reference. Feel free to fork it for your own portfolio.
