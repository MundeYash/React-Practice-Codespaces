# Pagination (Reusable Component) – Implementation Notes

---

# 1️⃣ Problem Understanding

Pagination divides large data into pages.

Goals:

- Reusable component
- Configurable page size
- Controlled from parent

---

# 2️⃣ Props Design

Reusable Pagination should accept:

```
currentPage
 totalPages
 onPageChange
```

Optional:

```
pageSize
 totalItems
```

---

# 3️⃣ Page Calculation

```
const totalPages = Math.ceil(totalItems / pageSize)
```

---

# 4️⃣ Page Change Logic

```
onClick={() => onPageChange(pageNumber)}
```

Keep state in parent for reusability.

---

# 5️⃣ UI Features

✔ Previous button
✔ Next button
✔ Page numbers
✔ Disable at boundaries

---

# 6️⃣ Optimization

- Use React.memo
- Avoid unnecessary re-renders

---

# 7️⃣ Server-side vs Client-side

Client-side:

- Slice array locally

Server-side:

- Fetch page from API

---

# 8️⃣ Interview Talking Points

- How to handle 10k+ pages?
- Add "..." collapsing logic
- Difference between pagination & infinite scroll
