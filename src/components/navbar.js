import Link from "next/link"
export default function Navbar() {
     return (
          <ul className="flex justify-around ">
               <li>
                    <Link href='/'>Home</Link>
               </li>
               <li>
                    <Link href='/tictac'>Tic Tack</Link>
               </li>
               <li>
                    <Link href='/about'>About</Link>
               </li>
               <li>
                    <Link href='/blog'>Tic Blog</Link>
               </li>
          </ul>
     )
}
