```markdown
# Emplay Card App 🎴

An Angular-based card editor and listing web application for the Emplay assignment. It allows users to view, edit, and save card data using a mock backend powered by `json-server`.

---

## 📁 Project Structure

```

emplay-card-app/
├── backend/           # JSON Server mock backend
│   └── db.json        # Mock database file
├── src/               # Angular source code
│   └── app/           # Core application logic
├── package.json       # Project dependencies

````

---

## ✅ Prerequisites

- Node.js (v18+ recommended)
- Angular CLI

Install Angular CLI globally (if not already installed):

```bash
npm install -g @angular/cli
````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/emplay-card-app.git
cd emplay-card-app
```

### 2. Install Dependencies

```bash
npm install
```

---

## ▶️ Running the Application

This project includes a **frontend** (Angular) and a **mock backend** (`json-server`).

### ➤ Start Frontend

```bash
ng serve
```

* Runs at: `http://localhost:4200/`
* Live reload enabled

### ➤ Start Backend

```bash
npm run start:backend
```

* Runs at: `http://localhost:3000/`
* Reads/writes data from `backend/db.json`

---

## 🧩 Features

* View a list of cards with images and descriptions
* Edit card data using a modal dialog
* Save changes to a mock server
* Form validation including:

  * Required fields
  * Maximum 500 characters in the description

---

## 📦 Available NPM Scripts

| Command                 | Purpose                   |
| ----------------------- | ------------------------- |
| `ng serve`              | Run the Angular frontend  |
| `npm run start:backend` | Start json-server backend |
| `ng build`              | Create a production build |
| `ng test`               | Run unit tests            |

---

## 🧪 Running Tests

```bash
ng test
```

> Optional: Set up e2e testing using Cypress or Protractor if needed.

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

## 🧰 Tools Used

* Angular 17+
* TypeScript
* json-server
* HTML5 / CSS3

---

## 🧭 Deployment Notes

To build and deploy:

```bash
ng build
```

Output will be in the `dist/` directory.

---

## 📄 License

This project was created as part of an assignment for **Emplay**.
Feel free to reuse or extend it for learning or demonstration purposes.

```

---

Let me know if you want to add badges, GitHub Pages deployment steps, or contribution guidelines too.
```
