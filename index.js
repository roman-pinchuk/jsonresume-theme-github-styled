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

function render(resume) {
  const templatePath = path.join(__dirname, 'resume.hbs');
  const template = fs.readFileSync(templatePath, 'utf-8');
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(resume);
}

module.exports = { render };
