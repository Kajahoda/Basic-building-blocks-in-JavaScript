for (let i = 1; i < 11; i++) {
    console.log(i);
  }

  for (let i = 0; i < 21; i=i+2) {
    console.log(i);
  }

let printNumbersTill = (i) => { 
    for (let i = 1; i < 21; i++) {
        console.log(i);
      };
}
printNumbersTill(20);

let getGreetingTo = (name) => {
    console.log(`Hello, ${name}`);
}
console.log(getGreetingTo('Mark'));


let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };
  array = [0, 3, 6, 7, 9];
  console.log(printValues(array));

let myNumbers = [0, 3, 6, 7, 9];
myNumbers.forEach((number) => {
  console.log(number);
});