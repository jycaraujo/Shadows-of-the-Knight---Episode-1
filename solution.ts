/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs: string[] = readline().split(' ');
const W: number = parseInt(inputs[0]); // width of the building.
const H: number = parseInt(inputs[1]); // height of the building.
const N: number = parseInt(readline()); // maximum number of turns before game over.
var inputs: string[] = readline().split(' ');
const X0: number = parseInt(inputs[0]);
const Y0: number = parseInt(inputs[1]);

let x = parseInt(inputs[0]);
let y = parseInt(inputs[1]);


var x1 = 0
var y1 = 0
var x2 = W - 1
var y2 = H - 1

// game loop
while (true) {
    const bombDir: string = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
        
      if (bombDir.includes('U')) {
        y2 = y - 1;
      } else if (bombDir.includes('D') ) {
        y1 = y + 1;
      } 

      if (bombDir.includes('L')) {
        x2 = x - 1;
      } else if (bombDir.includes('R')) {
        x1 = x + 1;
      }

      x = x1 + Math.ceil((x2 - x1) / 2);
      y = y1 + Math.ceil((y2 - y1) / 2);
    
    // the location of the next window Batman should jump to.
    console.log(x.toString() + ' ' + y.toString());
}
