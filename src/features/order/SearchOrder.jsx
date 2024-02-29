import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchOrder () {
    const [query, setQuety] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if(!query) return;
        navigate(`/prder/${query}`);
        setQuety("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search order #"
                   value={query}
                   onChange={(e) => setQuety(e.target.value)}
            >

            </input>
        </form>
    )
 }

 export default SearchOrder