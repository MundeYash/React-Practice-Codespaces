# Theme Switcher (Context API) – Machine Coding Interview Guide

This question tests:

• Global state management
• Context API fundamentals
• Avoiding prop drilling
• Clean component architecture
• Separation of concerns

---

# 1️⃣ Problem Statement

Build a Theme Switcher that:

- Toggles between Light and Dark mode
- Applies theme globally
- Avoids prop drilling
- Uses Context API

---

# 2️⃣ Why Context API?

Without Context:

App → Header → Button → Content

You would pass theme & toggle through props (prop drilling).

Context allows:

✔ Global access
✔ Cleaner architecture
✔ Better scalability

---

# 3️⃣ Architecture Overview

Files:

1. ThemeContext.jsx
2. ThemeToggle.jsx
3. App.jsx
4. styles.css

ThemeProvider wraps entire app.

---

# 4️⃣ Creating Context

const ThemeContext = createContext();

Provider holds:

- theme state
- toggleTheme function

These are passed via value prop.

---

# 5️⃣ Custom Hook (Important Interview Point)

export const useTheme = () => useContext(ThemeContext);

Why?

✔ Cleaner imports
✔ Better abstraction
✔ Industry best practice

---

# 6️⃣ Theme Toggle Logic

const toggleTheme = () => {
setTheme(prev => prev === "light" ? "dark" : "light")
}

Functional update prevents stale state issues.

---

# 7️⃣ Applying Theme Globally

We add dynamic class:

className={`app-container ${theme}`}

CSS handles styling.

Separation of logic and styling is important.

---

# 8️⃣ Performance Discussion

Context re-renders all consumers when value changes.

Optimization options:

- Memoize value
- Split contexts
- UseReducer for complex state

---

# 9️⃣ Controlled vs Scalable Version

Improvements:

• Persist theme in localStorage
• Detect system theme (prefers-color-scheme)
• Memoize provider value
• Add multiple themes

---

# 🔟 How to Explain in Interview

1. Start with prop drilling problem
2. Explain why Context solves it
3. Walk through Provider design
4. Show custom hook
5. Discuss scalability

Structured explanation impresses interviewers.

---

# What Interviewers Evaluate

✔ Understanding of Context API
✔ Global state design
✔ Clean architecture
✔ Re-render awareness
✔ Scalability thinking

This is a very common mid-level frontend interview question.
