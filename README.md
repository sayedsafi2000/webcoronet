# Web Coronet - Web Development Agency Website

A modern, responsive website for Web Coronet - a leading web development, design, and digital marketing agency based in Sylhet, Bangladesh.

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive design
- **SEO Optimized**: Comprehensive SEO meta tags, structured data, and sitemap
- **Performance**: Optimized images, fast loading, and smooth animations
- **Mobile First**: Fully responsive design for all devices
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Radix UI components
- **Icons**: React Icons & Lucide React
- **Fonts**: Heebo, Literata (Local fonts)

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

## 🏃 Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
webcoronet/
├── app/
│   ├── components/      # React components
│   ├── contact/         # Contact page
│   ├── services/        # Services page
│   ├── team/           # Team page
│   ├── works/          # Portfolio/Works page
│   ├── blog/           # Blog page
│   ├── layout.jsx      # Root layout
│   └── page.jsx        # Home page
├── public/             # Static assets (images, logos)
├── lib/                # Utility functions
├── Dockerfile          # Docker configuration
└── next.config.mjs     # Next.js configuration
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t webcoronet .
```

### Run Docker Container

```bash
docker run -p 3000:3000 webcoronet
```

### Deploy on Coolify

1. Push your code to a Git repository
2. In Coolify, create a new application
3. Connect your Git repository
4. Coolify will automatically detect the Dockerfile
5. Build and deploy

## 🌐 Deployment

### Environment Variables

No environment variables are required for basic setup.

### Build Configuration

The project uses Next.js standalone output mode for optimal Docker deployment.

## 📱 Pages

- **Home** (`/`) - Main landing page with services, portfolio, and company info
- **Services** (`/services`) - Detailed service offerings
- **Works** (`/works`) - Portfolio and project showcase
- **Team** (`/team`) - Meet the team members
- **Contact** (`/contact`) - Contact form and information
- **Blog** (`/blog`) - Blog posts and updates

## 📞 Contact Information

- **Address**: ABC Point, Uposohor, Sylhet
- **Email**: info@webcoronet.com
- **Phone**: +880 1759-231288

## 🔗 Social Media

- **Facebook**: [Web Coronet](https://www.facebook.com/profile.php?id=61582159036502)
- **YouTube**: [AsadSnapper](https://www.youtube.com/@AsadSnapper)
- **WhatsApp**: +880 1759-231288

## 📝 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- XML Sitemap
- Robots.txt
- Canonical URLs

## 🎨 Customization

### Colors

Colors are defined in `tailwind.config.js` and can be customized there.

### Fonts

Fonts are loaded from the `app/fonts/` directory. To change fonts, update `app/layout.jsx`.

### Logo

Replace `/public/logo.png` with your logo file.

## 📄 License

Copyright © 2024 Web Coronet. All rights reserved.

## 👥 Team

- **Asad Jaman** - CEO & Founder
- **Sayed Safi** - Web Developer
- **Titun Chandra Dey** - Lead Designer
- **Fareea Mehjebin** - Digital Marketing Strategist

## 🤝 Contributing

This is a private project for Web Coronet. For inquiries, please contact info@webcoronet.com.

---

Built with ❤️ by [Web Coronet](https://www.webcoronet.com)
