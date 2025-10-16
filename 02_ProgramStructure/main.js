//FizzBuzz
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(i);
//     }
// }

//Chessboard

function createGrid(length) {
    let grid_number = length;
    let output = "";
    for (let i = 0; i < grid_number; i++) {
        for (let j = 0; j < grid_number; j++) {
            output += j % 2 == 0 ? "#" : " ";
        }
        output += "\n";
    }
    console.log(output);
}
createGrid(10);
