const form = document.querySelector("form");
const input = document.querySelector("#numbersInput");
const submitBtn = document.querySelector("#submitBtn");
const resultDiv = document.querySelector("#result");

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission

  const numbersString = input.value;
  const numbersArray = numbersString
    .split(",")
    .map((number) => Number(number.trim()));
  const sum = sumEvenNumbers(numbersArray);

  resultDiv.textContent = `Sum of even numbers: ${sum}`;
});
