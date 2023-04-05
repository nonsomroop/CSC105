import React from "react";
import { Navigate } from "react-router-dom";

function Admin({ userLogin, setUserLogin }) {
    const handleLogout = () => setUserLogin(false)

    if (!userLogin) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <img src="https://cms.dmpcdn.com/movie/2021/09/14/bc7dbe10-1535-11ec-b87e-fbd7416d796c_webp_original.jpg" alt="image" />
            <h1>This is Admin Page</h1>
            <button className="buttonLogin" onClick={handleLogout}>Logout</button>
        </div>
    )   
}

export default Admin;
