Labelled single-line text field with hint, error and success messages.

```jsx
<Input label="E-posta" type="email" required hint="İş adresinizi kullanın." />
<Input label="Şirket" error="Şirket adı boş bırakılamaz." />
```

Error = 2px border + icon + text, linked via aria-describedby.
