“I will create a controlled input.
I’ll store the search term in state.
Then I’ll debounce the API call using setTimeout inside useEffect.
If the user types again before timeout finishes, I’ll clear previous timeout.
This prevents unnecessary API calls.”

# Debounced Search / Autocomplete – Implementation Notes

---

# 1️⃣ Problem Understanding

We want to:

- Trigger API while typing
- Avoid calling API on every keystroke
- Show results

Solution: Debouncing.

---

# 2️⃣ State Variables

```
const [query, setQuery]
const [results, setResults]
const [loading, setLoading]
```

---

# 3️⃣ Debounce Logic

Inside useEffect:

```
const timer = setTimeout(() => {
  fetchData(query);
}, 500);

return () => clearTimeout(timer);
```

Explanation:

- Wait 500ms after user stops typing
- If user types again → cancel previous timer

---

# 4️⃣ API Fetching

- Set loading true
- Fetch data
- Store results
- Set loading false

---

# 5️⃣ Why Cleanup is Important?

Without clearTimeout:

- Multiple API calls
- Performance issues

---

# 6️⃣ Controlled Input

```
value={query}
onChange={e => setQuery(e.target.value)}
```

---

# 7️⃣ Key Concepts

✔ Debouncing
✔ useEffect side effects
✔ Cleanup function
✔ Async API handling
✔ Loading & empty states

---

# 8️⃣ Interview Talking Points

- Difference between debounce & throttle
- How to cancel API request (AbortController)
- How to extract useDebounce custom hook
