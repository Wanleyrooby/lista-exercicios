const prompt = require('prompt-sync')();

function memoize(fn) {

  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    
    if (cache.has(key)) {
      return cache.get(key);
    }

    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}


function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}


const fibMemo = memoize(fib);


console.time('fib(40)');
console.log(fibMemo(40));      
console.timeEnd('fib(40)');

console.time('fib(40) again');
console.log(fibMemo(40));      
console.timeEnd('fib(40) again'); 
