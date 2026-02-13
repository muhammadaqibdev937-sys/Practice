import { NavLink } from "react-router";

function Navbar() {
 
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-center gap-8"> 
      {/* nav links gives a call back function */}
      <NavLink  className={(e)=>{ return e.isActive?'text-red-500 ':''}}   to="/">Home</NavLink  >
      < NavLink  to="/about" className={(e)=>{ return e.isActive?'text-red-500 ':''}}>About</ NavLink >
      < NavLink  to="/services" className={(e)=>{ return e.isActive?'text-red-500 ':''}}>Services</ NavLink >
      < NavLink  to="/contact" className={(e)=>{ return e.isActive?'text-red-500 ':''}}>Contact</ NavLink >
    </nav>
  ); 
}

export {Navbar} ;
