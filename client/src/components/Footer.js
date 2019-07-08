import React from "react";

function Footer() {
    let username = localStorage.getItem("username"), logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    console.log(username);
    
    return(
        (username ? <button onClick={logout}>Logout</button> : null)
        
    )
}
export default Footer;