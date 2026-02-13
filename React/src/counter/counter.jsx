// import { useState } from "react";
import { useMyStore } from "../zustad/CounterStore";
function Counts() {
  // const [count, setCount] = useState(0);
  //if use this syantax it renders complete store
  // const myStore=useMyStore()
   const count=useMyStore(state=>state.count);
    const name=useMyStore(state=>state.name);
    const increment=useMyStore(state=>state.increment)
  // console.log(myStore)
  function handleClick()
  {
   increment()
  }
return (
   <>
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
       <h3 className="text-center text-2xl mb-3">{count}</h3>
       <h3 className="text-center text-2xl mb-3">{name}</h3>
       <button
         className="text-white bg-blue-500 px-4 py-2" onClick={handleClick}>
         Click me
       </button>
     </div>
   </>
 );





  // return (
  //   <>
  //     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  //       <h3 className="text-center text-2xl mb-3">{count}</h3>
  //       <button
  //         className="text-white bg-blue-500 px-4 py-2"
  //        onClick={() => setCount((prev) => prev + 1)

  //         }
  //       >
  //         Click me
  //       </button>
  //     </div>
  //   </>
  // );
}

export { Counts };
