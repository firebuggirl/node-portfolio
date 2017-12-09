

/**
 * JSON array of objects to be appended to DOM/modals on details button click
 */

var posts = [
      {
        "id":0,
        "text":"<h1>Full stack restaurant application</h1><h3>Learn Node with Wes Bos Course-https://learnnode.com</h3><br><h3>Task:</h3><br><p>Build “Snacks-n-Hangs!” a full stack restaurant application which users can search, geolocate, review and curate their favorite restaurants from around the world.</p><br><p>This application utilizes three main models — Users, Stores and Reviews — all of which are relational. It is designed to hit upon many of today's application needs such as user authentication, database storage, Ajax REST API, file upload and image resizing.</p><br><h3>Tools and Methods used</h3><li>Node.js</li><li>MongoDB + Mongo Compass</li><li> mLab for database management</li><li>ES2017 Async + Await</li><li>ES6 destructuring + arrow functions</li><li>User Accounts</li><li>REST API endpoints</li><li>Database Schemas</li><li>Document Relationships</li><li>Templating and Mixins</li><li>Restricting Operations</li><li>Middleware</li><li>Image Resizing</li><li>Password Reset Flow</li><li>Storing Geospatial Data</li><li>Routing</li><li>Flow Control</li><li>Error Handling</li><li>Advanced DB Queries</li><li>File Uploading</li><li>Sending Email</li><li>MVC Pattern</li><li>Geocoding Addresses</li><li>Pagination</li><li>Server Deployment</li>"

      },
      {
        "id":1,
        "text":"<h1>Personal Profile Page</h1><h3>Treehouse Front End Tech Degree Project 1 tasks:</h3><br><p>Customize a personal online profile by adding graphics, customizing text, and improving the look of a web page using Cascading Style Sheets, the formatting language of the web. Share your finished project on GitHub, a website used by teams of programmers to share and work on programming code.</p><br><h3>Tools and Methods used</h3><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":2,
        "text":"<h1>Online Registration Form</h1><h3>Treehouse Front End Tech Degree Project 3 task:</h3><p>Build a responsive, mobile-first registration form using a variety of HTML form elements.</p><h4>Tools and Methods used:</h4><br><li>Sass</li><li>Gulp</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":3,
        "text":"<h1>Interactive Photo Gallery</h1><h3>Treehouse Front End Tech Degree Project 4 task:</h3><p>Use HTML, CSS and JavaScript to create an interactive, searchable gallery of photos.</p><h4>Tools and Methods used:</h4><br><li>Sass</li><li>Gulp</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"
      },
      {
        "id":4,
        "text":"<h1>FireBug Music</h1><h3>FireBug band website:</h3><br><p>Design a responsive and interactive website for my band FireBug </p><h4>Tools and Methods used:</h4></h4><li>Soundcloud API</li><li>Instagram API</li><li>Sass</li><li>Gulp/Node.js</li><li>Animsition</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"
      },

      {
        "id":5,
        "text":"<h1>SVG Site Update</h1><h3>Treehouse Front End Tech Degree Project 6 task:</h3><br><p>Master Scaleable Vector Graphics. SVG graphics are quickly becoming one of the most widely used graphic formats on the Web. Modernize the user interface of a web page by adding, styling and optimizing SVG graphics.</p><h4>Tools and Methods used:</h4><li>Sass</li><li>Gulp/Node.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":6,
        "text":"<h1>Interactive Video Player</h1><h3>Treehouse Front End Tech Degree Project 7 task:</h3><br><p>Build an HTML5 video player using JavaScript and the HTML5 Video API. Video, and the interface used to control the video, is increasingly important for all many different kinds of web applications including web site landing pages, blogs, podcasts, product marketing and training.</p><h4>Tools and Methods used:</h4><li>JS & jQuery</li><li>Sass</li><li>Gulp/Node.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":7,
        "text":"<h1>Accessibility Refactor</h1><h3>Treehouse Front End Tech Degree Project 8 task:</h3><br><p>Modify a website to make it more accessible for users and search engines by taking a set of interlinked pages that suffer from various accessibility flaws and refine and update them so they are accessible and pass an accessibility validator(s)'s automated checks and a human's check.</p><h4>Tools and Methods used:</h4><li>Sass</li><li>Gulp</li><li>Chrome Dev Tools-Audit Tab</li><li>Chrome Color Contrast Analyzer</li><li>Chrome Accessibility Developer Tools</li><li></li><li>W3C CSS Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":8,
        "text":"<h1>Web APP Dashboard</h1><h3>Treehouse Front End Tech Degree Project 9 task:</h3><br><p>Build an interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability.</p><h4>Tools and Methods used:</h4><li>Sass</li><li>Gulp</li><li>Chart.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":9,
        "text":"<h1>Public API</h1><h3>Treehouse Front End Tech Degree Project 10 task:</h3><br><p>Use Javascript programming to create a gallery of information and images by communication with a third-party API (Application Programming Interface).</p><h4>Tools and Methods used:</h4><br><li>Spotify Public API</li><li>Flickr Public API</li><li>IMDB Public API</li><li>Sass</li><li>Gulp/Node.js</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":10,
        "text":"<h1>Web Optimization</h1><h3>Treehouse Front End Tech Degree Project 11 task:</h3><br><p>Performance_Optimization Apply the skills learned for optimization of graphics, HTML, CSS, and JavaScript to take a poorly optimized site and reduce the total load size to under 1.3mb and total requests to less than 27. Students will need to analyze the assets they've been provided to see where optimizations can and need to be made, make those optimizations, and measure their success. Multiple analyzation, optimization, and measuring cycles may be required.</p><h4>Tools and Methods used:</h4><br><li>Google page speed</li><br><li>Node phantomas/http-server</li><br><li>Gulp Images for image optimization<li><br><li>Gulp minifyHTML, minifyCSS, Gulp Watch, Gulp connect, Gulp concatScripts, Gulp build (for automation)</li><br><li>W3C Markup Validation Service</li><br><li>W3C HTML Markup Validation Service</li><br><li>JS Hint</li>",

      },
      {
        "id":11,
        "text":"<h1>CSS to Sass</h1><h3>Treehouse Front End Tech Degree Project 5 task:</h3><p>Use programming principles to refactor a standard CSS stylesheet to Sass by identifying repeating patterns, using variables, and adding mixins.</p><h4>Tools and Methods used:</h4><br><li>Sass</li><li>W3C Markup Validation Service</li><li>W3C HTML Markup Validation Service</li><li>JS Hint</li>"

      },
      {
        "id":12,
        "text":"<h1>Customize Wordpress</h1><h3>Task: Customize Genesis child theme Centric Pro:</h3><p>Create a modular workflow with automation along with custom Instagram and Spotify page templates.</p><h4>Tools and Methods used:</h4><br><li>Google page speed</li><li>Gulp</li><li>Gulp Sass</li><li>Gulp Images for image optimization</li><li>Gulp Uglify CSS</li><li>Gulp Clean CSS</li><li>Gulp Concat</li><li>Gulp Uglify</li><li>BrowserSync + Reload</li>"

      },
    ],
     jsonData = JSON.stringify( posts );
