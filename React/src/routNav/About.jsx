import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();

  function handleChange(data) {
    navigate(`/about/name/${data}`); 
  }

  return (
    <div className="flex justify-center flex-col mt-52 items-center">
      <h1 className="mb-2">About</h1>
      <button onClick={() => handleChange('product3')}>Details</button>
    </div>
  );
}

export default About;
