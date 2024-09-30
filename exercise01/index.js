const chunkInput = parseInt(prompt("Enter a positive integer:"));

const chunkArray = (array, chunkSize) => {
  const result = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + chunkSize);
    result.push(chunk);
    index += chunkSize;
  }

  return result;
};

const chunks = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], chunkInput);

document.getElementById("result").textContent = `Chunked Array: ${JSON.stringify(chunks)}`;
