# Frontend Developer Portfolio

A modern, beautiful, and highly responsive portfolio website built with Angular 20, showcasing frontend development skills and featuring an AI-powered "Ask Me Anything" chat integration.

## ✨ Features

- **Modern Design**: Beautiful gradient themes and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **AI Chat Integration**: Interactive "Ask Me Anything" feature in the About section
- **Smooth Animations**: Engaging user experience with fade-in effects and transitions
- **Section Navigation**: Smooth scrolling between sections
- **Skills Showcase**: Visual representation of technical skills with progress bars
- **Contact Form**: Functional contact form with validation
- **SSR Ready**: Built with Server-Side Rendering support

## 🚀 Sections

1. **About**: Personal introduction with AI chat bot for Q&A
2. **Skills**: Display of technical skills and proficiencies
3. **Contact**: Contact form and social links

## 🛠️ Technologies Used

- Angular 20 (latest)
- TypeScript
- SCSS (Sass)
- Standalone Components
- Zoneless Architecture
- Server-Side Rendering (SSR)

## 📦 Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## 🎨 Customization Guide

### 1. Update Personal Information

**About Section** (`src/app/components/about/about.html`):
- Update the introduction text
- Modify statistics (years of experience, projects, clients)

**Contact Section** (`src/app/components/contact/contact.html`):
- Update email, phone, and location
- Add your social media links (GitHub, LinkedIn, Twitter)

### 2. Update Skills

Edit `src/app/components/skills/skills.ts`:

```typescript
skills: Skill[] = [
  { name: 'Your Skill', icon: '🚀', level: 90, category: 'Category' },
  // Add more skills...
];
```

### 3. Configure AI Chat

The AI chat currently uses placeholder responses. To integrate with your AI API:

**Option 1: Update the service directly**

Edit `src/app/services/ai-chat.ts` and replace the API URL and key.

**Option 2: Configure at runtime**

In your component or `app.config.ts`:

```typescript
import { AiChatService } from './services/ai-chat';

const aiService = inject(AiChatService);
aiService.configureApi('YOUR_API_URL', 'YOUR_API_KEY');
```

### 4. Customize Colors

Update `src/styles.scss`:

```scss
:root {
  --primary-color: #6366f1;     // Change primary color
  --secondary-color: #ec4899;    // Change secondary color
  --accent-color: #14b8a6;       // Change accent color
}
```

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 968px
- Desktop: > 968px

## 🎯 Next Steps

- [ ] Replace placeholder text with your information
- [ ] Add your actual skills and experience
- [ ] Update contact details and social links
- [ ] Connect your AI API for the chat feature
- [ ] Customize colors to match your brand
- [ ] Add your profile photo (replace the emoji placeholder)
- [ ] Deploy to your hosting platform

## 🌟 Optional Enhancements

You can extend this portfolio by adding:
- **Projects Section**: Showcase your work with images and descriptions
- **Blog Section**: Share your thoughts and tutorials
- **Resume Download**: Add a PDF download button
- **Dark/Light Mode Toggle**: Theme switcher
- **Animations**: More advanced scroll animations
- **Testimonials**: Client reviews and feedback

## 📄 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/        # Navigation header
│   │   │   ├── about/         # About section with AI chat
│   │   │   ├── skills/        # Skills showcase
│   │   │   └── contact/       # Contact form
│   │   ├── services/
│   │   │   └── ai-chat.ts     # AI chat service
│   │   ├── app.ts             # Main app component
│   │   └── app.html           # Main template
│   ├── styles.scss            # Global styles
│   └── index.html             # Entry HTML
└── package.json
```

## 🚀 Deployment

### Vercel, Netlify, or similar:

```bash
npm run build
# Deploy the dist/ folder
```

### With SSR:

```bash
npm run build
npm run serve:ssr:portfolio
```

## 💡 Tips

1. **Performance**: The portfolio is optimized with lazy loading and SSR
2. **SEO**: Update meta tags in `src/index.html` for better SEO
3. **Analytics**: Add Google Analytics or similar in `src/index.html`
4. **Forms**: Connect the contact form to a backend service or use services like Formspree

---

Built with ❤️ using Angular 20
