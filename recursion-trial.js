// count down from 10 to 1

function countDown(number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
      countDown(nextNumber);
  }
}
countDown(10);

// count up from 1 to 10

function countUp(number) {
  console.log(number);

  let nextCount = number + 1;

  if (nextCount <= 10) {
    countUp(nextCount);
  }
}
countUp(1);