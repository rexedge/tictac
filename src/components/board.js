'use client'
import React, { Fragment, useState } from 'react'
import BoardRow from './board-row'

export default function Board() {
     const [squares, setSquares] = useState(Array(9).fill(null));
     const [xIsNext, setXIsNext] = useState(true)

     const winner = calculateWinner(squares);
     let status;
     if (winner) {
          status = "Winner: " + winner;
     } else {
          status = "Next player: " + (xIsNext ? "X" : "O");
     }


     function handleClick(row, col) {
          const box = row * 3 + col;
          if (squares[box] || calculateWinner(squares)) {
               return;
          }
          const squareCopy = squares.slice();
          if (squareCopy[box]) {
               return;
          }
          xIsNext ? squareCopy[box] = 'X' : squareCopy[box] = 'O'
          setSquares(squareCopy);
          setXIsNext(!xIsNext)
     }


     const letterRows = []
     for (let i = 0; i < squares.length; i += 3) {
          const splitArray = squares.slice(i, i + 3);
          letterRows.push(splitArray);
     }

     return (
          <Fragment>
               <div className="status">{status}</div>
               <div>
                    <BoardRow letterRow={letterRows[0]} row={0} handleClick={handleClick} />
                    <BoardRow letterRow={letterRows[1]} row={1} handleClick={handleClick} />
                    <BoardRow letterRow={letterRows[2]} row={2} handleClick={handleClick} />
               </div>
          </Fragment>
     )
}

function calculateWinner(squares) {
     const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
     ];
     for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
               return squares[a];
          }
     }
     return null;
}
