console.log("Timer demo started.");
// Named callback
function handleTimeout() {
  console.log("Timeout complete! This was a named callback.");
}
setTimeout(handleTimeout, 1500);

// Anonymous callback
let intervalCount = 0;
const intervalId = setInterval(() => {
  intervalCount++;
  console.log(`Interval tick ${intervalCount} (anonymous callback).`);
  if (intervalCount >= 2) {
    clearInterval(intervalId);
    console.log("Interval cleared.");
  }
}, 700);