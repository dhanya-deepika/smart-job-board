# Smart Job Board

A modern and responsive job search application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The application allows users to browse jobs, search opportunities, view detailed job information, and save favorite jobs using Local Storage.

## 🌐 Live Demo

https://smart-job-board.vercel.app/

## 📂 GitHub Repository

https://github.com/dhanya-deepika/smart-job-board

---

## 📖 Project Overview

Smart Job Board is a frontend web application that provides a clean and user-friendly interface for exploring job opportunities. Users can search jobs by title, company, or location, view complete job descriptions, and save jobs for future reference.

The project demonstrates modern frontend development practices including reusable components, routing, responsive design, local state management, Continuous Integration (CI), and Continuous Deployment (CD).

---

## ✨ Features

- Responsive UI for desktop and mobile
- Browse available job listings
- Search jobs by title, company, or location
- View complete job details
- Save and remove favorite jobs
- Persistent saved jobs using Local Storage
- Loading skeletons for better user experience
- Clean and reusable component architecture
- Automatic CI using GitHub Actions
- Automatic deployment using Vercel

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Icons

### Version Control

- Git
- GitHub

### CI/CD

- GitHub Actions
- Vercel

---

## 📁 Project Structure

```
src/
│
├── assets/
├── components/
│   ├── home/
│   ├── jobs/
│   └── layout/
│
├── data/
├── hooks/
├── pages/
├── routes/
├── types/
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/dhanya-deepika/smart-job-board.git
```

Navigate to the project

```bash
cd smart-job-board
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📜 Available Scripts

Run development server

```bash
npm run dev
```

Build production files

```bash
npm run build
```

Run ESLint

```bash
npm run lint
```

Preview production build

```bash
npm run preview
```

---

## 🔄 CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration and Vercel for Continuous Deployment.

### Continuous Integration (CI)

Whenever code is pushed to the `main` branch:

- Repository is checked out
- Node.js is configured
- Dependencies are installed
- Project is built
- ESLint checks are executed

### Continuous Deployment (CD)

After a successful GitHub push:

- Vercel automatically detects the latest commit
- Builds the application
- Deploys the latest version
- Updates the live website automatically

---

## 🌍 Deployment

**Live Application**

https://smart-job-board.vercel.app/

---

## 📸 Screenshots

> Add screenshots of:

- Home Page
- Jobs Page
- Job Details Page
- Saved Jobs Page

---

## 🔮 Future Enhancements

- User Authentication
- Apply Job Functionality
- Backend Integration
- Pagination
- Dark Mode
- Advanced Filters
- Company Profiles

---

## 👩💻 Author

**Dhanya Deepika**

GitHub

https://github.com/dhanya-deepika
