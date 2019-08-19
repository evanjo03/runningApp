import React from "react";

const style = {
    footer: {
        position: "relative",
        bottom: 0,
        width: "100%",
        height: "60px",
        lineHeight: "60px",
        backgroundColor: "#f5f5f5",
        marginTop: "60px"
    }
}

function Footer() {
    
    return (<div style={style.footer}>Copyright John Evans 2019</div>)
}
export default Footer;