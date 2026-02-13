import { useState } from "react";

const Form = () => {

const [fullName,setFullName]=useState('')
function submitHandler(e)
{
  e.preventDefault();
  console.log('form submitted successfully',fullName)
}
  return (
    <form action=" " onSubmit={submitHandler} className="flex flex-col">
     <div className="flex flex-col w-1/5  absolute top-1/2 left-1/2 h-80 -translate-x-1/2 -translate-y-1/2">
             <input onChange={(e)=> setFullName(e.target.value)}  value={fullName}  type="text" placeholder="Enter Your Name" className="p-4 outline-none mb-2 rounded-2xl"/>
             <button type="submit" className="p-2 bg-blue-500 text-white rounded-xl">Submit</button>
           
         </div>

    </form>
  
  );
}

export default Form;
