const fs = require('fs');
const path = require('path');

const slugs = [
  "gymshark", "represent", "taylor-stitch", "kith", "princess-polly", "hiut-denim", "allbirds", "chubbies",
  "kylie-cosmetics", "colourpop", "rare-beauty", "fenty-beauty", "brooklinen", "burrow", "article",
  "silk-and-snow", "parachute", "outer", "nomad", "bellroy", "great-jones", "ridge-wallet", "blendjet",
  "bubs-naturals", "wild-one", "heatonist", "death-wish-coffee", "huel", "mvmt", "mejuri", "buffy",
  "cozy-earth", "saatva", "pura-vida", "bugatti-collections"
];

const publicDir = path.join(__dirname, '..', 'public');
const projectsDir = path.join(publicDir, 'projects');

// 1x1 Transparent PNG Base64
const transparentPngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
const buffer = Buffer.from(transparentPngBase64, 'base64');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

slugs.forEach(slug => {
  const dirPath = path.join(projectsDir, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Write placeholders
  fs.writeFileSync(path.join(dirPath, 'desktop.png'), buffer);
  fs.writeFileSync(path.join(dirPath, 'mobile.png'), buffer);
  fs.writeFileSync(path.join(dirPath, 'logo.png'), buffer);
});

console.log(`Successfully initialized folders and placeholder images for ${slugs.length} projects!`);
