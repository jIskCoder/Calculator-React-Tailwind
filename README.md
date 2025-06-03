# Calculator - React + Tailwind Themed Calculator

Calculator is a modern, responsive calculator with multiple theme support, built using React and Tailwind CSS.

---

## 🚀 Features

- 🧮 Basic arithmetic operations (addition, subtraction, multiplication, division)
- 🖱️ Button-based interface
- 🌙 Toggle between three visual themes (blue, white, and purple)
- 📱 Responsive design for desktop and mobile
- ♻️ Extra functions: delete, reset, evaluate expression
- 🎨 Dynamic theming system using Context API

---

## 🛠️ Technologies Used

- **React** – UI library for building interfaces
- **Tailwind CSS** – Utility-first CSS framework
- **Context API** – Global state management (current theme)
- **CSS Custom Properties** – Color palette via custom variables

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Koxone/Calculator-React-Tailwind.git
   cd Calculator-React-Tailwind
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   ```
   http://localhost:5173
   ```

---

## 🧩 Project Structure

```
Calculator/
├── components/
│   └── ui/
│       ├── containers/           # Main containers (Header, Main, Buttons, etc.)
│       ├── buttons/              # Number and function buttons
│       └── logo/                 # Main logo
├── context/                      # ThemeContext with ThemeProvider
├── shared/                       # Themes file (themes.js)
├── App.jsx                       # Root component
├── main.jsx                      # ReactDOM entry point
├── index.css                     # Base styles and Tailwind
└── public/                       # Static assets
```

---

## 🎨 Themes

Each theme applies different styles via Tailwind classes and CSS variables (`--color-*`). They are toggled using a button that updates the global theme context.

- Blue (default)
- White
- Purple

---

## ✨ Credits

Developed with ❤️ by [Koxone](https://github.com/Koxone)

---

## 📄 License

This project is licensed under the MIT License.