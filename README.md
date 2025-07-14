# 🚀 My Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience as a Full Stack Developer with expertise in Web3 and blockchain technologies.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations using Framer Motion
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Interactive Sections**: Dynamic navigation with active section highlighting
- **Contact Form**: Functional contact form with email integration using Resend
- **Theme Toggle**: Dark/light mode support for better user experience
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **Accessibility**: ARIA-compliant and screen reader friendly

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS3
- **Animations**: Framer Motion
- **Email**: Resend, React Email
- **Icons**: React Icons
- **Timeline**: React Vertical Timeline Component
- **Notifications**: React Hot Toast
- **Development**: ESLint, Prettier

## 🎯 Sections

1. **Hero/Intro**: Animated introduction with call-to-action buttons
2. **About**: Personal background and passion for development
3. **Projects**: Showcase of notable projects including:
   - **Supernova Dental**: Modern dental practice website
   - **Chain Detective**: Web3 analytics platform
   - **Snipp**: Code snippet management tool
   - **Interactive Games**: Hangman, Memory Cards, Tic-Tac-Toe, Word Search
4. **Skills**: Technical proficiencies with visual presentation
5. **Experience**: Professional timeline with key milestones
6. **Contact**: Functional contact form for potential collaborations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/[your-username]/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and add:

```bash
RESEND_API_KEY=your_resend_api_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```text
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx         # About section
│   ├── ContactForm.tsx   # Contact form
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills display
│   └── ...
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── lib/                  # Utilities and data
└── types/                # TypeScript type definitions
```

## 🎨 Key Components

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animation System**: Smooth page transitions and hover effects
- **Contact Integration**: Direct email functionality for inquiries
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1920px+)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic bundle optimization

## 🌐 Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

## 📧 Contact

Feel free to reach out through the contact form on the website or connect with me on:

- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this portfolio helpful, please consider giving it a star!
