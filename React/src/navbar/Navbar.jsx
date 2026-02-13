import { Link } from "react-router"

function Navbar()
{
   return(
    <>
    <div className="flex  items-center  justify-between bg-red-500 p-4">
        <Link to='/'/>
        <div className="logo ml-44">
     <img src="../vite.svg" alt="logo" />
        </div>
        <div className="mr-40 ">
         <ul className="flex justify-end items-center gap-16 cursor-pointer">
             <Link className=" hover:text-blue-500 ">Home</Link>
             <link className=" hover:text-blue-500">About</link>
             <li  className=" hover:text-blue-500">Services</li>
             <li  className=" hover:text-blue-500">Contact</li>
           </ul>
        </div>
       
    </div>
    </>
   )
}

export{
    Navbar
}