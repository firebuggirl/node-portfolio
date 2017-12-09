// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// Making a static map is really long - this is a handy helper function to make one
//exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;
require('dotenv').load();


exports.staticMap = process.env.MAP_KEY;

// Some details about the site
exports.siteName = `Firebuggirl Portfolio!`;

exports.title = `Home`;
// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);
