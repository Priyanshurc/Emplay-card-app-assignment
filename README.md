# 🎴 Emplay Card App

An Angular-based card editor and listing web application developed for the **Emplay Inc.** assignment.

This app allows users to:

- View a dynamic list of cards  
- Edit card content via a modal  
- Save changes using a mock backend (`json-server`)  
- Validate input with field restrictions

---

## 📁 Project Structure

```
emplay-card-app/
├── backend/           # JSON Server mock backend
│   └── db.json        # Mock database file
├── src/               # Angular application source code
│   └── app/           # Core components, services, modules
├── angular.json       # Angular CLI configuration
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

---

## ✅ Prerequisites

Ensure the following tools are installed:

- **Node.js** (v18 or above)
- **Angular CLI**

Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/emplay-card-app.git
cd emplay-card-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## ▶️ Running the Application

This project uses both a **frontend** (Angular) and a **mock backend** (`json-server`).

### 🔹 Start Angular Frontend

```bash
ng serve
```

- Runs at: `http://localhost:4200/`
- Auto reload enabled

### 🔹 Start Backend (`json-server`)

```bash
npm run start:backend
```

- Runs at: `http://localhost:3000/`
- Reads from and writes to: `backend/db.json`

---

## 🧩 Features

- ✅ Card listing UI with image, title, and description
- ✅ Modal dialog to **edit cards**
- ✅ Two-way data binding for real-time updates
- ✅ Form validations:
  - Required fields
  - Max 500 characters in description
- ✅ Save changes to a mock backend
- ✅ Fully reactive using RxJS and Angular Services

---

## 📦 NPM Scripts

| Script                  | Description                         |
|--------------------------|-------------------------------------|
| `ng serve`               | Start Angular dev server            |
| `npm run start:backend`  | Start `json-server` mock backend    |
| `ng build`               | Build for production                |
| `ng test`                | Run unit tests                      |

---

## 🧪 Running Tests

To execute unit tests:

```bash
ng test
```

> ✅ Optional: Add Cypress or Protractor for end-to-end (E2E) testing.

---

## 🧰 Tools & Technologies Used

- Angular 17+
- TypeScript
- HTML5 / CSS3
- json-server
- RxJS
- Angular Material or Bootstrap (if used)

---

## 🔧 Sample Data (`db.json`)

```json
{
  "cards": [
    {
      "id": 1,
      "title": "Sample Card",
      "description": "This is a demo card description.",
      "imageUrl": "https://example.com/image.png"
    }
  ]
}
```

---

## 🧭 Deployment Guide

To generate a production build:

```bash
ng build
```

- Output will be in the `dist/` directory
- You can deploy it using Netlify, GitHub Pages, Firebase, Vercel, etc.

---

## ✨ UI Screenshots (Optional)

You can add screenshots to the `screenshots/` folder and reference them like this:

```markdown
![Homepage](screenshots/homepage.png)
![Edit Modal](screenshots/edit-modal.png)
```

---

## 🔖 License

This project was developed as part of an assignment for **Emplay Inc.**  
You may reuse or extend it for personal or educational purposes.

---

## 🙌 Contribution Guidelines

Contributions are welcome!

1. Fork the repository  
2. Create a new branch: `git checkout -b feature-name`  
3. Make your changes and commit: `git commit -m "Add feature"`  
4. Push to GitHub: `git push origin feature-name`  
5. Open a Pull Request 🚀

---

## 📬 Contact

For questions or suggestions, feel free to raise an issue in this repository.

---

> 💡 Thank you for checking out the Emplay Card App! Happy coding!
