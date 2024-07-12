# Invitato Clone Documentation

## Project Overview

This project is an invitato clone built using Next.js, Chakra UI, and Framer Motion.

## Project Structure

```
invitato/
├── public/
│   ├── fonts/
│   └── ...
├── src/
│   ├── components/
│   │   ├── content/
│   │   │   ├── welcome/
│   │   │   ├── ...
│   │   │   ├── index.tsx
│   │   ├── ...
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── providers.tsx
│   │   └── ...
│   ├── styles/
│   │   ├── theme.ts
│   │   ├── globals.css
│   │   └── ...
│   └── utils/
│       ├── slideUp.tsx
│       └── ...
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## Dependencies

- **Next.js**: React framework for server-rendered applications.
- **Chakra UI**: Component library for building UI with ease.
- **Framer Motion**: Animation library for React.
- **Other dependencies**: Check `package.json` for a complete list.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adiviagp/invitato.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

- **Responsive Design** : The application is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.
- **Dynamic Music Control** : Users can control the music playback by clicking the "Open Invitation" button. Once clicked, the music starts playing, enhancing the user experience with interactive audio features.
- **Sidebar Navigation** : Users can toggle the sidebar menu by clicking the menu button, providing easy access to navigation options.
- **Countdown to Wedding** : A countdown timer displays the remaining days, hours, minutes, and seconds until the wedding date, keeping users informed and excited.
- **Slideshow Background** : The application features a dynamic slideshow background, enhancing visual appeal and engagement.
- **Interactive Animations** : User interactions trigger cool animations throughout the application, adding delight and interactivity.

## Deployment

deployed and accessible at [https://invitato-psi.vercel.app/](https://invitato-psi.vercel.app/). You can visit the deployed site to explore the functionalities.
