# Adirondack Regional Hub

A sophisticated Next.js 14 application showcasing home improvement professionals across four premier Adirondack communities: Boonville, Old Forge, Inlet, and Eagle Bay.

## 🚀 Deployment Status
**Production**: https://adk-sashopenhouse.vercel.app  
**Framework**: Next.js 14 with TypeScript  
**Last Updated**: March 27, 2026

## 🎨 Design Philosophy

**Modern Farmhouse / High-End Agency Aesthetic**
- **Color Palette**: Warm Tans (#D2B48C), Creamy Whites (#FDFBF7), Charcoal Accents (#333333)
- **Typography**: Sophisticated serif fonts (Playfair Display, Cormorant Garamond)
- **Animation**: Smooth GSAP and ScrollTrigger interactions

## 🏗️ Architecture

### Routing Structure
```
/                    → Landing page (redirects to /adk)
/adk                 → Main regional hub
/adk/boonville       → Boonville town page
/adk/old-forge       → Old Forge town page
/adk/inlet           → Inlet town page
/adk/eagle-bay       → Eagle Bay town page
```

### Key Features

#### 🏠 Main ADK Landing Page (`/adk`)
- **Sweeping Hero Section**: High-end visual header introducing the Adirondack region
- **Interactive Town Grid**: GSAP-powered hover states with smooth animations
- **Regional Content**: Showcases Adirondack expertise and mountain craftsmanship
- **Responsive Design**: Mobile-first approach with elegant desktop enhancements

#### 🏘️ Town Pages (Dynamic Sub-routes)
- **Localized Heroes**: Town-specific imagery and taglines
- **Targeted Content**: Community-specific information and highlights
- **Local Expert Spotlights**: Curated professionals for each town
- **Consistent Layout**: Reusable TownTemplate component ensures design consistency

#### ⚡ Animation & Interactions
- **GSAP ScrollTrigger**: Smooth reveal animations for content sections
- **Staggered Entrances**: Professional card animations with timing delays
- **Hover Effects**: Sophisticated micro-interactions on interactive elements
- **Page Transitions**: Smooth navigation between town pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color system
- **Animation**: GSAP with ScrollTrigger
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond)

## 📁 Project Structure

```
src/
├── app/
│   ├── adk/                    # Main ADK hub
│   │   ├── boonville/          # Boonville town page
│   │   ├── old-forge/          # Old Forge town page
│   │   ├── inlet/              # Inlet town page
│   │   └── eagle-bay/          # Eagle Bay town page
│   ├── globals.css             # Global styles with design system
│   ├── layout.tsx              # Root layout with footer
│   └── page.tsx                # Homepage (redirects to ADK)
├── components/
│   ├── TownTemplate.tsx        # Reusable town page template
│   └── GlobalFooter.tsx        # Site-wide footer with newsletter
└── public/
    └── images/                 # Asset directory structure
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Visit Application**
   - Homepage: `http://localhost:3000`
   - ADK Hub: `http://localhost:3000/adk`
   - Town Pages: `http://localhost:3000/adk/[town-name]`

## 🎯 Key Components

### TownTemplate Component
Reusable template for all town pages featuring:
- Dynamic hero sections with town-specific content
- Flexible highlight system with custom icons
- Professional spotlight cards with ratings and contact info
- Consistent animation patterns across all towns

### GlobalFooter Component
Sophisticated footer including:
- Newsletter signup with interactive feedback
- Community navigation links
- Contact information with branded styling
- Social media integration points

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices with progressive enhancement
- **Tablet Friendly**: Elegant grid systems that adapt to medium screens
- **Desktop Enhanced**: Full-width layouts that showcase the mountain aesthetic
- **High DPI Ready**: Crisp rendering on retina and high-resolution displays

## 🎨 Custom Tailwind Configuration

Extended Tailwind configuration includes:
- **Custom Colors**: Modern Farmhouse palette integration
- **Typography Scale**: Serif font family definitions
- **Animation Utilities**: Custom keyframes for smooth interactions
- **Component Classes**: Reusable design system patterns

## 📸 Image Asset Structure

```
public/images/
├── adk-landscape-hero.jpg       # Main ADK hero background
├── boonville-landscape.jpg      # Boonville hero image
├── old-forge-lake.jpg          # Old Forge hero image
├── inlet-lakefront.jpg         # Inlet hero image
├── eagle-bay-wilderness.jpg    # Eagle Bay hero image
└── experts/                    # Professional headshots
    ├── [expert-name].jpg       # Individual professional photos
    └── ...
```

## 🔧 Development Notes

- **GSAP Integration**: Animations are context-aware and cleanup properly on unmount
- **Performance Optimized**: Lazy loading for images and smooth scrolling behaviors
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🌟 Features Highlights

1. **Interactive Town Navigation**: Hover effects with scale and color transitions
2. **Professional Showcase**: Detailed cards with ratings, services, and contact options
3. **Smooth Animations**: ScrollTrigger-based reveals for content sections
4. **Newsletter Integration**: Functional signup with user feedback
5. **Modern Typography**: Sophisticated serif fonts with proper hierarchy
6. **Responsive Grid Systems**: Flexible layouts that work on all devices

---

**Built with modern web standards and optimized for the sophisticated Adirondack market.**
