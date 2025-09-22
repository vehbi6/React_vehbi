import React from "react";
import Button from "./Button";

function Home() {

const header = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
    borderRadius: "5px"
}

const para = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginTop: "10px",
    background: "lightyellow",
    padding: "10px",
    borderRadius: "5px",
    color: "green",
}



    return(
        <>
        <h1 style={header}>Home page</h1>
        <p style={para}>Welcome to the home page</p>
        <Button />
        </>
        
    )
}

export default Home