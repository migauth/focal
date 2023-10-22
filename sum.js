const args = process.argv;
let arr = args.slice(2,4);
const add = function(num1, num2) {
  return Number(num1) + Number(num2);
};
console.log(add(arr[0],arr[1]));