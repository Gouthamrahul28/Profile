# 🚀 Quick Start Guide

Welcome to your Personal Portfolio Website! This guide will help you get started in 5 minutes.

## What You Have

A complete, production-ready, responsive portfolio website with:
- ✅ 6 fully-functional HTML pages
- ✅ Professional Bootstrap 5 styling
- ✅ Form validation (HTML5 + JavaScript)
- ✅ Mobile-responsive design
- ✅ All required Bootstrap components
- ✅ Ready to deploy to GitHub Pages

## File Structure

```
Portfolio/
├── 📄 index.html          ← Home page
├── 📄 about.html          ← About page
├── 📄 qualifications.html ← Education/Qualifications
├── 📄 skills.html         ← Skills & Expertise
├── 📄 certifications.html ← Certifications with Modals
├── 📄 contact.html        ← Contact Form with Validation
├── 📁 css/
│   └── style.css         ← All custom styles
├── 📁 js/
│   └── script.js         ← Form validation & interactions
├── 📁 assets/            ← For images (optional)
├── README.md             ← Full documentation
├── DEPLOYMENT.md         ← How to deploy to GitHub Pages
└── REQUIREMENTS.md       ← Requirements checklist
```

## 5-Minute Setup

### Option 1: View Locally (Fastest)

1. Open `index.html` in your browser
2. Click around to test all pages
3. Try the contact form
4. Test on mobile (F12 → Toggle Device Toolbar)

### Option 2: Local Server (Recommended)

```bash
# Navigate to your portfolio folder
cd C:\Users\gouth\Desktop\goutham\Portfolio

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

## Customization - Edit These

### 1. Personal Information
Every page has your info - Update these:

**In all HTML files:**
```html
<!-- Change in navbar and footer -->
<a class="navbar-brand" href="index.html">
    <i class="fas fa-code"></i> YOUR NAME HERE
</a>

<!-- In contact sections -->
<a href="mailto:YOUR_EMAIL@gmail.com">YOUR_EMAIL@gmail.com</a>
<a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
```

### 2. About Page Content
```html
<!-- Update about.html -->
<h2 class="mb-4">Who Am I?</h2>
<p class="lead">
    I'm a passionate [YOUR TITLE]...
</p>
```

### 3. Skills & Proficiency
```html
<!-- Update skills.html - Change percentages and descriptions -->
<div class="progress-bar" style="width: 85%;" ...>85%</div>
```

### 4. Certifications
```html
<!-- Update certifications.html - Change 6 certification cards -->
<h6>Your Certificate Title Here</h6>
<p>Your Institution/Platform</p>
```

### 5. Profile Image
```html
<!-- In about.html - Replace placeholder image -->
<img src="YOUR_IMAGE_PATH.jpg" class="card-img-top rounded-circle" alt="Profile Image">
```

### 6. Social Media Links
```html
<!-- In footer (all pages) - Update URLs -->
<a href="https://github.com/YOUR_USERNAME">
    <i class="fab fa-github"></i>
</a>
```

## Testing Checklist

Before deploying, test:

- [ ] Click all navigation links (should open correct pages)
- [ ] Test responsive design (open DevTools: F12)
- [ ] Fill contact form:
  - [ ] Submit without filling (should show errors)
  - [ ] Enter invalid email (should show error)
  - [ ] Enter less than 10 digits (should show error)
  - [ ] Fill correctly and submit (should show success)
- [ ] Click "View Certificate" buttons (should open modals)
- [ ] Test on mobile (DevTools → Toggle Device Toolbar)
- [ ] Check all external links

## Colors & Styling

### Change Theme Color

In `css/style.css`, modify:
```css
:root {
    --sky-deep: #1e88e5;        /* Primary blue */
    --sky-dark: #42a5f5;        /* Secondary blue */
    --text-primary: #1a1a1a;    /* Text color */
}
```

### Available Colors
```css
--sky-light: #e3f2fd
--sky-medium: #90caf9
--sky-dark: #42a5f5
--sky-deep: #1e88e5
--white: #ffffff
--gray-50: #fafafa
--gray-100: #f5f5f5
```

## Form Validation Rules

The contact form requires:
1. **Full Name**: Cannot be empty
2. **Email**: Valid email format (xxx@xxx.xxx)
3. **Phone**: Exactly 10 digits
4. **Subject**: Must select from dropdown
5. **Message**: Cannot be empty
6. **Privacy**: Must check the checkbox

JavaScript validation code is in `js/script.js`.

## Features Explained

### Navbar
- Sticky (stays at top while scrolling)
- Active page highlighting
- Hamburger menu on mobile
- Smooth hover animations

### Forms
- HTML5 validation
- JavaScript validation
- Real-time error feedback
- Success alerts

### Cards
- Hover lift effect
- Icon support
- Responsive design
- Color variations

### Tables
- Striped rows
- Hover effects
- Progress bar integration
- Badge integration

### Modals
- Click "View Certificate" to see modals
- 6 different certificates
- Smooth animations
- Responsive design

### Accordion
- Click to expand/collapse
- Used for FAQs, journey, highlights
- Smooth transitions
- Icons included

## Keyboard Shortcuts (Browser)

- `F12` - Open Developer Tools
- `Ctrl+Shift+M` - Toggle Mobile View
- `Right Arrow` - Next page
- `Left Arrow` - Previous page

## Common Customizations

### Add a New Project Card

In `index.html`, copy this and modify:
```html
<div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h5 class="card-title mb-0">
                <i class="fas fa-code"></i> Project Name
            </h5>
        </div>
        <div class="card-body">
            <p class="card-text">Description...</p>
            <div class="mb-3">
                <span class="badge badge-primary">Tech1</span>
                <span class="badge badge-info">Tech2</span>
            </div>
        </div>
    </div>
</div>
```

### Add a New Skill

In `skills.html`, copy this and modify:
```html
<div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title"><i class="fas fa-code"></i> Skill Name</h5>
            <p class="card-text">Description...</p>
            <div class="progress">
                <div class="progress-bar" style="width: 85%;">85%</div>
            </div>
        </div>
    </div>
</div>
```

## Troubleshooting

### Links Not Working
- Check file names (case-sensitive on some servers)
- Use relative paths: `href="about.html"` not `href="/about.html"`

### Images Not Showing
- Use correct file path: `src="assets/image.jpg"`
- Check image file exists
- Use absolute URL if needed

### Form Not Validating
- Check `js/script.js` is linked in HTML
- Open console (F12) for error messages
- Verify script is after form in HTML

### Styling Not Applied
- Check `css/style.css` is linked
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache

## Bootstrap Documentation

Need help with Bootstrap components?
- Official Docs: https://getbootstrap.com/docs/5.3/
- Bootstrap Icons: https://icons.getbootstrap.com/
- Bootstrap Components: https://getbootstrap.com/docs/5.3/components/

## Font Awesome Icons

Using 6000+ free icons:
- Browse icons: https://fontawesome.com/icons
- Add to HTML: `<i class="fas fa-icon-name"></i>`
- Already linked in all pages!

## Next Steps

1. ✅ **Customize Content** - Update your information
2. ✅ **Test Everything** - Use testing checklist above
3. ✅ **Deploy to GitHub Pages** - Follow DEPLOYMENT.md
4. ✅ **Share Your Portfolio** - Send URL to friends/employers
5. ✅ **Keep Updated** - Add new projects regularly

## Deployment (Easy!)

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Portfolio website"

# 4. Push to GitHub
git push -u origin main

# Your site will be live at:
# https://YOUR_USERNAME.github.io/Portfolio
```

See `DEPLOYMENT.md` for detailed instructions.

## Support & Help

- **Full Documentation**: See `README.md`
- **Requirements Met**: See `REQUIREMENTS.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Contact Info**: Update in HTML files

## Quick Links

- 🏠 Home: `index.html`
- 👤 About: `about.html`
- 🎓 Qualifications: `qualifications.html`
- 💻 Skills: `skills.html`
- 📜 Certifications: `certifications.html`
- 📧 Contact: `contact.html`
- 📖 Documentation: `README.md`
- 🚀 Deploy: `DEPLOYMENT.md`

## That's It!

You now have a professional, fully-responsive portfolio website. 

### What was included:
✅ 6 HTML Pages  
✅ Professional CSS (500+ lines)  
✅ Form Validation JavaScript  
✅ 15+ Bootstrap Components  
✅ Mobile Responsive Design  
✅ Complete Documentation  
✅ Deployment Guide  

**Ready to customize, test, and deploy!** 🚀

---

Happy building! 💻

For questions or help, refer to the documentation files or check Bootstrap docs.
