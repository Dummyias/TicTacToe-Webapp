
//Display logic

let field = [
    ["0", "0", "1"],
    ["0", "0", "2"],
    ["0", "0", "3"]

];



//Location of placement.
let firstpos = 0;
let secondpos = 0;

// String that contains the current row. Defined here so data could be added later.
let fieldstr = "";

//While this is true, the next while function will run. 
let run = true;


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