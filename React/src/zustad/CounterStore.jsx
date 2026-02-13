import {create} from "zustand";
const useMyStore=create((set)=>({
   count:2,
   name:'aqib',
   increment:()=>{
    // in using we continue need incre soo we use previous state and use set as high order function by default we get state
    //first way pass wrap obj in () braces soo need to return
    //   set((state)=>({
    //       count:state.count+1
    //   }))

       //second way use as simple arrow function and return obj
       set((state)=>{
        return{
            count:state.count+1
        }
       })


   }
}))

export{
    useMyStore
}

