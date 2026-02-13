// import { Counts } from './counter/counter.jsx';
// import Card from './props/props.jsx';
//  import Form from './Form/Form';
// import RegisterForm from "./HookForms/HookForms";
// import { ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// function App() {
//   // const products = [
//   //   {
//   //     id: 1,
//   //     title: "Orange",
//   //     img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
//   //     price: 5,
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Ice Cream",
//   //     img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
//   //     price: 10,
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Grapes",
//   //     img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
//   //     price: 7,
//   //   },
//   // ];

//   return (
//     <>




//    <HookForms/>




//     {/* <Form/>
//       {/* Render products */}
//       {/* <div className="min-h-screen flex items-center flex-wrap justify-center bg-gray-100 gap-5">
//         {products.map((item) => (
//           <Card key={item.id} title={item.title} img={item.img} />
//         ))}
//       </div> */}

//     </>
//   );
// }

// export default App;



// import { WrapperContext } from "./context/BoxContext";

// import Box1 from './components/Box1';
// import { Counts } from "./counter/counter";
import {Navbar} from "./routNav/Nav"

import { NavRoutes } from "./routNav/NavRoutes";

function App()
{
  return(
    <>
  
     <Navbar/> 
     <NavRoutes />
    
    {/* <Counts/> */}
     {/* <WrapperContext>
      <Box1 />
     </WrapperContext> */}

    {/* <RegisterForm/>
      <ToastContainer/> */}
    </>
  
  )

}

export default App;


