import Home from "./home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import { Route,Routes } from "react-router"

function NavRoutes()
{

   return(
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Routes>
   )
}

export{
    NavRoutes
}