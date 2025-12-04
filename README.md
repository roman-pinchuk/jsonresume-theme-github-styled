# JSON Resume Theme - GitHub Style

A modern, clean JSON Resume theme inspired by GitHub's design system with dark/light mode support and mobile-responsive layout using Tailwind CSS.

## Features

- **GitHub-inspired Design**: Clean, professional layout following GitHub's design language
- **Dark/Light Mode**: Automatic theme detection with manual toggle and localStorage persistence
- **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop views
- **Modern Technology**: Built with Tailwind CSS for modern styling
- **Print-Friendly**: Optimized styles for PDF export and printing
- **Self-Contained**: All styles and scripts embedded in the template

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

The theme automatically detects your system's color scheme preference and applies the appropriate theme. You can manually toggle between dark and light modes using the button in the top-right corner. Your preference is saved in localStorage and persists across sessions.

### Mobile Optimization

The theme is fully responsive with breakpoints optimized for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

### Print Support

The theme includes print-optimized styles. The theme toggle button is hidden when printing, and colors are optimized for both screen and print media.

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
