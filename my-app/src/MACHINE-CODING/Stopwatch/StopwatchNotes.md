# Stopwatch / Timer – Interview Notes

## 🔥 Why This Question Is Asked

This tests:

- Proper use of setInterval
- Cleanup handling
- useEffect behavior
- Avoiding memory leaks
- Understanding re-renders

---

## 🧠 Core Concept

We maintain:

- `time` → elapsed milliseconds
- `isRunning` → controls interval
- `intervalRef` → stores interval ID

Key idea:
Start interval when running.
Clear interval when paused or unmounted.

---

## 🏗 Architecture

### 1️⃣ App.jsx

Root wrapper

### 2️⃣ Stopwatch.jsx

- Manages state
- Handles start / pause / reset
- Formats time
- Implements cleanup inside useEffect

---

## ⏱ Interval Logic Explained

if (isRunning) {
intervalRef.current = setInterval(() => {
setTime(prev => prev + 10);
}, 10);
}

Cleanup:
return () => clearInterval(intervalRef.current);

Why useRef?
Because interval ID should persist across renders without causing re-render.

---

## 🌀 Time Complexity

O(1) per tick
State update every 10ms

---

## 🚀 Interview Follow-up Questions

Be ready for:

1. Why not store interval in state?
2. What happens if cleanup is missing?
3. How to implement countdown timer?
4. How to add lap feature?
5. How to improve accuracy?
   → Use Date.now() instead of incrementing time

---

## 🎯 Advanced Version (Product-Level)

- Add lap records
- Add keyboard shortcuts
- Use requestAnimationFrame
- Add countdown mode
- Persist timer in localStorage

---

## 💬 How To Explain In Interview

"I used useState to manage time and running state. I used useRef to store the interval ID so it persists across renders without triggering re-renders. I implemented cleanup in useEffect to prevent memory leaks. The timer updates every 10ms and formats the display into mm:ss:ms."

---

This implementation is clean, interview-ready, and demonstrates proper interval cleanup handling.
