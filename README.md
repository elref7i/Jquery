This guide provides an overview of how to replace common jQuery methods with vanilla JavaScript equivalents for DOM manipulations, animations, and event handling.

### 1. DOM Selection

- **jQuery**: `$('selector')`
- **JavaScript**: `document.querySelectorAll('selector')`

To select multiple elements in vanilla JavaScript:
```js
document.querySelectorAll('selector');  // Selects all elements matching the selector
```

### 2. Event Handling

- **jQuery**: `$(element).on('click', function() { ... })`
- **JavaScript**:
```js
element.addEventListener('click', function() { ... });
```

Example:
```js
document.querySelector('selector').addEventListener('click', function() {
  // Your code here
});
```

### 3. Show/Hide Effects

- **jQuery**: `$(element).hide(t)`, `$(element).show(t)`, `$(element).toggle(t)`
- **JavaScript**:
```js
element.style.display = 'none';  // Hide
element.style.display = 'block'; // Show
```

For toggle:
```js
if (element.style.display === 'none') {
  element.style.display = 'block';
} else {
  element.style.display = 'none';
}
```

### 4. Sliding Effects (Up/Down)

For vertical sliding effects (`slideUp`, `slideDown`), manually animate the height property in JavaScript:
```js
element.style.height = '0';  // For sliding up
element.style.height = 'auto'; // For sliding down
```

### 5. Fading Effects

- **jQuery**: `fadeIn`, `fadeOut`, `fadeToggle`, `fadeTo`
- **JavaScript**: Manipulate the `opacity` and `transition` properties.
```js
element.style.transition = 'opacity 0.5s';
element.style.opacity = '0';  // fade out
element.style.opacity = '1';  // fade in
```

### 6. Animate Method

For animations in JavaScript:
- **jQuery**: `animate({ width: '100%' })`
- **JavaScript**:
```js
element.style.transition = 'width 2s';
element.style.width = '100%';
```

### 7. DOM Manipulation Methods

For various jQuery setter/getter methods:
- **html()**: `element.innerHTML`
- **text()**: `element.innerText`
- **val()**: `element.value`
- **attr()**: `element.getAttribute('attr')` / `element.setAttribute('attr', 'value')`
- **css()**: `element.style.property = value`

For adding/removing classes:
- **jQuery**: `addClass()`, `removeClass()`, `toggleClass()`
- **JavaScript**:
```js
element.classList.add('className');
element.classList.remove('className');
element.classList.toggle('className');
```

### 8. Dimensions Methods

For width and height:
- **jQuery**: `width()`, `innerWidth()`, `outerWidth()`
- **JavaScript**:
```js
element.clientWidth; // width + padding
element.offsetWidth; // width + padding + border
```

### Scroll Handling

For scroll event and `scrollTop` in JavaScript:
- **jQuery**: `$(window).on('scroll', function() { ... })`
- **JavaScript**:
```js
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    // Do something
  }
});
```

### Example for Scroll to Top Button

To smoothly scroll back to the top:
```js
document.querySelector('.icon').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

### DOM Traversing

For traversing the DOM in JavaScript:
- **parent()**: `element.parentElement`
- **children()**: `element.children`
- **siblings()**: Filter through child elements (JavaScript does not have a `siblings()` method directly):
```js
Array.from(element.parentElement.children).filter(child => child !== element);
```

---


  
## Demo
You can check out the live demo of the project [here](https://elref7i.github.io/Jquery/).
