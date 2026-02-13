import { useContext } from "react";
import { BoxContext } from "../context/BoxContext";

 function Box9() {
  const { firstName } = useContext(BoxContext);

  return (
    <div className="box highlight">  Box 9 (LAST) — Name from Context: {firstName} </div>
  );
}


export default Box9;
