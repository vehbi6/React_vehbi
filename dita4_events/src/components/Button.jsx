import React from "react";

function Button() {
    const fun =()=>{

        alert("E preke")
    }

    const fun2 =(name)=>{
     console.log("hello " + name)
       
    }
        
return (
    <>
    <button onClick={fun}>Prekem</button>

    <button onClick={() => fun2("vebi")}>Prekem 2</button>
    </>
)
}
export default Button