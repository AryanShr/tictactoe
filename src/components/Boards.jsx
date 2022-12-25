import React, { useState } from "react";
import {Title,Winner} from "./Title";

var startState = Math.floor(Math.random());
function Board(){
    const [board, setboard] = useState(Array(9).fill(null));
    function currentState(i){
        if(i === 0) return 1;
        else if(i === 1) return 0;
        else return startState;
    }
    function selectCell(i){
        const boardCopy = [...board]
        boardCopy[i] = currentState(startState);
        setboard(boardCopy); 
        startState = boardCopy[i];
        console.log(startState);
    }
    function renderSquare(i){
        return <button className = "h-20 w-20 bg-slate-500 border-black border-2 font-bold text-cyan-200 text-3xl" onClick={() => {
            if(board[i]===null && Winner(board)!== 1 && Winner(board)!== 0){
                return selectCell(i);
            }
        }}>{board[i]===null? "": board[i]===0?"O":"X"}</button>
    };
    function reset(){
        if(Winner(board) === 1||Winner(board) === 0||Winner(board) === 2)
        return <button onClick={()=>{
            const boardCopy = Array(9).fill(null);
            setboard(boardCopy);
        }} className="bg-blue-500 rounded-md px-4 py-2">Reset</button>
    }
    return (
        <>
            <div className="flex justify-center text-5xl font-bold p-32 text-white">
            <Title cell = {board}/>
            </div>
            {/* <div className="text-5xl">Hello World</div> */}
            <div className="p-8">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div className="flex justify-center">
                {reset()}
            </div>
        </>
    )
}

export default Board;