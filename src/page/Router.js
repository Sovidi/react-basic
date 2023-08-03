import React from 'react'
import {Link, useLocation, useNavigate}  from "react-router-dom";

function Router() {
    const location = useLocation();
    const navigate = useNavigate();
    let {state, hash, search, pathname} = location;
    console.log(state, pathname);

    function move() {
        navigate("/css");
    }

    return (
    <div>
        hehehehehehe
        <Link to="/">Home</Link>
        <button onClick={move}>Css</button>
    </div>
    )
}

export default Router