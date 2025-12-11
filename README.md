# JSON Resume Theme - GitHub Style

[![npm version](https://img.shields.io/npm/v/jsonresume-theme-github-styled.svg)](https://www.npmjs.com/package/jsonresume-theme-github-styled)
[![npm downloads](https://img.shields.io/npm/dm/jsonresume-theme-github-styled.svg)](https://www.npmjs.com/package/jsonresume-theme-github-styled)
[![license](https://img.shields.io/npm/l/jsonresume-theme-github-styled.svg)](https://github.com/roman-pinchuk/jsonresume-theme-github-styled/blob/main/LICENSE)

A modern, clean JSON Resume theme based on GitHub's soft dark and light themes with seamless dark/light mode support and mobile-responsive layout using Tailwind CSS.

<img width="1541" height="643" alt="image" src="https://github.com/user-attachments/assets/da7644fd-66d9-4f37-9570-7a3467dc99e1" />

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Styled-blue?style=for-the-badge&logo=github&logoColor=white)](https://roman-pinchuk.github.io/jsonresume-theme-github-styled)

## Features

- **GitHub Soft Themes**: Authentic recreation of GitHub's soft dark and light color schemes with frosted glass effects
- **Dark/Light Mode**: Automatic theme detection with manual toggle and localStorage persistence
- **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop views
- **Modern Technology**: Built with Tailwind CSS for modern styling
- **Self-Contained**: All styles and scripts embedded in the template
- **Web-First Design**: Optimized for screen viewing with beautiful visual effects

## Installation

### Using with resume-cli

1. Install the theme:
```bash
npm install jsonresume-theme-github
```

2. Create or use your existing `resume.json` file following the [JSON Resume schema](https://jsonresume.org/schema/)

3. Generate your resume:
```bash
npx resume export resume.html --theme github
```

### Local Development

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

3. Install resume-cli globally if you haven't already:
```bash
npm install -g resume-cli
```

4. Create a `resume.json` file with your information

5. Serve your resume locally:
```bash
npx resume serve --theme .
```

6. Open your browser to `http://localhost:4000`

## JSON Resume Schema

Your `resume.json` should follow the [JSON Resume schema](https://jsonresume.org/schema/). Here's a minimal example:

```json
{
  "basics": {
    "name": "John Doe",
    "label": "Software Engineer",
    "image": "",
    "email": "john@example.com",
    "phone": "(555) 555-5555",
    "url": "https://johndoe.com",
    "summary": "A passionate software engineer...",
    "location": {
      "city": "San Francisco",
      "region": "CA",
      "countryCode": "US"
    },
    "profiles": [
      {
        "network": "GitHub",
        "username": "johndoe",
        "url": "https://github.com/johndoe"
      }
    ]
  },
  "work": [...],
  "education": [...],
  "skills": [...],
  "projects": [...]
}
```

## Theme Features

### Supported Resume Sections

- ✅ Basics (name, contact, summary, profiles)
- ✅ Work Experience
- ✅ Education
- ✅ Skills
- ✅ Projects
- ✅ Awards
- ✅ Certificates
- ✅ Publications
- ✅ Volunteer Experience
- ✅ Languages
- ✅ Interests
- ✅ References

### Dark/Light Mode

The theme features GitHub's authentic soft dark and soft light color schemes with frosted glass tile effects. It automatically detects your system's color scheme preference and applies the appropriate theme. You can manually toggle between dark and light modes using the button in the top-right corner. Your preference is saved in localStorage and persists across sessions.

### Mobile Optimization

The theme is fully responsive with breakpoints optimized for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

### Visual Effects

The theme features frosted glass tiles with backdrop blur and subtle shadows, creating a modern, layered visual effect that works beautifully in both dark and light modes. This is a web-first design optimized for screen viewing rather than printing.

## Customization

### Colors

The theme uses GitHub's color palette defined in the Tailwind config. You can customize colors by modifying the `tailwind.config` section in `resume.hbs`:

```javascript
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        github: {
          // Customize colors here
        }
      }
    }
  }
}
```

### Layout

The template uses Handlebars for templating. You can modify `resume.hbs` to adjust the layout, add new sections, or change the styling.

## Exporting

### HTML Export
```bash
npx resume export resume.html --theme github
```

### PDF Export
```bash
npx resume export resume.pdf --theme github
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

- Design inspired by [GitHub](https://github.com)
- Built with [Tailwind CSS](https://tailwindcss.com)
- Based on [JSON Resume](https://jsonresume.org)
