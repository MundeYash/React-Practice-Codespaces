# Image Carousel – Interview Notes

## 🔥 Why This Question Is Asked

This tests:

- State management
- Index handling logic
- Edge case handling
- useEffect cleanup
- UI control patterns

---

## 🧠 Core Concept

Maintain a `currentIndex` state.

Navigation logic:

Next Slide:
(currentIndex + 1) % images.length

Previous Slide:
If index === 0 → go to last image
Else → index - 1

---

## 🏗 Architecture

### 1️⃣ App.jsx

- Passes image array
- Configures autoplay + interval

### 2️⃣ Carousel.jsx

- Maintains currentIndex state
- Handles next / prev navigation
- Handles dot navigation
- Implements autoplay using useEffect

---

## ⏱ Autoplay Logic

useEffect sets interval.
Cleanup function clears interval.

Important:
Always clear interval to avoid memory leaks.

---

## 🌀 Time Complexity

Navigation → O(1)
Rendering → O(N) for dots

---

## 🚀 Interview Follow-up Questions

Be ready for:

1. How to pause on hover?
2. How to add smooth sliding animation?
3. How to support swipe on mobile?
4. How to preload images?
5. How to make it accessible?

---

## 🎯 Advanced Version (Product Level)

- Add CSS transform translateX animation
- Add touch swipe support
- Add infinite loop illusion
- Add lazy loading
- Add keyboard arrow navigation

---

## 💬 How To Explain In Interview

"I used a currentIndex state to track the active image. Navigation is handled using modular arithmetic for seamless looping. Autoplay is implemented using useEffect with proper cleanup. The component is reusable because it accepts images and interval as props."

---

This version is clean, extensible, and production-ready for machine coding rounds.
