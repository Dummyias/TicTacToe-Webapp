
//Display logic

let field = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]

];
let fieldstr = "";

for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
        fieldstr += field[i][j] + " ";
    }
    console.log(fieldstr);
    fieldstr = "";
}

// end of display logic