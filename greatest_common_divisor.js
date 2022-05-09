// Function to get the greatest common divisor (gcd) of two integers

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  // Sample input and logging to the console
  
  console.log(gcd_two_numbers(12, 13));
  console.log(gcd_two_numbers(9, 3));