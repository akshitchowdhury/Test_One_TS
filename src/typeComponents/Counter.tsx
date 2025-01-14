import React, { FC, useState } from "react";

const Counter : FC=()=>{
    const[num,setNum] = useState(0)
    const handleIncrease = ()=>{
        setNum(num+1)
    }
    return(
        <>
        <p>Counter App</p>
        <button onClick={handleIncrease}>click to increase number</button>
        <p>Number increment : {num}</p>
        </>
    )
}

export default Counter;