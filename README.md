# Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with React.js, featuring modern design, smooth animations, and interactive components.

## Features

- **Modern Tech Stack**: React.js, Tailwind CSS, Framer Motion, React Icons
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Glassmorphism Design**: Beautiful glassmorphic UI elements with backdrop blur effects
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion animations for scroll-triggered effects and interactions
- **Interactive Components**: Custom cursor, particle background, preloader animation
- **Contact Form**: Functional contact form with validation (EmailJS integration ready)
- **Project Showcase**: Filterable project cards with hover effects
- **Certificate Gallery**: Modal preview for certificates
- **Skills Section**: Animated progress bars with skill indicators
- **Timeline**: Animated timeline for education and experience

## Tech Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Router** - Navigation (if needed)
- **React Scroll** - Smooth scrolling
- **React Typed** - Typing animation effect
- **EmailJS** - Email service for contact form

### Development Tools
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixes
- **Create React App** - Development environment

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jeevaprasanth/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
portfolio-website/
{
  "public/": {
    "index.html": "Main HTML file",
    "favicon.ico": "Website favicon"
  },
  "src/": {
    "components/": {
      "About.js": "About section component",
      "Certificates.js": "Certificates section",
      "Contact.js": "Contact form section",
      "CustomCursor.js": "Custom cursor component",
      "Footer.js": "Footer component",
      "Home.js": "Home section with hero content",
      "Navbar.js": "Navigation bar",
      "Particles.js": "Particle background animation",
      "Preloader.js": "Loading animation",
      "Projects.js": "Projects showcase",
      "ScrollToTop.js": "Scroll to top button",
      "Skills.js": "Skills section with progress bars"
    },
    "contexts/": {
      "ThemeContext.js": "Theme management context"
    },
    "styles/": {
      "index.css": "Main stylesheet with Tailwind imports"
    },
    "App.js": "Main application component",
    "index.js": "Application entry point"
  },
  "package.json": "Dependencies and scripts",
  "tailwind.config.js": "Tailwind CSS configuration",
  "postcss.config.js": "PostCSS configuration",
  "README.md": "Project documentation"
}
```

## Configuration

### EmailJS Setup

To enable the contact form functionality:

1. Sign up for an EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)

2. Create a new email service and template

3. Update the contact form in `src/components/Contact.js` with your credentials:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     templateParams,
     'YOUR_USER_ID'
   );
   ```

### Customization

#### Personal Information
Update the following files with your personal information:

- **Home.js**: Update name, title, social links
- **About.js**: Update bio, education, experience
- **Contact.js**: Update contact information
- **Footer.js**: Update social links and contact info

#### Theme Colors
Modify the theme colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

#### Projects and Certificates
Update the data in:
- **Projects.js**: Add your projects with images, descriptions, and links
- **Certificates.js**: Add your certificates with verification links

## Features Breakdown

### 1. Navigation
- Sticky navbar with smooth scroll
- Mobile-responsive hamburger menu
- Theme toggle button
- Social media links

### 2. Home Section
- Animated typing effect for roles
- Profile image with glowing border
- Call-to-action buttons
- Social media icons
- Particle background animation

### 3. About Section
- Personal introduction
- Key skills display
- Timeline for education and experience
- Scroll-triggered animations

### 4. Skills Section
- Categorized skill filtering
- Animated progress bars
- Skill level indicators
- Shimmer effects on progress bars

### 5. Projects Section
- Filterable project cards
- Hover animations and effects
- Live demo and GitHub links
- Featured project badges

### 6. Certificates Section
- Grid layout for certificates
- Modal preview functionality
- Verification links
- Category badges

### 7. Contact Section
- Functional contact form
- Form validation
- EmailJS integration
- Contact information display

### 8. Footer
- Social media links
- Quick navigation links
- Copyright information
- Resume download button

## Performance Optimizations

- **Lazy Loading**: Images are optimized for performance
- **Code Splitting**: React.lazy for component splitting
- **Optimized Animations**: Framer Motion with hardware acceleration
- **Responsive Images**: Proper image sizing for different devices
- **Minified Build**: Production build is optimized for size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need support, feel free to:

- Create an issue in the GitHub repository
- Contact me at jeevaprasanth@example.com
- Connect with me on [LinkedIn](https://linkedin.com/in/jeevaprasanth)

## Acknowledgments

- [React.js](https://reactjs.org/) - The UI framework
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [Framer Motion](https://www.framer.com/motion/) - The animation library
- [React Icons](https://react-icons.github.io/react-icons/) - The icon library
- [EmailJS](https://www.emailjs.com/) - The email service

---

Made with <3 by Jeevaprasanth S using React.js
