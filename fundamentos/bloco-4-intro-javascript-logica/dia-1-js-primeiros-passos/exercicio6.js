let piece = 'peao';
let movement = 'down';

piece = piece.toLowerCase();
movement = movement.toLowerCase();

switch (movement){
    case "up":
        console.log(piece + " moving up");
        break;
    case "down":
        console.log(piece + " moving down");
        break;
    case "left":
        console.log(piece + " moving left");
        break;
    case "right":
        console.log(piece + " moving right");
        break;
    case "diagonal":
        console.log(piece + " moving diagonal");
        break;
    default :
        console.log("move not defined correctly");
        break;
}