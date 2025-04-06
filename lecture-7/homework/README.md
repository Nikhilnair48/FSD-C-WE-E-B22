1. Blog Post
- Create a simple blog post page containing the following:
 - a header:
    - title of the blog
    - creator of the blog (you!)
    - date of publishing the blog
 - a published blog:
    - at least three pagraphs of text
    - at least one image  (remember to use "alt" attribute)
    - use of emphasis (`<em>`) and <strong> tags
    - at least one link to an external page
    - at the end of the blog, add a button to subscribe to your blog
 - a footer:
    - copyright for your blog
- Style your blog
   - Style your paragraphs, links, headers, buttons & more! Don't forget to use CSS selectors here
   - CSS selectors (headers, paragraphs), pseudo selectors (for em, i, etc)
   - Use display, position and colors accordingly
- **Bonus**: Use a linear or radial gradient for the background of the body or the header of the blog

Blogs for inspiration:
 - [Blog 1](https://cupcakesandcashmere.com/diy/turning-digital-photos-into-prints)
 - [Blog 2](https://cupofjo.com/2025/03/28/have-a-lovely-weekend-54/)
 - [Blog 3](https://designformankind.com/2024/12/a-goal-for-2025-or-forever/)


2. Youtube video preview
- Create a simple Youtube video preview. You can pick any video of your choice.
- The video preview should display the following:
   - video thumbnail: use `img` tag, `src` & `alt` attribute & don't forget to set `width`/`height` for your image!
   - Video description
   - channel name
   - total views
   - duration of the video
   - when it was uploaded (eg: 1 day ago, 1 week ago, 1 year go)
- Style the card with a border, some padding around the content, and a background color of your choice
- **Bonus**: When the preview is clicked, redirect the user to the actual Youtube video. Your entire video preview should be clickable.

[Reference link for youtube video preview](https://github.com/Nikhilnair48/FSD-C-WE-E-B22/blob/main/lecture-7/homework/youtube-video-thumbnail-reference.png)

3. Sticky Navigation Header
 - Create a `header` element for a webpage
 - Inside the `header`, add a placeholder for a website logo (`div` or `img`) and a ([`nav` element with a few links](https://www.w3schools.com/TAgs/tag_nav.asp)).
 - Use CSS to make the header stick to the top of the browser window when the user scrolls:
    - Set the `position` property to `fixed`.
    - Set the `top` property to `0` or a valid integer (`10px`).
    - Ensure it spans the full width of the page.
    - Give it a background color.
    - Consider using ([`z-index`](https://www.w3schools.com/cssref/pr_pos_z-index.php)) if required.