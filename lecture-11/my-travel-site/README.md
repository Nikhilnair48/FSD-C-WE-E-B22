# My Travel Site

## What did we build so far?

### Responsive Navbar
- Navbar with brand, menu items and action items (login/signup)
- Responsiveness for mobile

### Image Carousel

- 4 images w/ captions and call to action
- left and right arrow for navigation
- indicators at the bottom

## Using Github to host your site

We'll use [Github Pages](https://pages.github.com/) to host your static website.

### Create your Github repository
- Login to [Github](https://github.com/login). Create an account, if you haven't already
- Create a new [repository](https://github.com/new)
    - Important: the repository name must follow this convention - <github_username>.github.io
        - Eg: my Github username is Nikhilnair48, so my repository name is Nikhilnair48.github.io


### Set up Git on your machine
- [Install git](https://git-scm.com/downloads)
    - If you're on Windows, please make sure you can use Git Bash (it's a command line tool). [Video Tutorial](https://www.youtube.com/watch?v=-fJEC46QP60)
- Generate and add SSH Key for your Github account
    - This step will help you push your code from your machine to Github. Don't forget to use Git Bash!
    - [Video Tutorial](https://www.youtube.com/watch?v=WgZIv5HI44o)
    - [Github Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Push your code
- Open terminal (or Git Bash on Windows)
- Change directory to the project folder
    - `cd` is the command to change directory
    - Eg: cd /path/to/my/nikhilnair48.github.io
- Initialize git in your folder
    - Purpose: initializes the Git repository. Git creates a hidden folder, `.git`
    - Command: `git init`
- Add files
    - Purpose: you're informing Git to start tracking the selected files
    - Command: `git add .` to add all files
        - If you want to add a single file: `git add index.html`
        - If you want to add multiple files: `git add index.html styles.css`
- Commit your change with a message
    - Purpose: commit messages are meant for you to understand the changes made to your project
    - Command: `git commit -m "Initial codebase for my website"`
- Push your changes
    - Purpose: once you push your changes, you can view it on Github
    - Command: `git push origin main`

### View your hosted site!

Now, you should be able to view the site at <github_username>.github.io!