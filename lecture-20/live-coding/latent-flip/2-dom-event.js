console.log("Script Start");
const btn = document.querySelector('button');
btn.addEventListener('click', function handleClick() {
  console.log("Button Clicked!");
});
console.log("Script End. Event listener attached.");