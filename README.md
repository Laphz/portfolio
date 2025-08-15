# Aman Mishra - Portfolio Website

A modern, responsive portfolio website showcasing AI engineering and mobile app development expertise. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Single-page layout** with smooth scroll navigation
- **Dark "Neon Intelligence" theme** with vibrant gradients
- **Custom particle background** using HTML5 Canvas
- **Smooth animations** with Framer Motion
- **Responsive design** for all devices
- **Contact form** with EmailJS integration
- **GitHub Pages** deployment ready

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite (Build tool)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- React Icons (Icon library)
- EmailJS (Contact form)
- HTML5 Canvas (Custom particles)

## 🎨 Design Theme

- **Background**: #0D0D0D (Deep black)
- **Text**: #F5F5F5 (Off-white)
- **Primary**: #4F46E5 (Electric Indigo)
- **Secondary**: #8B5CF6 (Vivid Purple)
- **Accent**: #F472B6 (Neon Pink)
- **Fonts**: Orbitron (headings), Inter (body)

## 📋 Sections

1. **Hero** - Custom particle background with introduction
2. **About** - Personal info with neon glow profile
3. **Skills** - Categorized tech stack with hover animations
4. **Projects** - Featured projects with tech stack
5. **Timeline** - Achievements and milestones
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aman-mishra-portfolio.git
cd aman-mishra-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Replace the placeholder values in `src/components/Contact.tsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID` 
   - `YOUR_USER_ID`

## 🌐 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name"
```

2. Create a new repository on GitHub

3. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at `https://yourusername.github.io/repository-name`

### Other Deployment Options

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Static hosting**: Build with `npm run build` and upload the `dist` folder

## 🔧 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, role, tagline
- `src/components/About.tsx` - Bio, location, education
- `src/components/Skills.tsx` - Tech stack and skills
- `src/components/Projects.tsx` - Your projects
- `src/components/Timeline.tsx` - Achievements and milestones
- `src/components/Contact.tsx` - Contact info and social links

### Colors and Theme

Modify the CSS custom properties in `src/index.css`:

```css
:root {
  --bg-primary: #0D0D0D;
  --text-primary: #F5F5F5;
  --color-primary: #4F46E5;
  --color-secondary: #8B5CF6;
  --color-accent: #F472B6;
}
```

### Fonts

Change fonts in `src/index.css` and `tailwind.config.js`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');
```

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactive elements
- Optimized animations for mobile devices
- Responsive typography and spacing

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast color ratios
- Focus indicators for interactive elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out through the contact form on the website or open an issue on GitHub.

---

**Built with ❤️ by Aman Mishra**