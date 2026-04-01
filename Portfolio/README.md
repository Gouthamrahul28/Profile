# K Goutham Rahul - Personal Portfolio Website

A fully responsive, modern personal portfolio website built with Bootstrap 5, showcasing projects, skills, qualifications, and certifications.

## 📂 Project Structure

```
Portfolio/
├── index.html                 # Home page
├── about.html                 # About page
├── qualifications.html        # Qualifications/Education page
├── skills.html                # Skills and expertise page
├── certifications.html        # Certifications page
├── contact.html               # Contact form page
├── css/
│   └── style.css             # Custom styles
├── js/
│   └── script.js             # JavaScript for form validation & interactions
└── assets/                    # Images and other assets (optional)
```

## 🎨 Features

### Navigation System
- ✅ Responsive Navbar with Bootstrap 5
- ✅ Active link highlighting
- ✅ Collapsible menu for mobile view
- ✅ Sticky navigation
- ✅ Social media links

### Pages & Components

#### Home Page
- Hero section with call-to-action buttons
- Featured projects carousel
- Achievement cards
- Newsletter signup

#### About Page
- Profile card with image
- Personal bio and interests
- Learning journey accordion
- Hobbies section
- Statistics section

#### Qualifications Page
- Educational background table (striped, bordered, hover effects)
- Grades with progress bars
- Badges for status
- Core courses listing
- Academic highlights

#### Skills Page
- Programming languages with progress bars
- Web technologies and frameworks
- AI/ML and Data Science expertise
- Soft skills with proficiency indicators
- Technical competencies

#### Certifications Page
- Certification cards with badges
- Modal popups for detailed views
- Skills by category
- Verification capability
- Multiple certifications from different platforms

#### Contact Page
- Contact information cards
- Comprehensive contact form with validation
- Input groups with icons
- HTML5 validation
- JavaScript form validation (10-digit phone number requirement)
- FAQ section using Bootstrap Accordion
- Newsletter signup

### Bootstrap Components Used
✅ Navbar  
✅ Grid System  
✅ Cards  
✅ Buttons  
✅ Forms & Input Groups  
✅ Tables  
✅ Progress Bars  
✅ Badges  
✅ Alerts  
✅ Modals  
✅ Accordion  
✅ List Groups  
✅ Dropdowns  
✅ Tooltips  

### Styling & Responsiveness
- Mobile-first responsive design
- Bootstrap utility classes (spacing, colors, typography)
- Custom CSS with CSS variables for theming
- Smooth animations and transitions
- Gradient backgrounds
- Card hover effects

### Form Validation
- HTML5 validation (required, email format)
- JavaScript validation:
  - Mobile number must be exactly 10 digits
  - All fields must be filled
  - Email format validation
- User-friendly error messages
- Success alerts

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side setup required

### Running Locally
1. Download or clone the project
2. Open any HTML file in your web browser
3. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   http-server
   ```
4. Navigate to `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

All pages are fully responsive and tested on various screen sizes.

## 🎯 Validation Features

### HTML5 Validation
- Required field validation
- Email format validation
- Type-specific validation

### JavaScript Validation
```javascript
// Phone number validation (exactly 10 digits)
function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
```

## 🌐 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **Bootstrap 5**: UI framework
- **JavaScript (ES6)**: Form validation and interactivity
- **Font Awesome**: Icons

## 📦 CDN Resources

- Bootstrap 5: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
- Font Awesome 6: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

## 🎨 Color Scheme

```css
--sky-light: #e3f2fd
--sky-medium: #90caf9
--sky-dark: #42a5f5
--sky-deep: #1e88e5
--accent-primary: #ff6b6b
--accent-secondary: #4ecdc4
--text-primary: #1a1a1a
--text-secondary: #666666
```

## 📋 Customization Guide

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --sky-deep: #1e88e5;  /* Change primary color */
}
```

### Update Content
- Edit HTML files directly to update text, links, and information
- Replace placeholder images with actual images
- Update contact information in footer

### Add Social Links
In the footer, update the social media URLs:
```html
<a href="YOUR_GITHUB_URL" class="text-white text-decoration-none">
    <i class="fab fa-github fa-2x"></i>
</a>
```

## 🚀 Deployment

### GitHub Pages
1. Create a new repository named `Portfolio` on GitHub
2. Push all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and save
6. Your site will be live at `https://yourusername.github.io/Portfolio`

### Other Hosting Options
- Netlify
- Vercel
- Firebase Hosting
- AWS S3
- Heroku

## 📞 Contact Form

The contact form includes:
- Full Name (required)
- Email (required, email validation)
- Phone (required, 10-digit validation)
- Subject (dropdown, required)
- Message (required, textarea)
- Privacy checkbox (required)

Form validation provides real-time feedback and displays success/error messages.

## 🔒 Data Privacy

- No data is stored on the client-side
- Form submission is for reference only (currently displays alert)
- To make the form functional, integrate with a backend service like:
  - Formspree
  - EmailJS
  - Your own API

## 📊 Performance

- Optimized CSS and JavaScript
- Proper image optimization
- Minimal external dependencies
- Fast loading times

## 🐛 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**K Goutham Rahul**
- Email: gouthamrahul28@gmail.com
- Phone: +91 9573262271
- Location: Hyderabad, Telangana, India

## 🤝 Contributing

Feel free to fork this repository and create your own version!

## 📞 Support

For issues or questions, please contact me through:
- Email: gouthamrahul28@gmail.com
- Phone: +91 9573262271
- GitHub: [Gouthamrahul28](https://github.com/Gouthamrahul28)

---

Made with ❤️ by K Goutham Rahul
