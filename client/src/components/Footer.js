import React from "react";

const style = {
    footer: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "60px",
        lineHeight: "60px",
        marginTop: "auto",
        backgroundColor: "#f5f5f5",
       
    }
    // phantom: {
    //     display: 'block',
    //     padding: '20px',
    //     height: '60px',
    //     width: '100%',
    // }

}

function Footer() {

    return ( <div >
        {/* <div style = {style.phantom}></div> */}
        <div style = {style.footer}> Copyright John Evans 2019 </div>
        </div>
        )
    }
    export default Footer;