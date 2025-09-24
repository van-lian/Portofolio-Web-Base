# Portfolio Website

A responsive portfolio website with smooth animations and glassmorphism design.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Section reveal animations with fade-in/fade-out effects
- **Glassmorphism UI**: Modern glass-like design elements
- **Interactive Elements**: Hover effects, button ripples, and parallax background
- **Clean Code Structure**: Separated HTML, CSS, and JavaScript files
- **Performance Optimized**: Throttled scroll events and efficient animations

## 📁 Project Structure

```
Portofolio-Web-Base/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles organized by sections
├── js/
│   └── script.js           # All JavaScript functionality
├── assets/                 # For future images, icons, etc.
├── modern_portfolio.html   # Original combined file (backup)
└── README.md              # This file
```

## 🎨 Design Features

- **Color Scheme**: Modern dark theme with purple/blue gradients
- **Typography**: Inter font family for clean, modern look
- **Animations**: 
  - Section reveal on scroll
  - Fade-out effects when leaving sections
  - Project card hover animations
  - Button ripple effects
  - Parallax background movement

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Grid & Flexbox
  - CSS Variables (Custom Properties)
  - CSS Animations & Transitions
  - Glassmorphism effects
- **Vanilla JavaScript**:
  - Intersection Observer API
  - Event handling
  - DOM manipulation
  - Performance optimization

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content in `index.html`:
   - Update your name and title
   - Add your projects
   - Update contact information
   - Add your skills

## 📝 Customization Guide

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;  /* Secondary color */
    --accent-color: #06d6a0;     /* Accent color */
    --bg-dark: #0f0f23;          /* Background color */
    --text-light: #e2e8f0;       /* Text color */
}
```

### Content
- **Hero Section**: Update name, title, and description in `index.html`
- **About Section**: Modify the about text and skills
- **Projects**: Add/remove project cards
- **Contact**: Update social media links and email

### Animations
- **Section Animation**: Modify timing in `.reveal` class
- **Hover Effects**: Adjust transform values in hover states
- **Parallax**: Change speed by modifying the multiplier in `script.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

The project is structured for easy development:

- **CSS**: Organized by sections with clear comments
- **JavaScript**: Modular functions with clear separation of concerns
- **HTML**: Clean semantic structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

**Note**: Remember to replace placeholder content with your actual information before deploying!
>>>>>>> 4f406fd (First Update)
