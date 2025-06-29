# Creating your first React project

This React project was created using npm & vite. Steps to reproduce below:

  1. Open Git Bash or Terminal
  2. cd into Documents, or an appropriate directory
  3. Run `npm create vite@latest`
  4. If you don't have `npx` installed, you'll be given a prompt for installation. Allow it
  5. Enter a project name (eg: my-react-project)
  6. Pick react as your framework React (use up/down arrow & return)
  7. Pick Javascript as your language

Once you're done, a project folder should be created based on step 5.

# Running your project

Assuming a project name "my-react-project" -

`cd my-react-project`

`npm install`

`npm run dev`


# Semantic Versioning

What's semantic versioning?

A versioning scheme that helps developers communicate the changes in a software release. 

Notice the usage in package.json's dependencies and devDependencies.

It uses a three part format: Major.Minor.Patch

Major - This number increases when there are backward-incompatible changes. If the current version is 2.5.7, the next major release would be 3.0.0; in this case, users will need to update their software to use the new features.
Minor - This number increases when new functionality is added in a backward-compatible manner. If the current version is 2.5.7, the next minor release would be 2.6.0; generally, users may optionally update their software in such scenarios.
Patch - This number increases for backward-compatible bug fixes. If the current version is 2.5.7, the next path release would be 2.5.8; these releases are usually for bug fixes, so users may optionall update their software.

Use Case 1:

You're using a library with version 1.2.3. Consider the scenarios:

- If the library is updated to 1.2.4, it's just fixing a bug. You may not need to update the library unless you were impacted by the bug.
- If it moves to 1.3.0, new features were added (e.g. a new function), but all existing functions still work the same. You may remain on 1.2.3 unless the new function is relevant to you.
- If it jumps to 2.0.0, the some existing functionalities may have changed and major new changes were introduced. So, you’ll need to update the version from 1.2.3; when updating from 1.2.3 to 2.0.0, it is possible that your code may need to change too


Use Case 2

You're managing a large React application whose current version is 3.5.2. You've functionalities like login, dashboards, etc.

- A bug fix to an existing login function increases the version to 3.5.3
- Permitting the user to create custom dashboards increases the version to 3.6.0
- Rewriting the authentication to enable social logins and removing old code would mean bumping to 4.0.0, since it's a breaking change


[Reference](https://semver.org/)