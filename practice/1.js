function createNewArray(arr, callback) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      output.push(callback(arr[i]));
    };
    return output;
  }
  
  function double(input) { return input * 2; };
  function divide(input) { return input / 2; };
  function increment(input) { return input + 1 };
  
  const array = [1, 2, 3];
  
  console.log(createNewArray(array, double));
  console.log(createNewArray(array, divide));
  console.log(createNewArray(array, increment));