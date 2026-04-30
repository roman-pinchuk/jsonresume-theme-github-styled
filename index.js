const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Register custom helpers
Handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

Handlebars.registerHelper('or', function() {
  return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
});

Handlebars.registerHelper('year', function(dateString) {
  if (!dateString) return '';
  return dateString.substring(0, 4);
});

Handlebars.registerHelper('formatDate', function(dateString) {
  if (!dateString) return '';
  // Extract just the year: 2022-02 becomes 2022
  return dateString.substring(0, 4);
});

Handlebars.registerHelper('faviconDataUrl', function(imageUrl) {
  if (!imageUrl) return '';

  const escapedImageUrl = String(imageUrl)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">',
    '<defs><clipPath id="avatar"><circle cx="32" cy="32" r="32" /></clipPath></defs>',
    '<image href="' + escapedImageUrl + '" width="64" height="64" preserveAspectRatio="xMidYMid slice" clip-path="url(#avatar)" />',
    '</svg>'
  ].join('');

  return 'data:image/svg+xml,' + encodeURIComponent(svg);
});

function render(resume) {
  const templatePath = path.join(__dirname, 'resume.hbs');
  const template = fs.readFileSync(templatePath, 'utf-8');
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(resume);
}

module.exports = { render };
