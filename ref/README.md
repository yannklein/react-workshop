# React workshop
Let's build an app listing dev-friendly cafes in Tokyo ☕️


## Step 1 - React basic usage

#### In the HTML:

```html
  <div id="react-root"></div>
  <script type="module" src="/src/main.jsx"></script>
```

#### In the JSX:

```js
  import * as ReactDOM from 'react-dom/client';

  const rootDiv = document.querySelector("#react-root")
  const root = ReactDOM.createRoot(rootDiv);
  root.render("Hi from React!")
```