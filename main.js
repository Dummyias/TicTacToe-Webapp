
//Display logic

let field = [
    ["0", "0", "1"],
    ["0", "0", "2"],
    ["0", "0", "3"]

];
let run = true;
let fieldstr = "";
let firstpos = 0;
let secondpos = 0;

while(run){


    firstpos = prompt();
    secondpos = prompt();

    if((firstpos == 6) || (secondpos == 6)){
        run = false;
    }

    field[firstpos-1][secondpos-1] = "x"
for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
        fieldstr += field[i][j] + " ";
    }
    console.log(fieldstr);
    fieldstr = "";
}
    console.log("");
}
// end of display logic