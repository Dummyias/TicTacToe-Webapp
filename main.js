import{check} from './check_for_win.js'
//This entire file is display logic

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

//This doesn't work yet
let run = true;

// If the value is equal to 0, it's player one's turn.
// If the value is 1, it's player two's turn.
let current_player = 0;

while(run){


    firstpos = prompt();
    secondpos = prompt();

    if((firstpos == "6") || (secondpos == "6")){
        run = false;
        console.log(run);
    }

    if(current_player == 0){
        if(field[firstpos-1][secondpos-1] != "x" && field[firstpos-1][secondpos-1] != "o"){
    field[firstpos-1][secondpos-1] = "x";
    current_player = 1;}
}else{
    if(field[firstpos-1][secondpos-1] != "x" && field[firstpos-1][secondpos-1] != "o"){
    field[firstpos-1][secondpos-1] = "o";
    current_player = 0;}
}



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