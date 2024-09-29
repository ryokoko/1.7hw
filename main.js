import "./style.css";

for (let i = 1; i <= 9; i++) {
  console.log("i = " + i);
  var result_arr = [];
  for (let j = 1; j <= i; j++) {
    var result = j + " * " + i + " = " + j * i;
    result_arr.push(result);
    // console.log(result_arr.join(','));
    // console.log(result_arr);
  }
  console.log(result_arr.join(", "));
}

// for (let i = 1; i <= 9; i++) {
//   console.log("i = " + i);
//   for (let j = 1; j <= i; j++) {
//   console.log(j + " * " + i + " = " + j * i);
//   }
// }
