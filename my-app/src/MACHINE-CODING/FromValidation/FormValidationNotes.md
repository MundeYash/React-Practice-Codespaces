# Form Validation – Implementation Notes

---

# 1️⃣ Problem Understanding

Validate user input before submission.

Types:

- Required fields
- Email format
- Password rules
- Confirm password

---

# 2️⃣ Controlled Inputs

```
value={form.email}
onChange={handleChange}
```

State:

```
const [form, setForm]
const [errors, setErrors]
```

---

# 3️⃣ Validation Strategy

Option 1: On Submit
Option 2: On Blur
Option 3: On Change (real-time)

---

# 4️⃣ Validation Function

```
function validate(values) {
  const errors = {}

  if (!values.email) errors.email = "Email required"
  if (!/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Invalid email"

  return errors
}
```

---

# 5️⃣ Submit Flow

```
const formErrors = validate(form)
setErrors(formErrors)

if (Object.keys(formErrors).length === 0) {
  submit()
}
```

---

# 6️⃣ UX Best Practices

✔ Show error messages clearly
✔ Disable submit if invalid
✔ Highlight invalid fields
✔ Show success state

---

# 7️⃣ Advanced Topics

- Custom hook: useForm
- Libraries: Formik / React Hook Form
- Schema validation (Yup / Zod)

---

# 8️⃣ Interview Talking Points

- Controlled vs uncontrolled inputs
- How to scale large forms
- Performance optimization
