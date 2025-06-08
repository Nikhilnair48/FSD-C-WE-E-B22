console.log('Log 1: Script start');
setTimeout(() => {
  console.log('Log 4: setTimeout callback');
}, 0);
Promise.resolve().then(() => {
  console.log('Log 3: Promise.then callback (microtask)');
});
console.log('Log 2: Script end');