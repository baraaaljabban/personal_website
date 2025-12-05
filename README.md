# Baraa Aljabban - Personal Website

A modern, responsive personal portfolio website for Baraa Aljabban, Senior Flutter Developer & Mobile Team Lead.

## ✨ Features

- **Modern Design**: Dark theme with beautiful gradients, glassmorphism effects, and smooth animations
- **Multi-Language Support**: Full English and Arabic language support with RTL layout
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Custom cursor, animated stats, parallax effects
- **Light/Dark Theme**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Powered by AOS (Animate On Scroll) library
- **Contact Form**: Ready-to-use contact form (connect to your backend)
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Option 1: Direct Hosting (Simplest)

Simply upload these files to any web hosting service:
- `index.html`
- `styles.css`
- `script.js`

### Option 2: GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "main" branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 3: Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the project folder
3. Your site is live in seconds!

### Option 4: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import from Git or drag & drop
3. Deploy!

### Option 5: Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
personal_website/
├── index.html      # Main HTML file
├── styles.css      # All CSS styling and animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🛠️ Customization

### Change Content

Edit the content directly in `index.html`. All text has both `data-en` and `data-ar` attributes for bilingual support.

### Change Colors

Modify the CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #00d4ff;    /* Main accent color */
    --accent-secondary: #7c3aed;  /* Secondary accent */
    /* ... more variables */
}
```

### Add Profile Image

Replace the placeholder icon in the About section with your actual image:

```html
<div class="image-frame">
    <img src="your-image.jpg" alt="Baraa Aljabban">
</div>
```

### Connect Contact Form

The contact form currently shows a success message. To make it functional:

1. **Using Formspree** (easiest):
   - Sign up at [formspree.io](https://formspree.io)
   - Add your form endpoint to the form action

2. **Using EmailJS**:
   - Sign up at [emailjs.com](https://emailjs.com)
   - Update the form submit handler in `script.js`

3. **Custom Backend**:
   - Create your own API endpoint
   - Modify the form submission code in `script.js`

### Update Social Links

Find and update the social links in `index.html`:

```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
<a href="https://github.com/your-profile" target="_blank">
<a href="https://stackoverflow.com/users/your-id" target="_blank">
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Contact

**Baraa Aljabban**
- Email: baraa.aljabban.it@gmail.com
- Phone: +60 18 271 0039
- Location: Kuala Lumpur, Malaysia

---

Built with ❤️ by Baraa Aljabban

