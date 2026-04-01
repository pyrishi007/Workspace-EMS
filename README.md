# Role-Based Employee Task Management System
## 📌 Overview

The **Employee Task Management Dashboard** is a role-based task management web application built with **React**, **Redux Toolkit (RTK)**, and **Local Storage persistence**.
It allows **Managers** to create and assign tasks while **Employees** can track, complete, and manage their assigned work efficiently.

The application implements secure **email & password authentication**, **role-based access control**, and centralized **state management using Redux Toolkitdd**, making it scalable and maintainable.

---

## 🚀 Features

### 🔐 Authentication

* Email & Password based login system
* Role-based login access (Manager / Employee)
* Persistent login using Local Storage

### 👨‍💼 Manager Capabilities

* Create tasks
* Assign tasks to employees
* View all assigned tasks
* Monitor employee progress

### 👨‍🔧 Employee Capabilities

* View assigned tasks
* Mark tasks as completed
* Delete tasks
* Track task status

### 🧠 State Management

* Redux Toolkit (RTK) used for centralized state management
* Clean slice-based architecture

### 💾 Storage

* Local Storage used as a **single source of truth** for session persistence

---

## 🏗️ Tech Stack

* React (Vite)
* Redux Toolkit (RTK)
* JavaScript (ES6+)
* tailwind
* Local Storage
* Tostify
* Firebase
* ..and lots more


---

## 📂 Folder Structure

```
workspace-emp/
│
├── public/
│
├── src/
│   ├── assets/
│
│   ├── Component/
│   │   ├── Auth/
│   │   │   └── AuthForm.jsx
│   │
│   │   ├── Dashboard/
│   │   │   └── common/
│   │   │       ├── HeroSection.jsx
│   │   │       └── Sidebar.jsx
│   │
│   │   ├── Employee/
│   │   │   ├── Boards.jsx
│   │   │   ├── EmployeeDashboard.jsx
│   │   │   ├── EmpTaskPanel.jsx
│   │   │   └── EmpWorkingPanel.jsx
│   │
│   │   └── Manager/
│   │       ├── ManagerBoards.jsx
│   │       └── ManagerDashboard.jsx
│
│   ├── hooks/
│
│   ├── store/
│   │   ├── slices/
│   │   │   └── AuthSlice.js
│   │   └── store.js
│
│   ├── utils/
│   │   ├── emailAndPasswordValidation.js
│   │   ├── getUserData.js
│   │   └── localStorage.js
│
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔄 Application Flow

1. User logs in using email & password
2. System validates credentials
3. Role is identified (Manager / Employee)
4. Dashboard loads based on role
5. Tasks are managed accordingly

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate into project
cd workspace-emp

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🎯 Future Improvements

* Backend integration (Node.js / Firebase)
* JWT authentication
* Task deadlines & reminders
* Notifications system
* Role-based route protection
* API-based persistent storage

---

## 👨‍💻 Author

Developed as a role-based task management dashboard using React and Redux Toolkit.

## 📥 How to Use This Project (Clone & Run Locally)

Follow the steps below to set up the project on your machine.

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
```

Example:

```bash
git clone https://github.com/your-username/workspace-emp.git
```

---

### 2️⃣ Navigate into the Project Folder

```bash
cd workspace-emp
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

### 4️⃣ Start Development Server

```bash
npm run dev
```

The app will run locally at:

```
http://localhost:5173
```

---

## 🛠️ Useful Development Commands

### Start Development Server

```bash
npm run dev
```

Runs the app in development mode.

---

### Build for Production

```bash
npm run build
```

Creates an optimized production build.

---

### Preview Production Build

```bash
npm run preview
```

Preview the production version locally.

---

### Run Linter

```bash
npm run lint
```

Checks for code issues using ESLint.

---

## 🌿 Useful Git Commands (For Contributors)

### Check Current Branch

```bash
git branch
```

---

### Create New Branch

```bash
git checkout -b feature-name
```

Example:

```bash
git checkout -b add-task-feature
```

---

### Check Project Status

```bash
git status
```

---

### Add Changes

```bash
git add .
```

---

### Commit Changes

```bash
git commit -m "Added new task feature"
```

---

### Push Changes to GitHub

```bash
git push origin feature-name
```

---

### Pull Latest Updates

```bash
git pull origin main
```

---

## 🤝 Contributing

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit changes
5. Push your branch
6. Open a Pull Request 🚀
