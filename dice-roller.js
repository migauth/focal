const arg = process.argv;
let arr = Number(arg.slice(2));
const diceRoll = function (dice) {
  let min = Math.ceil(1);
  let max = Math.floor(7);
  let rollArr = [];
  for (let i = 0; i < dice; i++) {
    rollArr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return `Rolled ${dice} dice: ${rollArr.join(", ")}`;
};

console.log(diceRoll(arr));