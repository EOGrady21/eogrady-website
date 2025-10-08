# Blog Post Template Guide

This template provides a complete, ready-to-use structure for creating new blog posts with consistent styling and social sharing functionality.

## How to Use This Template

1. **Copy the template**: Make a copy of `blog-template.html` and rename it to your blog post filename (e.g., `my-new-blog-post.html`)

2. **Replace placeholder content**: Find and replace all content marked with `[BRACKETS]`:

### Required Replacements:

**In the `<head>` section:**
- `[BLOG TITLE]` - The title of your blog post
- `[BLOG DESCRIPTION]` - A brief 1-2 sentence summary for SEO and social media
- `[FULL URL TO THIS BLOG POST]` - Complete URL where this post will be hosted
- `[URL TO FEATURED IMAGE]` - Optional: URL to a featured image for social sharing

**In the main content:**
- `[BLOG TITLE]` - Same as above, for the main heading
- `[DATE]` - Publication date (e.g., "October 8, 2025")
- `[ESTIMATED READ TIME]` - Estimated reading time in minutes
- `[INTRODUCTION PARAGRAPH]` - Your opening paragraph
- `[SECTION HEADING 1]`, `[SECTION HEADING 2]` - Your section titles
- `[BODY PARAGRAPH 1]`, `[BODY PARAGRAPH 2]`, etc. - Your content paragraphs
- `[BULLET POINT 1]`, etc. - List items if using bullet points
- `[CONCLUSION PARAGRAPH]` - Your closing paragraph
- `[TAG 1]`, `[TAG 2]`, etc. - Relevant tags for your post

## Features Included

### ✅ Social Sharing
- **Twitter**: Share with custom text
- **LinkedIn**: Professional sharing
- **Facebook**: General social sharing  
- **Email**: Share via email with subject and body
- **Copy Link**: Copy URL to clipboard with success notification

### ✅ SEO Optimization
- Meta descriptions for search engines
- Open Graph tags for Facebook sharing
- Twitter Card tags for Twitter sharing
- Proper heading structure

### ✅ Consistent Styling
- Matches your site's existing design
- "Paged" look with layered shadows
- Responsive design for mobile devices
- Proper navigation and footer integration

### ✅ User Experience
- Back to blog navigation
- Estimated read time
- Tag system for categorization
- Mobile-friendly sharing buttons

## File Structure After Creating New Posts

```
blog/
├── style.css (shared blog styles)
├── blog-template.html (this template - don't modify)
├── blog-template-README.md (this guide)
├── masters-of-digital-innovation.html (existing post)
├── your-new-post.html (your new posts)
└── another-post.html
```

## Quick Start Checklist

When creating a new blog post:

- [ ] Copy `blog-template.html` to new filename
- [ ] Replace `[BLOG TITLE]` in title tag and h1
- [ ] Replace `[BLOG DESCRIPTION]` in meta description  
- [ ] Replace `[DATE]` with publication date
- [ ] Replace `[ESTIMATED READ TIME]` with reading time
- [ ] Replace all `[SECTION HEADING]` placeholders
- [ ] Replace all `[BODY PARAGRAPH]` placeholders with your content
- [ ] Replace `[TAG]` placeholders with relevant tags
- [ ] Update `[FULL URL TO THIS BLOG POST]` for social sharing
- [ ] Add your new post to the main `blog.html` listing page

## Social Sharing URLs

The template automatically generates proper sharing URLs using:
- Current page URL
- Page title from `<title>` tag  
- Meta description for email sharing

No additional configuration needed - it works automatically!

## Tips for Great Blog Posts

1. **Write compelling headlines** - Your `[BLOG TITLE]` should be descriptive and engaging
2. **Keep paragraphs short** - Easier to read on all devices
3. **Use subheadings** - Break up long content with `<h2>` and `<h3>` tags
4. **Add relevant tags** - Helps with categorization and discovery
5. **Include a strong conclusion** - End with key takeaways or next steps
6. **Estimate read time accurately** - Count ~200 words per minute

## Need Help?

- Check existing blog posts for examples
- Refer to the main `style.css` for available classes
- Test social sharing on different platforms
- Ensure all placeholder text is replaced before publishing