Lecture 5 - Homework
---

## **Homework: HTML Basics**

### **Part A: Multiple-Choice Questions (MCQ)**

1. **Which tag defines the main heading of an HTML page?**  
   1. `<title>`  
   2. `<h1>`  
   3. `<p>`  
   4. `<header>`

2. **Which HTML tag is an inline element?**  
   1. `<div>`  
   2. `<section>`  
   3. `<span>`  
   4. `<main>`

3. **Which attribute specifies the text to display if an image cannot be shown?**  
   1. `href`  
   2. `src`  
   3. `alt`  
   4. `target`

4. **Which of the following tags is **not** a semantic tag?**  
   1. `<header>`  
   2. `<footer>`  
   3. `<span>`  
   4. `<nav>`

5. **What attribute and value would you use to open a link in a new tab?**  
   1. `href="blank"`  
   2. `target="_new"`  
   3. `target="_blank"`  
   4. `rel="newtab"`

6. **In an HTML form, which method hides the form data from being visible in the address bar?**  
   1. `method="hide"`  
   2. `method="post"`  
   3. `method="get"`  
   4. `type="password"`

7. **Which table-related tag is used to group header content?**  
   1. `<thead>`  
   2. `<caption>`  
   3. `<tfoot>`  
   4. `<tr>`

---

### **Part B: Hands-On Coding**

#### **Coding Task 1: Simple “Profile” Page**

1. **Create an HTML file** named `profile.html`.
2. **Document Structure**  
   - Include `<!DOCTYPE html>` at the top.  
   - Use the standard `<html>`, `<head>`, `<body>` tags.
   - In the `<head>` section, add a `<title>` to describe your page.
3. **Header & Introduction**  
   - Inside the `<body>`, create a **header** (`<header>` or just an `<h1>` if you prefer) with the text: “Welcome to My Profile”.
   - Add a short **paragraph** (`<p>`) to introduce yourself (1–2 lines).
4. **Favorite Items Section**  
   - Create a **semantic section** (`<section>`) to list **3–5 of your favorite items** (movies, books, foods—your choice) using either an **ordered** or **unordered list**. 
     - Example:
       ```html
       <section>
         <h2>My Favorite Foods</h2>
         <ul>
           <li>Pizza</li>
           <li>Sushi</li>
           <li>Ice Cream</li>
         </ul>
       </section>
       ```
5. **Add a Picture**  
   - Insert one `<img>` element (either a local image file or a placeholder link).
   - Include a descriptive `alt` attribute to describe the image.
6. **Footer**  
   - Add a `<footer>` with any closing remark or copyright note.

*(Topics covered: basic HTML structure, headings, paragraphs, lists, images, and semantic tags.)*

---

#### **Coding Task 2: HTML “Contact Me” Form**

1. **Create a second HTML file** named `contact.html`.
2. **Basic Structure**  
   - Standard `<!DOCTYPE html>`, `<html>`, `<head>` (with `<title>`), and `<body>`.
3. **Form Section**  
   - Add a `<h1>` or `<h2>` heading: “Contact Me”.
   - Create a `<form>` with an `action="#"` (to keep it simple) and `method="post"`.
   - Add the following **required fields**:
     1. **Name**: `<input type="text" name="username" placeholder="Enter your name" required>`
     2. **Email**: `<input type="email" name="useremail" placeholder="Enter your email" required>`
     3. **Message**: `<textarea name="usermessage" rows="4" cols="40" placeholder="Your message"></textarea>`
   - Include a **Submit** button: `<input type="submit" value="Send">`
4. **Extra Fields** (Optional)  
   - If you feel comfortable, add a **radio** option for “Preferred contact method” or a **checkbox** for “Subscribe to newsletter”.

*(Topics covered: HTML form elements, attributes, and structure.)*

---

### **Part C: Bonus Challenge**

- **Create a simple HTML table** on either `profile.html` or `contact.html` (your choice) that lists a few fictional “skills,” “services,” or even “friends and their favorite colors.”  
- Use:
  - `<table>`  
  - `<tr>`, `<th>`, `<td>`  
  - Optional: `<thead>`, `<tbody>`, `<tfoot>` if you want to practice more advanced table structuring.

*(Topics covered: HTML table fundamentals.)*

---

## **Submission Instructions**

1. **MCQs**: Provide answers to the 7 multiple-choice questions in a text/Markdown file or typed out in the submission form.
2. **HTML Files**: Submit your two files (`profile.html` and `contact.html`) along with any local images (if used).
   - If you used online images or placeholders, just ensure the `<img>` tag is correct.

---

### **Due Date**
- Please submit by **Sunday, March 30th 5 PM**.  
- If you have any doubts or run into issues, bring them to the next class Q&A.

---