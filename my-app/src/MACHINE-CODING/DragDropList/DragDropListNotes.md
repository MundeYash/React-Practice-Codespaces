# Drag and Drop List – Interview Notes

## 🔥 Why This Question Is Asked

This tests:

- Understanding of DOM drag events
- State mutation handling
- Array reordering logic
- Clean component separation
- UI responsiveness

---

## 🧠 Core Concept

We use native HTML5 Drag and Drop API:

- onDragStart
- onDragOver
- onDrop

Key logic:

1. Store dragged item index
2. Remove item from original position
3. Insert it at drop position

---

## 🏗 Architecture

### 1️⃣ App.jsx

Root wrapper

### 2️⃣ DragDropList.jsx

- Maintains items array
- Handles drag logic
- Updates state after drop

### 3️⃣ DraggableItem.jsx

- Reusable component
- Receives handlers via props

---

## 🌀 Reordering Logic Explained

const updatedItems = [...items]
const draggedItem = updatedItems[draggedIndex]
updatedItems.splice(draggedIndex, 1)
updatedItems.splice(dropIndex, 0, draggedItem)

Time Complexity: O(N)

---

## 🚀 Interview Follow-up Questions

Be ready for:

1. How to support drag handle only?
2. How to animate movement?
3. How to persist order in backend?
4. How to optimize for large lists?
5. How to support horizontal drag?

---

## 🎯 Advanced Version (Product Companies Expectation)

- Add visual placeholder while dragging
- Highlight drop target
- Add keyboard accessibility
- Use React DnD library
- Add smooth animation with CSS transform

---

## 💬 How To Explain In Interview

"I used native HTML5 drag-and-drop events. On drag start, I store the index. On drop, I reorder the array using splice and update state. The UI re-renders automatically because of React state change. The solution runs in O(N) time and is easily extensible."

---

This version is clean, scalable, and interview-ready.
