import React from 'react'
import Square from './square'

export default function BoardRow({ letterRow, row, handleClick }) {
     return (
          <div className='h-16 flex'>
               <Square letter={letterRow[0]} handleClick={() => handleClick(row, 0)} />
               <Square letter={letterRow[1]} handleClick={() => handleClick(row, 1)} />
               <Square letter={letterRow[2]} handleClick={() => handleClick(row, 2)} />
          </div>
     )
}
