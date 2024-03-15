# Web APIs Challenge: Personal Blog
This repository contains the solution to the Web APIs Challenge, focused on creating a personal blog website with the ability to input and view blog posts. 

## Challenge Description
The goal of this challenge is to create a two-page website where users will input and view blog posts. The challenge involves building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle.

## Challenge Elements

### User Story
```markdown
AS A marketing student
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences
```

### Acceptance Criteria
```markdown
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## Solution
To address the challenge requirements, the following components were implemented:

### HTML:
- `index.html`: This file structures the landing page of the application, including forms, headers, toggles, and footers.
- `blog.html`: This file structures the page for displaying blog posts, including headers, content sections, and footers.

### CSS:
- `blog.css`:This stylesheet is responsible for styling the blog page, including the layout, colors, and responsiveness of the blog entries. It also defines styles for the edit and delete modal dialog used within the application. 
- `form.css`: This stylesheet handles the styling of forms, ensuring they are visually appealing and user-friendly.
- `style.css`: This stylesheet contains general styles shared across multiple pages of the application.

### Javascript:
- `blog.js`: This file is responsible for handling the dynamic rendering of blog posts, as well as providing functionality for editing and deleting blog entries. It interacts with the Document Object Model (DOM) to update the user interface based on user interactions and data stored in the browser's local storage.
- `form.js`: This file is responsible for managing form submissions and input validation in the web application. It interacts with the Document Object Model (DOM) to access form elements, retrieve user input, validate input values, and store data in the browser's local storage. Additionally, it handles the redirection to another page after form submission.
- `logic.js`: This file contains logic related to theme toggling, page navigation, and scroll functionality within the web application. It ensures consistent behavior and user experience across different pages by managing themes, displaying navigation buttons appropriately, and enabling smooth scrolling.
- `localStorage`: Utilized to store and retrieve blog post data, ensuring persistence across page reloads and enabling seamless user experience.

## Installation
The project can be accessed and viewed directly through the deployed website link: https://prestonnguyen2001.github.io/Two-Page-Personal-Blog/

Alternatively, you can clone the repository to your local machine for further exploration and customization. Here's how:
```markdown
git clone https://github.com/PrestonNguyen2001/Two-Page-Personal-Blog.git
cd Two-Page-Personal-Blog
```

## Usage
### 1. Create a New Blog Post:
- Upon loading the landing page, input your username, blog title, and blog content into the form
- Submit the form to create a new blog post.
- You'll be redirected to the posts page where you can view all submitted blog posts.
### 2. Editing Blog Posts:
- On the posts page, click on the blog post you wish to edit. This action will bring up an edit modal.
- Inside the edit modal, you can modify the title and content of the selected blog post.
- Click the `save` button to apply your changes. 
### 3. Deleting Blog Posts:
- To delete a blog post, hover over the blog post you wish to delete then click on the `🗑️` icon. This will bring up a confirmation modal.
- This modal will prompt you with the message `Are you sure you to delete [title]?`
- Click `Delete` to confirm deletion or `Cancel` to cancel the action.
### 4. Navigating Between Pages:
- From the posts page, click the `←` button to return to the landing page. This allows you to input more blog entries.
### 5. Toggle Modes
- Click the `☼` button in the header to switch between light/dark mode.
### 6. Viewing localStorage:
Mac: 
- Press the `Command+Option+i`  keys simultaneously to open the Inspect Element tool in your web browser.

Windows:
- Right-click any part of a webpage and click `Inspect` > `Inspect Element`.

Once the Inspect Element window is open, navigate to the "Application" tab. In the left-hand sidebar of the Application tab, locate and click on "LocalStorage" under the "Storage" section.
This will display a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.

## License
This project is licensed under the MIT License - see the LICENSE file for details.