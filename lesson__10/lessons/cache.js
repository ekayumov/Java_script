//
// Кэширование
//
// Замыкания можно использовать для сохранения состояния
// и дальнейшей работы с ним.
//
// Реализуйте функцию cache, которая вернет функцию, возводящую
// число в степень и возвращающую результат.
// Функция должна запоминать аргументы, которые она уже получала
// и возвращать результат сразу, не вычисляя его повторно
//
// Пример:
//   const calculate = cache();
//
// calculate(3, 3);  // { value: 27,   fromCache: false }
// calculate(2, 10); // { value: 1024, fromCache: false }
// calculate(2, 10); // { value: 1024, fromCache: true  }
//

function cache() {
   const cached = {}
   function generateCacheKey(num, pow) {
     return `${num}_${pow}`
   }
   function getFromCache(num, pow) {
     return cached[generateCacheKey(num, pow)]
   }
   function power(num, pow) {
     const fromCache = getFromCache(num, pow)
     if (fromCache !== undefined) {
       return {
         value: fromCache,
         fromCache: true
       }
     }
     const result = Math.pow(num, pow)
     cached[generateCacheKey(num, pow)] = result
     return {
       value: result,
       fromCache: false
     }
   }
   return power
}

const calculate = cache()
