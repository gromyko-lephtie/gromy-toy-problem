// Function to check speed and calculate demerit points
function speedChecker() {
  let speed = parseFloat(prompt("Enter your speed: "));
  const allowedSpeed = 70;
  const extraSpeedPerDemerit = 5;
  let demeritPoints = Math.floor((speed - allowedSpeed) / extraSpeedPerDemerit);
  const maxPoints = 12;

  if (speed <= allowedSpeed) {
    return "Ok";
  } else if (speed > allowedSpeed) {
    if (demeritPoints >= maxPoints) {
      return "License suspended";
    }
    return `Points: ${demeritPoints}`;
  }
}

// Call the speedChecker function and print the result
const result = speedChecker();
console.log(result);
