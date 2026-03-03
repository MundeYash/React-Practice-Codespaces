# Infinite Scroll – Detailed Explanation Notes

This document explains the Infinite Scroll implementation step by step.

---

# 1️⃣ High Level Concept

Infinite Scroll means:

- Instead of showing page numbers
- We automatically load more data
- When the user scrolls near the bottom

The main idea:

1. Keep track of current page
2. Fetch data page by page
3. Append new data to existing list
4. Stop when no more data is available

---

# 2️⃣ State Variables Explanation

```js
const [items, setItems] = useState([]);
```

Stores all fetched items.
We APPEND new data here instead of replacing it.

```js
const [page, setPage] = useState(1);
```

Tracks current page number.
Whenever this changes → new API call is triggered.

```js
const [loading, setLoading] = useState(false);
```

Prevents multiple API calls at the same time.
Improves UX by showing loader.

```js
const [hasMore, setHasMore] = useState(true);
```

Determines whether more data is available.
If false → stop fetching.

```js
const LIMIT = 10;
```

Number of items per page.
Used to calculate pagination offset.

---

# 3️⃣ useEffect for Fetching Data

```js
useEffect(() => {
  fetchData(page);
}, [page]);
```

What this does:

- Runs whenever `page` changes
- Calls API for that page

Why dependency is `[page]`?
Because page change should trigger new data fetch.

---

# 4️⃣ fetchData Function

```js
const fetchData = async (pageNumber) => {
```

Step-by-step:

### ✅ Step 1: Prevent duplicate calls

```js
if (loading) return;
```

If already loading → don’t call API again.

---

### ✅ Step 2: Enable loading state

```js
setLoading(true);
```

---

### ✅ Step 3: Calculate skip value

```js
const skip = (pageNumber - 1) * LIMIT;
```

Example:

- Page 1 → skip 0
- Page 2 → skip 10
- Page 3 → skip 20

Used for server-side pagination.

---

### ✅ Step 4: Fetch API

```js
const response = await fetch(...);
const data = await response.json();
```

---

### ✅ Step 5: Append data

```js
setItems((prev) => [...prev, ...data.products]);
```

Important:

- We do NOT replace previous items
- We append new items

This is core concept of infinite scroll.

---

### ✅ Step 6: Stop when no more data

```js
if (items.length + data.products.length >= data.total) {
  setHasMore(false);
}
```

If total fetched items >= total available items → stop fetching.

---

### ✅ Step 7: Disable loading

```js
setLoading(false);
```

---

# 5️⃣ Scroll Detection Logic

```js
const handleScroll = useCallback(() => {
```

We wrap inside `useCallback` to:

- Prevent unnecessary re-creation
- Avoid repeated event binding

---

## Scroll Position Calculation

```js
const scrollTop = window.scrollY;
const windowHeight = window.innerHeight;
const fullHeight = document.documentElement.scrollHeight;
```

Meaning:

- scrollTop → how much user has scrolled
- windowHeight → visible screen height
- fullHeight → total page height

---

## Bottom Detection Condition

```js
if (scrollTop + windowHeight >= fullHeight - 100)
```

Explanation:

- If user is within 100px of bottom
- Trigger next page

---

## Increase Page

```js
setPage((prev) => prev + 1);
```

This triggers:

1. page update
2. useEffect runs
3. fetchData executes
4. new data appended

---

# 6️⃣ Attaching Scroll Listener

```js
useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [handleScroll]);
```

Why cleanup?
To prevent:

- Memory leaks
- Duplicate event listeners

Very important interview point.

---

# 7️⃣ Rendering Logic

```js
{items.map(...) }
```

Displays all items.

```js
{
  loading && <p>Loading...</p>;
}
```

Shows loader during API call.

```js
{
  !hasMore && <p>No more items</p>;
}
```

Stops user expectation when data ends.

---

# 8️⃣ Important Concepts Used

### ✅ Controlled Pagination State

Page state drives data fetching.

### ✅ Functional State Updates

```js
setItems((prev) => [...prev, ...newData]);
```

Prevents stale state issues.

### ✅ useCallback

Prevents unnecessary function recreation.

### ✅ Event Cleanup

Prevents memory leaks.

### ✅ Guard Conditions

- `if (loading) return`
- `if (!hasMore) return`

Prevents duplicate API calls.

---

# 9️⃣ Common Interview Follow-Up Questions

### Q: What are problems with scroll event?

- Fires too frequently
- Performance issues

### Better Solution?

Use **Intersection Observer API**.

---

### Q: How to optimize for 10,000+ items?

Use:

- List virtualization (react-window)
- Windowing technique

---

### Q: How to cancel API request?

Use:

- AbortController

---

# 🔟 Summary

This implementation demonstrates:

✔ Server-side pagination
✔ Infinite scroll logic
✔ Scroll detection
✔ Proper cleanup
✔ Preventing duplicate calls
✔ Loading & end state handling

This is considered a strong product-level implementation for frontend interviews.

---

If needed, this can be upgraded to:

- Intersection Observer version
- Virtualized list version
- Debounced scroll version
- Fully production-grade implementation
