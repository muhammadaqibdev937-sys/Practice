import { createContext, useState } from "react";
import Box8 from './../components/Box8';

const BoxContext = createContext();

const WrapperContext = (props) => {
  const [firstName] = useState("SAQIB");

  return (
    <BoxContext.Provider value={{ firstName }}>
      {props.children}
    </BoxContext.Provider>
  )
};

export { BoxContext, WrapperContext };
