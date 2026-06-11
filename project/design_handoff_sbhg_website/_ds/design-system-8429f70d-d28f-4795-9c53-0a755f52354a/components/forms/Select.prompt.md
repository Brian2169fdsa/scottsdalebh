Labeled dropdown that matches Input — white field, gold chevron, gold focus ring.

```jsx
<Select label="Insurance Provider" placeholder="Select your provider"
  options={["Aetna", "Cigna", "BlueCross", "United"]} required onDark />
```

`options` accepts strings or `{value,label}`. Pass `onDark` for navy form sections.
