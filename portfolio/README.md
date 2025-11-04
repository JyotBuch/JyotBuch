# Jyot Buch - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Scientist, Machine Learning Engineer, and Statistics Graduate Student at UIUC.

![Portfolio Preview](https://via.placeholder.com/1200x630?text=Portfolio+Preview)

## 🌟 Features

- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Subtle scroll animations and transitions for better UX
- **Interactive Navigation**: Smooth scrolling to sections with sticky header
- **Project Filtering**: Filter projects by technology/domain (Computer Vision, NLP, ML, etc.)
- **Scroll Progress Indicator**: Visual feedback of page scroll progress
- **Back to Top Button**: Easy navigation back to the top of the page
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       └── images/          # Place your images here
│           ├── headshot.jpg # Your professional photo (400x400px recommended)
│           ├── project-*.jpg/png  # Project screenshots
│           └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header with dark mode toggle
│   │   ├── Footer.jsx       # Footer with links and social media
│   │   ├── Hero.jsx         # Landing/hero section
│   │   ├── About.jsx        # About me section
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Projects.jsx     # Projects showcase with filtering
│   │   ├── Skills.jsx       # Technical skills by category
│   │   ├── Publications.jsx # Publications, certifications, honors
│   │   ├── Contact.jsx      # Contact information and social links
│   │   ├── ScrollProgress.jsx # Scroll progress bar
│   │   └── BackToTop.jsx    # Back to top button
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.jsx             # App entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JyotBuch/JyotBuch.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization Guide

### 1. Adding Your Images

#### Headshot Image
1. Add your professional photo to `public/assets/images/headshot.jpg`
2. Recommended size: 400x400px, square format
3. Update `src/components/Hero.jsx`:
   ```jsx
   {/* Uncomment and use this instead of the placeholder: */}
   <img 
     src="/assets/images/headshot.jpg" 
     alt="Jyot Buch" 
     className="w-full h-full object-cover"
   />
   ```

#### Project Images
1. Add project screenshots to `public/assets/images/`
2. Name them descriptively (e.g., `project-dribble-ai.jpg`)
3. Update the `image` property in `src/components/Projects.jsx`:
   ```jsx
   {
     title: "Dribble.AI",
     image: "/assets/images/project-dribble-ai.jpg",
     // ... other properties
   }
   ```

### 2. Updating Links

#### Resume Link
In `src/components/Hero.jsx`:
```jsx
<a
  href="/assets/resume.pdf"  // Update with your resume path
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  View Resume
</a>
```

#### Social Media Links
In `src/components/Footer.jsx` and `src/components/Contact.jsx`:
```jsx
{
  name: 'LinkedIn',
  href: 'https://www.linkedin.com/in/your-profile',  // Update
  // ...
}
```

#### Project Links (GitHub/Demo)
In `src/components/Projects.jsx`:
```jsx
{
  title: "Your Project",
  github: "https://github.com/yourusername/project",  // Update
  demo: "https://your-demo-url.com",  // Update
  // ...
}
```

#### Publication Links
In `src/components/Publications.jsx`:
```jsx
{
  title: "Your Publication",
  link: "https://doi.org/10.xxxx/xxxxx",  // Update with DOI or link
  // ...
}
```

### 3. Modifying Content

All content can be updated by editing the respective component files in `src/components/`. Each component has data arrays/objects at the top that you can modify:

- **About.jsx**: Update the introduction paragraphs
- **Education.jsx**: Modify the `education` array
- **Experience.jsx**: Update the `experiences` array
- **Projects.jsx**: Modify the `projects` array
- **Skills.jsx**: Update the `skillCategories` array
- **Publications.jsx**: Modify `publications`, `certifications`, and `honors` arrays
- **Contact.jsx**: Update contact information in `contactInfo` array

### 4. Customizing Colors

Update `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    // Your primary color shades
    500: '#your-color',
    // ...
  },
  accent: {
    // Your accent color shades
    500: '#your-color',
    // ...
  }
}
```

## 📦 Building for Production

Build the project:
```bash
npm run build
```

Preview the build locally:
```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Option 1: Manual Deployment

1. Update `vite.config.js` with your repository name:
   ```javascript
   base: '/your-repo-name/',  // Replace with your repo name
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Option 2: GitHub Actions (Automated)

1. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ['main']
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. Push to your repository
3. Enable GitHub Pages in repository settings (Settings → Pages → Source: GitHub Actions)

### Option 3: Using gh-pages Package

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment script to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🎯 Custom Domain Setup (Optional)

1. Add a `CNAME` file to the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`

3. Update `vite.config.js`:
   ```javascript
   base: '/',  // Use root path for custom domain
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (after setup)

## 🔧 Troubleshooting

### Images not loading on GitHub Pages
- Ensure all image paths start with `/` (e.g., `/assets/images/photo.jpg`)
- Check that images are in the `public` folder
- Verify the `base` path in `vite.config.js` matches your repo name

### Tailwind styles not working
- Ensure `tailwind.config.js` has correct content paths
- Check that `@tailwind` directives are in `index.css`
- Run `npm install` to ensure all dependencies are installed

### Dark mode not persisting
- Check browser console for errors
- Ensure localStorage is enabled in your browser
- Verify the dark mode logic in `App.jsx`

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Jyot Buch**
- Email: jyotb2@illinois.edu
- Phone: +1 217 819 9416
- Location: Champaign, Illinois, United States
- LinkedIn: [Update with your profile]
- GitHub: [@JyotBuch](https://github.com/JyotBuch)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

*Last Updated: November 2025*
