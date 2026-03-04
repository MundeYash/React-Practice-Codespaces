# Accordion Component – Machine Coding Interview Guide

Accordion is a common UI question used to test:

• State management
• Conditional rendering
• Component reusability
• Clean toggle logic
• Basic accessibility understanding

---

# 1️⃣ Problem Statement

Build a reusable Accordion component that:

- Expands/collapses content
- Toggles on click
- Optionally allows multiple open items
- Is reusable across application

---

# 2️⃣ Component API Design

Props used:

- items → array of objects
- allowMultiple → boolean

Each item contains:

{
title: string,
content: JSX
}

Why this design?

✔ Flexible
✔ Reusable
✔ Parent controls data
✔ Clean separation of concerns

---

# 3️⃣ State Management Strategy

We used:

const [activeIndexes, setActiveIndexes] = useState([])

Why array?

Because:

- If allowMultiple = true → multiple items open
- If allowMultiple = false → only one open

This makes component scalable.

---

# 4️⃣ Toggle Logic (Important Interview Part)

Case 1: allowMultiple = true

If index already exists → remove it
Else → add it

Case 2: allowMultiple = false

If clicked item is open → close it
Else → open only that one

This tests logical thinking ability.

---

# 5️⃣ Conditional Rendering

We render content only when:

activeIndexes.includes(index)

This ensures minimal DOM rendering.

---

# 6️⃣ Edge Cases

• Empty items array
• Rapid clicks
• Large dataset

We handled empty array with fallback UI.

---

# 7️⃣ Performance Discussion

Rendering → O(n)
Checking active → O(n) includes

Optimization:

- Use Set instead of array for O(1) lookup
- Memoize items

---

# 8️⃣ Accessibility Improvements (Mention in Interview)

Add:

- aria-expanded
- aria-controls
- Proper button semantics
- Keyboard support (Enter / Space)

Accessibility discussion gives bonus points.

---

# 9️⃣ Controlled vs Uncontrolled Version

Current version → Uncontrolled (internal state)

Controlled version would accept:

activeIndexes
onChange

This makes it enterprise-ready.

---

# 🔟 Senior-Level Improvements

• Add smooth height animation
• Use CSS transitions
• Use React Transition Group
• Add keyboard navigation
• Add nested accordion support

---

# 🧠 How to Explain in Interview

1. Explain API design
2. Explain state structure choice
3. Explain toggle logic clearly
4. Discuss performance
5. Suggest improvements

Structure matters a lot in machine coding rounds.

---

# What Interviewers Evaluate Here

✔ State handling
✔ Conditional rendering
✔ Clean toggle logic
✔ Reusability
✔ Edge case handling
✔ Scalability thinking

Even though simple, this question exposes fundamentals very clearly.
