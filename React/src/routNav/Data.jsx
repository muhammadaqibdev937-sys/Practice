import { useNavigate, useParams } from "react-router-dom";

function Data() {

    const navigate = useNavigate(); 
    const params=useParams()
    // console.log(params)

    return (
        <div className="flex justify-center flex-col mt-52 items-center">
            <h2 className="mt-2">My Name is Aqib</h2>
            <h3>{params.data}</h3>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export {
    Data
}
