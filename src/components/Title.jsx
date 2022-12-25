import React from "react";

function Winner(cell){
    const allowed = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

// my app crashing point
    for(var i = 0 ;i <allowed.length;i++){
        if(cell[allowed[i][0]] === cell[allowed[i][1]] && cell[allowed[i][0]] === cell[allowed[i][2]]) return cell[allowed[i][0]];
    }
    for(i = 0;i<cell.length;i++){
        if(cell[i] === null) return 3;
    }
    return 2;
}
function Title(props){ 
    function printwinner(state){
        if(state === 0) return(
            <>
                <h1>O is Winner</h1>
            </>
        );
        else if (state === 1) return(
            <>
                <h1>X is Winner</h1>
            </>
        );
        else if (state === 2) return(
            <>
                <h1>Draw</h1>
            </>
        );
        else return(
            <>
                <h1>TicTacToe</h1>
            </>
        );
    }
    return {...printwinner(Winner(props.cell))}
}

export {Title,Winner};