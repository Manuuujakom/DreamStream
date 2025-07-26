# JAKOM Service Website

## Overview
This is a Next.js website for JAKOM, a service-based business offering graphics design, data analysis, accounting/bookkeeping, virtual assistance, and kids hub services. The application has been converted from React Router SPA to Next.js with App Router, preserving all visual design, content, and functionality.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Next.js Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with React 18
- **Routing**: Next.js App Router (app directory structure)
- **Styling**: Tailwind CSS for consistent design system
- **Images**: Next.js Image component for optimized loading
- **SEO**: Built-in metadata API for SEO optimization
- **Build Tool**: Next.js built-in bundler and optimizer

### Frontend Structure
The application uses Next.js App Router with the following structure:
- **App Directory**: All pages and components are organized under the `app/` directory
- **Page Structure**: Each route has its own `page.tsx` file
- **Shared Components**: Header, Footer, and ServiceCard components are reused across pages
- **Metadata**: Each page includes proper SEO metadata configuration

## Key Components

### Next.js App Structure
```
jakom-nextjs/
├── app/
│   ├── components/          # Shared components (Header, Footer, ServiceCard)
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── graphics-design/     # Graphics & Design service page
│   ├── data-analysis/       # Data Analysis service page
│   ├── accounting-bookkeeping/ # Accounting & Bookkeeping service page
│   ├── virtual-assistance/  # Virtual Assistance service page
│   ├── kids-hub/           # Kids Hub service page
│   ├── about-us/           # About Us page
│   └── contact-us/         # Contact Us page
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## Recent Changes

### Next.js Conversion (January 2025)
- ✅ Converted React Router SPA to Next.js 14 with App Router
- ✅ Preserved all visual design and content from original application
- ✅ Created self-contained pages for all services and information pages
- ✅ Implemented proper SEO metadata for all pages
- ✅ Maintained responsive design and animations
- ✅ Set up Tailwind CSS configuration for consistent styling
- ✅ Created shared Header, Footer, and ServiceCard components

## External Dependencies

### Core Framework Dependencies
- **Next.js**: Next.js 14 with App Router for modern React applications
- **React**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React icon library for consistent iconography
- **Images**: Next.js Image component for optimized image loading

### Key Features
- **SEO Optimization**: Built-in metadata API for search engine optimization
- **Performance**: Automatic code splitting and optimization
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom CSS animations for enhanced user experience
- **Typography**: Inter font family for clean, professional appearance

## Deployment Strategy

### Build Process
1. **Next.js Build**: `npm run build` creates optimized production build
2. **Static Generation**: All pages are statically generated for optimal performance
3. **Asset Optimization**: Automatic image and asset optimization
4. **Bundle Analysis**: Built-in bundle analyzer for performance insights

### Environment Configuration
- **Development**: `npm run dev` starts Next.js development server on port 5000
- **Production**: `npm start` runs production server
- **Analytics**: Configurable Google Analytics via VITE_GA_MEASUREMENT_ID secret

### Deployment Requirements
- Node.js runtime environment (18+ recommended)
- Static hosting capability (Vercel, Netlify, or similar)
- Environment variables for analytics configuration
- CDN support for optimal global performance

### Pages Created
- **Home Page**: Complete business overview with all sections
- **Graphics & Design**: Comprehensive service page with portfolio and processes
- **Data Analysis**: Business intelligence and analytics service details
- **Accounting & Bookkeeping**: Financial services and compliance information
- **Virtual Assistance**: Administrative support service offerings
- **Kids Hub**: Educational programs for children
- **About Us**: Company story, mission, vision, and team information
- **Contact Us**: Contact information, form, and FAQ section

The Next.js architecture provides excellent SEO, performance, and developer experience while maintaining all the visual design and functionality of the original application.