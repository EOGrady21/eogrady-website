# Code Organization and Architecture

This document outlines the cleaned and organized structure of Emily O'Grady's website, following HTML and CSS best practices for maintainability, accessibility, and performance.

## File Structure

```
Labs/lab2/
├── index.html              # Main landing page (clean, semantic HTML)
├── about.html              # About page
├── blog.html               # Blog listing page  
├── contact.html            # Contact page
├── cv.html                 # CV/Resume page
├── css/                    # Stylesheets organized by component
│   ├── style.css          # Base styles, typography, layout, navigation
│   ├── hero.css           # Hero section styles for landing page
│   ├── carousel.css       # Project carousel component
│   ├── contact.css        # Contact page specific styles
│   └── about.css          # About page specific styles
├── blog/
│   └── style.css          # Blog-specific styling (masonry layout)
├── js/
│   └── main.js            # All JavaScript functionality
├── images/                # Image assets
└── validate.js            # HTML validation script
```

## CSS Architecture

### 1. Base Styles (`css/style.css`)
- **Typography System**: Consistent font hierarchy using Merriweather for headings and Segoe UI for body text
- **Color Palette**: Defined color scheme with CSS custom properties for consistency
- **Layout Grid**: Responsive grid system for consistent spacing
- **Navigation**: Mobile-first responsive navigation with hamburger menu
- **Utility Classes**: Reusable spacing, alignment, and display utilities

### 2. Component-Specific Stylesheets
- **Hero Section (`css/hero.css`)**: Landing page hero with gradient background, CTAs, and responsive design
- **Carousel (`css/carousel.css`)**: Interactive project showcase with touch-friendly navigation
- **Contact (`css/contact.css`)**: Contact page layout and social media styling  
- **About (`css/about.css`)**: About page flexbox layout and image gallery

### 3. CSS Organization Principles
- **Mobile-First**: All responsive breakpoints start from mobile and scale up
- **BEM-like Naming**: Descriptive class names that indicate component and purpose
- **Logical Grouping**: Related styles grouped with clear section headers
- **Performance**: Optimized selectors and efficient CSS cascade

## JavaScript Architecture (`js/main.js`)

### Modular Functions
- **`initializeNavigation()`**: Handles mobile menu toggle across all pages
- **`initializeCarousel()`**: Manages project carousel with touch and mouse support
- **`initializeAccessibility()`**: Adds keyboard navigation and ARIA support
- **`initializeSmoothScrolling()`**: Enhances anchor link behavior
- **`initializeLazyLoading()`**: Optimizes image loading for performance

### Event Handling
- **DOM Content Loaded**: Main initialization function
- **Resize Events**: Responsive behavior adjustments
- **Keyboard Events**: Accessibility enhancements for interactive elements

## HTML Semantic Structure

### Accessibility Improvements
- **ARIA Labels**: All interactive components have proper labels
- **Semantic Elements**: `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>` used appropriately
- **Heading Hierarchy**: Proper H1-H6 structure for screen readers
- **Alt Text**: Descriptive alternative text for all images
- **Focus Management**: Keyboard navigation support

### SEO Enhancements  
- **Meta Tags**: Proper viewport and character set declarations
- **Structured Content**: Logical document outline with semantic HTML
- **Descriptive Links**: Clear link text and ARIA descriptions
- **Image Optimization**: Descriptive filenames and alt attributes

## Performance Optimizations

### CSS
- **Critical CSS**: Base styles loaded first, component styles loaded as needed
- **Minification Ready**: Clean, organized code ready for build processes
- **Efficient Selectors**: Avoid complex nested selectors for better performance

### JavaScript
- **Single File**: All functionality consolidated to reduce HTTP requests
- **Event Delegation**: Efficient event handling patterns
- **Lazy Loading**: Images load only when needed
- **Touch Optimization**: Native scrolling on touch devices

### Images
- **Appropriate Formats**: JPEG for photos, PNG for graphics, SVG for icons
- **Descriptive Alt Text**: Improves accessibility and SEO
- **Lazy Loading**: Deferred loading for better page speed

## Browser Compatibility

### CSS Features
- **Flexbox & Grid**: Modern layout with fallbacks
- **CSS Custom Properties**: Organized color and spacing system
- **Media Queries**: Responsive design for all screen sizes
- **CSS Transitions**: Smooth animations and hover effects

### JavaScript Features  
- **ES6+ Syntax**: Modern JavaScript with graceful degradation
- **Event Listeners**: Standard DOM event handling
- **Touch Events**: Mobile-friendly interaction patterns
- **Accessibility APIs**: ARIA and keyboard navigation support

## Development Workflow

### Code Quality
- **Consistent Formatting**: Proper indentation and spacing
- **Meaningful Comments**: Explanation of complex functionality
- **Descriptive Naming**: Clear variable and class names
- **Separation of Concerns**: HTML structure, CSS presentation, JS behavior

### Maintenance
- **Modular Architecture**: Easy to update individual components
- **Clear Documentation**: Comments explaining functionality
- **Consistent Patterns**: Reusable code patterns throughout
- **Version Control Ready**: Clean, organized files for Git tracking

## Future Enhancements

### Possible Improvements
- **CSS Variables**: More extensive use of custom properties
- **Build Process**: Sass/SCSS for advanced CSS features
- **TypeScript**: Type safety for JavaScript
- **Performance Monitoring**: Core Web Vitals optimization
- **Progressive Enhancement**: Advanced features with graceful fallbacks

This architecture provides a solid foundation for maintaining and extending the website while following modern web development best practices.