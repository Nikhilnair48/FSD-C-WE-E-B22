const btn = document.getElementById('testBtn');
if (btn) {
  function buttonClicked() {
    console.log("Button was clicked! Event handler callback executed.");
  }
  btn.addEventListener('click', buttonClicked); // 'buttonClicked' is the callback

  // Using an anonymous function as a callback
  // btn.addEventListener('mouseover', () => {
  //   console.log("Mouse is over the button! (Anonymous callback)");
  // });
}