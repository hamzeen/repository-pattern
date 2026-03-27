# recipes app

Repository Pattern with Vue.js frontend.

## Vue.js

Vue.js follows the MVVM (Model–View–ViewModel) pattern:

- Model → your state (refs, reactive, Pinia, API data)
- View → template (HTML)
- ViewModel → Vue instance / Composition API (binds model ↔ view)

Vue = MVVM with reactive data binding

### Example (ties it together)

```js
<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0);        // state ref
const inputEl = ref(null);   // DOM ref

onMounted(() => {
  console.log(count.value);      // state
  inputEl.value.focus();         // DOM
});
</script>

<template>
  <input ref="inputEl" />
  <button @click="count++">{{ count }}</button>
</template>
```

#### Senior mental model

- ref() → just a reactive box.
- Template ref="x" → Vue fills that box with DOM/component

## 1. Options API vs Composition API

Options API mainly structures component options.
Composition API → organizes code by feature/concern (inside a component and across components via composables)

### 1.1. Basic reactive state (inside a component)

```js
<script setup>
// ++++ this
import { ref, computed } from 'vue'

const count = ref(0)

const double = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }} ({{ double }})
  </button>
</template>
```

### 1.2. Reusable composable (shared logic)

```js
// useCounter.js
import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  return { count, increment };
}
```

## 2. Frameworks Timeline

| Framework | Release Year |
| --------- | ------------ |
| Next.js   | 2016         |
| Nuxt.js   | 2017         |

👉 So Next.js came first.

🔁 Was there influence?

Yes — Nuxt.js was directly inspired by Next.js.
Both frameworks share the same core ideas:

- File-based routing (pages/ → routes)
- Server-side rendering (SSR)
- Static site generation (SSG)
- Convention over configuration
- Hybrid rendering (SSR + CSR)

## 3. Session

| Concept   | Responsibility |
| --------- | -------------- |
| Vue Query | Server state   |
| Pinia     | Client state   |

## 4. Axios Interceptor - JWT

```js
const PUBLIC_ROUTES = ["/login", "/register"];

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  const isPublic = PUBLIC_ROUTES.some((route) => config.url?.includes(route));

  if (!isPublic && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
```

## 5. Vanilla JS

### Structured Clone (JavaScript)

structuredClone() is a built-in API to deep copy data safely.

```js
const original = { user: { name: "John" } };
const copy = structuredClone(original);
copy.user.name = "Jane";

console.log(original.user.name); // still 'John'
```

What it does well:

- Deep clones objects, arrays, maps, sets
- Handles nested structures
- Preserves types (unlike JSON tricks)

### Reduce

```js
const add = (a, b) => a + b;
const mult = (a, b) => a * b;
const sub = (a, b) => a - b;

const operations = [
  [add, 3],
  [mult, 2],
  [sub, 1],
];

const result = operations.reduce((acc, [fn, ...args]) => {
  return fn(acc, ...args);
}, 0);

console.log(result); // 5: (0 + 3) * 2 - 1
```

```js
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;

const operations = [
  [add, 1, 2],
  [mult, 2, 3],
  [sub, 5, 4],
];

const result = operations.reduce((acc, [fn, ...args]) => {
  return acc + fn(...args);
}, 0);

console.log(result); // 10
```

### UUID

```js
const id = crypto.randomUUID();
console.log(id);
```

```sh
Example output:
"36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

Cashing
| Layer | Purpose |
|-----------------|---------------------|
| In-memory | fastest, ephemeral |
| Storage | persistence |
| HTTP/CDN | network-level |
| Service Worker | offline + control |
| Query libs | API caching |
| Build cache | asset versioning |
