# Custom Hook Implementation – Interview Notes

## 🔥 Why This Question Is Asked

This tests:

- Understanding of hooks lifecycle
- Reusability of logic
- Separation of concerns
- Side-effect management
- Cleanup handling

---

# 🧠 useDebounce Hook

## Purpose

Delay updating a value until user stops typing.
Prevents unnecessary API calls.

## Core Logic

- useEffect sets a timeout
- Cleanup clears previous timeout
- Returns debounced value

Why cleanup?
Without cleanup → multiple timers will run.

Time Complexity: O(1)

---

# 🌐 useFetch Hook

## Purpose

Reusable data fetching hook.
Handles:

- loading
- error
- data

## Core Logic

- Trigger fetch inside useEffect when URL changes
- Use async function inside effect
- Handle errors properly
- Manage loading state

---

# 🏗 Architecture

App.jsx:

- Maintains input query
- Debounces it
- Passes debounced query to useFetch

Flow:
User types → query updates → debounce waits → URL changes → fetch runs

---

# 🚀 Interview Follow-up Questions

1. Why not debounce inside useFetch?
2. How to cancel previous API request?
   → Use AbortController
3. How to make useFetch more generic?
4. How to add caching?
5. How to handle race conditions?

---

# 🎯 Advanced Version

useFetch improvements:

- AbortController support
- Retry mechanism
- Manual refetch function
- Caching using Map

useDebounce improvements:

- Support leading + trailing execution
- Support callback debounce

---

# 💬 How To Explain In Interview

"I separated reusable logic into custom hooks. useDebounce delays value updates using setTimeout and cleanup. useFetch abstracts API logic and manages loading, error, and data states. This keeps components clean and improves reusability."

---

This implementation demonstrates strong conceptual understanding of React hooks and side-effect management.
