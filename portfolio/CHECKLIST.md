# Portfolio Launch Checklist

Use this checklist to track your progress from setup to deployment.

## 🖼️ Images & Assets

### Required Images
- [ ] Add professional headshot to `public/assets/images/headshot.jpg` (400x400px)
- [ ] Uncomment image code in `src/components/Hero.jsx` (line ~118)

### Optional Project Images
- [ ] Add Dribble.AI screenshot
- [ ] Add FinLens screenshot
- [ ] Add DocuSense.AI screenshot
- [ ] Add AgroTalk screenshot
- [ ] Add Semantic Clustering screenshot
- [ ] Add D2D screenshot
- [ ] Update image paths in `src/components/Projects.jsx`

### Resume
- [ ] Add resume PDF to `public/assets/` as `resume.pdf`
- [ ] Update resume link in `src/components/Hero.jsx` (line ~45)

## 🔗 Links to Update

### Social Media Links
- [ ] Update LinkedIn URL in `src/components/Footer.jsx` (line ~25)
- [ ] Update LinkedIn URL in `src/components/Contact.jsx` (line ~112)
- [ ] Update GitHub URL (verify it's correct)
- [ ] Update Google Scholar URL in `src/components/Contact.jsx` (line ~128)
- [ ] Update Twitter/X URL (optional) in `src/components/Contact.jsx` (line ~137)

### Project Links
In `src/components/Projects.jsx`, update for each project:
- [ ] Dribble.AI - GitHub URL (line ~14)
- [ ] FinLens - Corporate project (no link needed)
- [ ] DocuSense.AI - GitHub & Demo URLs (lines ~28-29)
- [ ] AgroTalk - GitHub & Demo URLs (lines ~38-39)
- [ ] Semantic Clustering - GitHub & Demo URLs (lines ~48-49)
- [ ] D2D - Corporate IP (no link needed)

### Publication Links
In `src/components/Publications.jsx`:
- [ ] Water Potability paper DOI/link (line ~10)
- [ ] ALUCAST paper link (line ~18)

## ✅ Testing

### Functionality Tests
- [ ] Dark mode toggle works
- [ ] Dark mode preference persists after reload
- [ ] Smooth scrolling to all sections works
- [ ] Navigation highlights active section
- [ ] Project filtering works (try all filters)
- [ ] Back-to-top button appears/works
- [ ] Scroll progress bar works
- [ ] Mobile menu opens/closes
- [ ] All buttons are clickable
- [ ] No broken links (check browser console)

### Visual Tests
- [ ] Layout looks good on desktop (1920px+)
- [ ] Layout looks good on laptop (1366px)
- [ ] Layout looks good on tablet (768px)
- [ ] Layout looks good on mobile (375px)
- [ ] All images display properly
- [ ] All text is readable
- [ ] Colors look professional
- [ ] Animations are smooth (not janky)

### Content Review
- [ ] All personal information is correct
- [ ] All dates are accurate
- [ ] All company/school names are correct
- [ ] All project descriptions are accurate
- [ ] No typos in main content
- [ ] Contact information is current

## 🚀 Deployment

### Pre-deployment
- [ ] Run `npm run build` successfully
- [ ] Run `npm run preview` and test
- [ ] Fix any build warnings/errors
- [ ] Check bundle size (should be <500KB total)

### GitHub Repository Setup
- [ ] Repository name matches `vite.config.js` base path
- [ ] Repository is public (required for GitHub Pages)
- [ ] All files are committed
- [ ] `.gitignore` is properly configured

### Deployment (Choose One Method)

#### Method A: GitHub Actions
- [ ] Push code to GitHub
- [ ] Go to Settings → Pages
- [ ] Set Source to "GitHub Actions"
- [ ] Wait for workflow to complete
- [ ] Visit your site URL

#### Method B: Manual Deployment
- [ ] Run `npm install --save-dev gh-pages`
- [ ] Run `npm run deploy`
- [ ] Wait for deployment to complete
- [ ] Visit your site URL

### Post-deployment
- [ ] Site loads at `https://jyotbuch.github.io/JyotBuch/`
- [ ] All images load correctly
- [ ] All links work
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check console for any errors
- [ ] Verify SEO meta tags (view page source)

## 🎨 Optional Enhancements

### Content
- [ ] Add more projects
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add downloadable CV in multiple formats
- [ ] Add case studies for major projects

### Features
- [ ] Add Google Analytics
- [ ] Add contact form (email integration)
- [ ] Add animations library (Framer Motion)
- [ ] Add particles.js background effect
- [ ] Add typing effect for tagline
- [ ] Add project detail modals

### Performance
- [ ] Optimize images (compress with TinyPNG)
- [ ] Add lazy loading for images
- [ ] Add service worker for offline support
- [ ] Minimize JavaScript bundle
- [ ] Add preloading for critical resources

### SEO & Analytics
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google
- [ ] Set up Google Search Console
- [ ] Add schema.org markup
- [ ] Create custom 404 page

## 📱 Sharing

### Before Sharing
- [ ] Everything in "Testing" section passes
- [ ] Everything in "Deployment" section complete
- [ ] Site loads fast (<3 seconds)
- [ ] No console errors
- [ ] Looks professional

### Share On
- [ ] LinkedIn profile (add to Featured section)
- [ ] LinkedIn post announcing launch
- [ ] Twitter/X
- [ ] GitHub profile README
- [ ] Email signature
- [ ] Resume (add website URL)
- [ ] Share with friends for feedback

## 🔄 Maintenance

### Monthly Tasks
- [ ] Update with new projects
- [ ] Update experience if changed
- [ ] Update certifications if earned new ones
- [ ] Check for broken links
- [ ] Review analytics

### As Needed
- [ ] Update contact information
- [ ] Add new publications
- [ ] Update skills/technologies
- [ ] Refresh project screenshots
- [ ] Update resume link

---

## Quick Commands Reference

```bash
# Development
cd /Users/jyotbuch/Desktop/JyotBuch/portfolio
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy
npm run deploy  # (after installing gh-pages)
```

## Status: [ ] Complete | [ ] In Progress | [ ] Not Started

**Last Updated:** _______________

**Deployment Date:** _______________

**Live URL:** https://jyotbuch.github.io/JyotBuch/

---

**Note:** Check off items as you complete them. This will help you track progress and ensure nothing is missed!
