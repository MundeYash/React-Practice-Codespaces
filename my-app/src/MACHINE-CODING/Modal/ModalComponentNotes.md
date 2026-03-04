# Modal Component – Implementation Notes

---

# 1️⃣ Problem Understanding

A Modal is an overlay component that appears above content.

Used for:

- Confirmations
- Forms
- Alerts

---

# 2️⃣ Core Features

✔ Overlay background
✔ Close on outside click
✔ Close on ESC key
✔ Reusable & configurable

---

# 3️⃣ Props Design

```
isOpen
 onClose
 children
```

Optional:

```
title
 showCloseIcon
```

---

# 4️⃣ Conditional Rendering

```
if (!isOpen) return null
```

---

# 5️⃣ Close Handling

- Overlay click → onClose()
- ESC key using useEffect

Example logic:

```
useEffect(() => {
  const handler = (e) => {
    if (e.key === "Escape") onClose()
  }
  window.addEventListener("keydown", handler)
  return () => window.removeEventListener("keydown", handler)
}, [])
```

---

# 6️⃣ Portals (Important)

Use React Portal to render modal outside root hierarchy.

Prevents z-index and overflow issues.

---

# 7️⃣ Accessibility

✔ Focus trap
✔ ARIA roles
✔ Keyboard navigation

---

# 8️⃣ Interview Talking Points

- Why use Portal?
- How to prevent background scroll?
- How to make modal fully accessible?
