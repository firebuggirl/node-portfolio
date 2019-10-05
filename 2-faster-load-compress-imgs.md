# How to make your website load lightning fast with WebP images

## TODO:

- convert large gif image on front page => Consider using `MPEG4/WebM videos for animations` and `PNG/WebP for static images` instead of GIF to save network bytes => Google page speed suggestion (NOTE: other images are already optimized)

### Converting animated GIFs to video

https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/?utm_source=lighthouse&utm_medium=unknown

- Mac:

    ` nvm use 11 `

     ` brew install ffmpeg `

     ` cd images `

     ` ffmpeg -i animationazvj6.gif animationazvj6.mp4 `

     - Further tuning => employing an encoding mode called `Constant Rate Factor` (CRF) =>
     great when video quality is a high priority:

     ` ffmpeg -i input.gif -b:v 0 -crf 25 output.mp4 `

     ie....,

     ` ffmpeg -i animationazvj6.gif -b:v 0 -crf 25 animationazvj6.mp4 `

     - `two key differences`:

      - `-b:v` flag normally would limit the output bitrate, but `when we want to use CRF mode, it must be set to 0`.

      - The `-crf` flag accepts a `value between 0 and 51`. Lower values yield higher quality (but larger) videos, whereas higher values do the opposite.

      - For even smaller file sizes => specify a higher CRF value, but lower quality...find balance

        - EX:

        - Google page speed load time before conversion => `4.05s`

         - after => 93% page speed score

    - NOTE: if video does not load in Safari, run:

        ` ffmpeg -i input.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p output.mp4 `

        ie...,

        ` ffmpeg -i animationazvj6.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p animationazvj6.mp4 `

### go a bit further by generating an additional WebM source

` ffmpeg -i input.gif -c vp9 -b:v 0 -crf 41 output.webm `

ie.,

` ffmpeg -i animationazvj6.gif -c vp9 -b:v 0 -crf 41 animationazvj6.webm `



## Further Optimizations

- Image formats like `JPEG 2000, JPEG XR, and WebP` often provide better compression than PNG or JPEG, which means faster downloads and less data consumption

- NOTE: already used Gulp images, but  `zen-leaf.jpg` + `logo.png` (according to GPS)need further optimization

- WebP is supported in Chrome and Opera and provides better lossy and lossless compression for images

- need to `serve a fallback PNG or JPEG` image for other browser support

### How to make your website load lightning fast with WebP images

https://www.freecodecamp.org/news/make-your-website-load-lightning-fast-with-webp-images-cf55c98ac0a2/

- Use https://convertio.co/image-converter/?utm_source=chrome_extension => added to Chrome as an ext.

#### show your image in the normal HTML way (rather than inside a CSS class)


- `HTML:`

    <picture>
      <source srcset="images/mypicture.webp" type="image/webp">
      <source srcset="images/mypicture.jpg" type="image/jpeg">
      <img alt="This is my face" src="images/mypicture.jpg">
    </picture>

  - checks to see if the browser supports the <picture> tag. If it does,serve up WebP image; if it doesn’t, serve up the JPG image

  - NOTE: `webp works via localhost, but is NOT working on Network Solutions server`

  #### Convert/show an image inside a CSS class, like a background image url
