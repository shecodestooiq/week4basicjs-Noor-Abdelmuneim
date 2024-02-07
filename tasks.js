// Task 1
function checkVotingEligibility() {
  var myAge = 18;
  if (myAge >= 18) {
    console.log('you are eligible for voting')
  }
  else {
    console.log('you are not eligible for voting');
  }
}
checkVotingEligibility()

// Task 2
function printNumbersWithWhile() {
  var i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}
printNumbersWithWhile()

// Task 3
function printEvenNumbersWithFor() {
  for (var i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvenNumbersWithFor()
// Task 4
function getDayOfWeek() {
  var day = 1;
  switch (day) {
    case 1:
      console.log('Saturday')
      break;
    case 2:
      console.log('Sunday')
      break;
    case 3:
      console.log('Munday')
      break;
    case 4:
      console.log('Tuesday')
      break;
    case 5:
      console.log('Wednesday')
      break;
    case 6:
      console.log('Thursday')
      break;
    case 7:
      console.log('Friday')
      break;

    default:
      console.log('i dont know the day');
      break;
  }
}

getDayOfWeek()
// Task 5

function sum2(num1, num2) {
  console.log(num1 + num2);
}
sum2(230, 2)
// Task 6
const fruits = ['Apple', 'orange', 'banana', 'mango', 'strawberry'];
console.log(fruits);
