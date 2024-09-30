const isPrime = (number) => {
  // handling small and even numbers
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  // then after checking for divisibility by 2 and 3,
  // I ahve checked numbers of the form 6k ± 1,
  // this way I have skiped many unneccessary checks
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 19, 57];

const results = numbers.map(isPrime);

document.getElementById("numbers").textContent = `Numbers: ${numbers}`;

document.getElementById("results").textContent = `Prime checks: ${results}`;
