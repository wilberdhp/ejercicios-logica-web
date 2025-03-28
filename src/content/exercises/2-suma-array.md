---
title: 'Sumar números de un array 2'
description: 'Sumar números no necesariamente consecutivos en un array'
difficult: 'Fácil'
---


<div class="exercise-description">
La suma de dos números no necesariamente consecutivos de un array debe ser 8

#### Pruebas:
  * [1, 3, 6, 9]
  * [2, 4, 4, 1]
  * [5, 2, 4, 4]
</div>



```js
const sumaArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    const num = i + 1;

    for (let j = num; j < array.length; j++) {
      if (array[i] + array[j] === 8) return true;
    }
  }
  return false;
}

console.log(sumaArray([1, 3, 6, 9]))
console.log(sumaArray([2, 4, 4, 1]))
console.log(sumaArray([5, 2, 4, 4]))
```

