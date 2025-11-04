# Quick Start Guide

## Immediate Next Steps

### 1. Add Your Images (5-10 minutes)
1. Navigate to `public/assets/images/`
2. Add your professional headshot as `headshot.jpg` (400x400px recommended)
3. Add project screenshots with descriptive names
4. Update image references in components

### 2. Update Your Information (10-15 minutes)

#### Social Media Links
- `src/components/Footer.jsx` - Line ~25: Update LinkedIn URL
- `src/components/Contact.jsx` - Line ~110: Update all social media links

#### Resume
- Add your resume PDF to `public/assets/` as `resume.pdf`
- Or update the link in `src/components/Hero.jsx` - Line ~45

#### Project Links
- `src/components/Projects.jsx` - Update `github` and `demo` URLs in the projects array

#### Publication Links  
- `src/components/Publications.jsx` - Update DOI/publication links

### 3. Test Locally (2 minutes)
```bash
npm run dev
```
Visit `http://localhost:5173` and check:
- ✅ All sections display correctly
- ✅ Dark mode toggle works
- ✅ Smooth scrolling works
- ✅ Project filtering works
- ✅ All links work (especially placeholders marked with #)

### 4. Build for Production (1 minute)
```bash
npm run build
```
Check for any errors. The build output will be in the `dist` folder.

### 5. Deploy to GitHub Pages

#### Method 1: GitHub Actions (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```
2. Go to your repo settings → Pages → Source: GitHub Actions
3. The workflow will automatically deploy on push

#### Method 2: Manual with gh-pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Deploy:
   ```bash
   npm run deploy
   ```

### 6. Verify Deployment (2 minutes)
- Visit `https://jyotbuch.github.io/JyotBuch/`
- Test on mobile device
- Check all images load correctly
- Verify all links work

## Common Customizations

### Change Color Scheme
Edit `tailwind.config.js` - Lines 12-34

### Update Content
All content is in data arrays at the top of each component file:
- About text: `src/components/About.jsx`
- Experience: `src/components/Experience.jsx` - `experiences` array
- Projects: `src/components/Projects.jsx` - `projects` array
- Skills: `src/components/Skills.jsx` - `skillCategories` array

### Add New Project
In `src/components/Projects.jsx`, add to the `projects` array:
```jsx
{
  title: "New Project",
  description: "Project description...",
  achievement: "Key achievement",
  date: "Month Year",
  tags: ["Tech1", "Tech2"],
  category: ["Category1", "Category2"],
  github: "https://github.com/...",
  demo: "https://...",
  image: "/assets/images/project-name.jpg"
}
```

## Troubleshooting

### Images Not Loading
- Ensure images are in `public/assets/images/`
- Use absolute paths starting with `/`
- Check `vite.config.js` base path matches your repo name

### Build Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark Mode Not Working
- Clear browser localStorage
- Check browser console for errors

## Need Help?
- 📖 Full documentation in `README.md`
- 🐛 Check for errors in browser console
- 💬 Create an issue on GitHub

## Checklist Before Going Live

- [ ] Added professional headshot
- [ ] Added project screenshots
- [ ] Updated all social media links
- [ ] Added/linked resume PDF
- [ ] Updated project GitHub/demo links
- [ ] Updated publication links
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] Deployed to GitHub Pages
- [ ] Verified all links work
- [ ] Tested on mobile device
- [ ] Checked spelling and grammar

🎉 Once complete, share your portfolio with the world!
