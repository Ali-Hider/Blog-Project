<h1 align="center">Welcome to Blog 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/Blog" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/Blog.svg">
  </a>
</p>

> A full-stack blogging platform where users can create, edit, and manage posts with images. Built using **React, Appwrite, and Tailwind CSS**, it provides authentication, real-time data sync, and a clean UI for modern blogging.

---

**Tech Stack:**
- **Frontend:** React, Tailwind CSS, Redux Toolkit, React Hook Form
- **Backend (Serverless):** Appwrite (Authentication, Database, Storage)
- **Routing & Navigation:** react-router-dom
- **Rich Text Editor:** TinyMCE
- **Other Tools & Libraries:** HTML, CSS, JavaScript

---

## Project Description
Blog Project is a full-stack blogging platform that provides a secure, authentication-aware experience while enabling users to create, edit, and manage blog posts with rich text and images. The project demonstrates a clean separation of concerns:

- **Logic Layer:** Frontend wrappers (`AuthService` & `BlogService`) interact directly with Appwrite’s backend APIs to handle authentication, CRUD operations, and file storage.
- **State Management:** Centralized using Redux Toolkit, ensuring consistent authentication state across all components.
- **UI Layer:** Modular, reusable React components (Signup, Login, PostForm, PostCard, Header, Footer) provide a responsive and consistent user interface.

---

## Key Features
- **Authentication & Authorization:** User registration, login, auto-session checks, and protected routes.
- **Rich Text Editing:** Create and edit posts using TinyMCE with formatting, images, and tables.
- **Image Uploads:** Upload featured images with previews for posts.
- **Slug-based Routing:** Unique, URL-friendly slugs for dynamic post navigation.
- **Reusable Components:** ForwardRef-enabled inputs and selects integrated with React Hook Form.
- **Dynamic Pages & Routing:** Guest-only and protected pages via AuthLayout and ProtectedRoute.
- **Real-Time Data Integration:** Posts are stored and fetched from Appwrite without a custom backend.

---

## Significance
This project showcases proficiency in **modern frontend development**, clean architecture, serverless backend integration, advanced state management, and component-driven design. It demonstrates the ability to build a **production-ready, secure, and scalable web application** while following best practices in React development.

### ✨ [Demo](https://github.com/Ali-Hider/Blog-Project)

## Install

```sh
npm install
```

## Usage

```sh
npm run dev
```

## Author

👤 **MD Ali Hider**

* Github: [@Ali-Hider](https://github.com/Ali-Hider)
* LinkedIn: [@alihider](https://linkedin.com/in/alihider)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
