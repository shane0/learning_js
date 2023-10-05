---
tags:
  - closures 
  - bard 
---
# closures bard

closure is a bad name that means nothing and confuses people

a better name is nested function, or enclosed functio

| Term | Definition |
|---|---|
| Closure | A closure is a function that has access to the variables in its LEXICAL scope, even after the function has returned. |
| Lexical scope | The LEXICAL scope of a variable is the place in the code where the variable is declared. |
| Example | Consider the following code:

```js
function makeCounter() {
  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }

  return increment;
}
```

The `makeCounter()` function declares a variable called `counter`. The `increment()` function is declared inside the `makeCounter()` function, so it has access to the `counter` variable. Even though the `makeCounter()` function returns the `increment()` function, the `counter` variable is still in scope. This means that the `increment()` function can still access the `counter` variable even after the `makeCounter()` function has returned.

| Term | Definition |
|---|---|
| Benefits | Closures can be used to implement things like callbacks, promises, and event handlers. They can also be used to create reusable code that can be used in different contexts. |
| Drawbacks | Closures can make code more difficult to understand and debug. They can also make code less performant, as they can create additional scope chains. |

I hope this helps! Let me know if you have any other questions.
