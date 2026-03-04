# Todo App – Implementation Notes

This document explains the architecture and important concepts used in the Todo App.

---

# 1️⃣ Problem Understanding

A Todo App requires:

- Add task
- Delete task
- Toggle complete
- Edit task
- Filter tasks
- Persist data

---

# 2️⃣ State Structure

Each todo object:

```
{
  id: string,
  text: string,
  completed: boolean
}
```

State variables:

```
const [todos, setTodos]
const [input, setInput]
const [filter, setFilter]
```

---

# 3️⃣ Adding Todo

- Validate input
- Create new object
- Use functional update:

```
setTodos(prev => [newTodo, ...prev])
```

Prevents stale state issues.

---

# 4️⃣ Toggle Logic

```
todos.map(todo =>
  todo.id === id
    ? {...todo, completed: !todo.completed}
    : todo
)
```

Immutable update is important.

---

# 5️⃣ Delete Logic

```
todos.filter(todo => todo.id !== id)
```

---

# 6️⃣ Edit Logic

Update specific item using map.

---

# 7️⃣ Filtering

Derived state using:

```
useMemo(() => { ... }, [todos, filter])
```

Improves performance.

---

# 8️⃣ LocalStorage Persistence

Load initial state from localStorage.
Save whenever todos change using useEffect.

---

# 9️⃣ Key Concepts

✔ Controlled input
✔ Immutable updates
✔ Derived state
✔ Functional setState
✔ Side effects with useEffect

---

# 🔟 Interview Talking Points

- Why use useMemo?
- Why functional updates?
- How to scale? (useReducer)
- How to optimize? (React.memo)
