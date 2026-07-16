function check(the_field){
    // Check for diagonals
    if(the_field[0][0] != "0"){
    if(the_field[0][0] == the_field[1][1] && the_field[1][1] == the_field[2][2]){
        return(the_field[0][0]);
    }}
    if(the_field[2][0] != "0"){
    if(the_field[2][0] == the_field[1][1] && the_field[1][1] == the_field[0][2]){
        return(the_field[2][0]);
    }}

    //check for straights, left to right
    for(let i = 0; i<3; i++){
        if(the_field[i][0] != "0"){
            if(the_field[i][0] == the_field[i][1] && the_field[i][1] == the_field[i][2]){
            return(the_field[i][0]);
    }
        }
    }


    //Check for straight, top to bottom
    for(let i = 0; i<3; i++){
        if(the_field[0][i] != "0"){
            if(the_field[0][i] == the_field[1][i] && the_field[1][i] == the_field[2][i]){
            return(the_field[0][i]);
    }
        }
    }


    return("0");
};
// Returns 0 if no one won, or the winner. 

export {check};