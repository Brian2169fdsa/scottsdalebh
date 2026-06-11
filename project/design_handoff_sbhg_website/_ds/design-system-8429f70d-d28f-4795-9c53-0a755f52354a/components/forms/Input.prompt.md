Labeled text input — white field, 8px radius, gold focus ring. Used heavily in the Verify Insurance form.

```jsx
<Input label="Full Name" placeholder="Jane Doe" required onDark />
<Input label="Email" type="email" helper="We never share your information." />
```

`onDark` makes the label white for navy form sections. Forwards all native input props (`type`, `placeholder`, `value`, `onChange`).
