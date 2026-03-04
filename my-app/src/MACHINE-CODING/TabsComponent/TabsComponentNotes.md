# Tabs Component – Machine Coding Interview Guide

This is a very common frontend machine coding question used to test:

- State management fundamentals
- Component reusability
- Conditional rendering
- Accessibility awareness
- Clean API design

---

# 1️⃣ Problem Statement

Build a reusable Tabs component that:

• Shows tab headers
• Switches content on click
• Maintains active state
• Supports keyboard navigation
• Is reusable across the app

---

# 2️⃣ Component API Design (Very Important in Interview)

We designed the component like this:

Tabs Props:

- tabs → array of tab objects
- defaultActiveId → optional default selected tab

Each tab object contains:

{
id: string,
label: string,
content: JSX
}

Why this design?

✔ Makes component reusable
✔ Parent controls the data
✔ Flexible content (can pass any JSX)
✔ Clean separation of concerns

---

# 3️⃣ State Management Strategy

We use:

const [activeId, setActiveId] = useState()

Why store id instead of index?

✔ More stable if tabs reorder
✔ Cleaner comparison logic

Interview Tip:
You can mention an optimization:
Store activeIndex instead to reduce O(n) find() cost.

---

# 4️⃣ Rendering Tab Headers

We map over the tabs array:

- Render button for each tab
- Add unique key
- Attach click handler
- Apply conditional styling

Important Concept:
Conditional classNames based on activeId.

---

# 5️⃣ Conditional Content Rendering

We render only active tab content:

Find tab using activeId and render its content.

This ensures only one tab panel is visible.

---

# 6️⃣ Keyboard Navigation (Advanced Touch)

We implemented:

ArrowRight → next tab
ArrowLeft → previous tab

Why this is impressive in interviews?

✔ Shows accessibility awareness
✔ Shows deeper understanding
✔ Moves you above average candidates

---

# 7️⃣ Accessibility (Interview Gold Point)

We added:

role="tablist"
role="tab"
role="tabpanel"
aria-selected

If interviewer asks improvement:

- Add focus management
- Add aria-controls
- Add id mapping

---

# 8️⃣ Edge Cases

• Empty tabs array
• Invalid defaultActiveId
• Dynamic tabs update

We handled empty tabs with fallback UI.

---

# 9️⃣ Performance Discussion

Current complexity:

Rendering headers → O(n)
Finding active tab → O(n)

Optimization options:

- Store activeIndex
- Memoize content
- Lazy load tab content

---

# 🔟 Controlled vs Uncontrolled Version

Current version → Uncontrolled (internal state)

Controlled version would accept:

activeId
onChange

That makes it production-ready.

---

# ⭐ Senior-Level Improvements

• Add animation (Framer Motion)
• Add vertical orientation
• Add lazy rendering
• Extract useTabs custom hook
• Add dynamic tab add/remove support

---

# 🧠 How to Explain in Interview (Best Structure)

1. Explain API design
2. Explain state strategy
3. Explain rendering logic
4. Talk about accessibility
5. Suggest improvements

This structured explanation creates strong impression.

---

# What Interviewers Test Here

✔ Understanding of React state
✔ Mapping & keys
✔ Conditional rendering
✔ Clean component design
✔ Accessibility basics
✔ Scalability thinking

Even though simple, this question filters many candidates.
