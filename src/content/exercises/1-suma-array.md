---
title: 'Sumar números de un array'
description: 'Sumar dos números consecutivos en un array'
difficult: 'Fácil'
---


<div class="exercise-description">
La suma de dos números consecutivos de un array debe ser igual a 8.

#### Pruebas:
  * [1, 3, 6, 9]
  * [2, 6, 4, 1]
  * [5, 2, 4, 4]
</div>



```js
const suma = (array) => {
  for (let i = 0; i < array.length; i++) {
    if ((array[i] + array[i + 1]) === 8) {
      return true;
    }
  }
  return false;
}

console.log(suma([1, 3, 6, 9]))
console.log(suma([2, 6, 4, 1]))
console.log(suma([5, 2, 4, 4]))
```

