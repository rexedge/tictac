export default function Square({ letter, handleClick }) {

     return (
          <button className='bg-red-100 h-16 w-16 border border-black'
               onClick={handleClick}
          >{letter}</button>
     )
}