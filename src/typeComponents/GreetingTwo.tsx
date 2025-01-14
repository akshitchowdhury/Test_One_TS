import React, { FC } from "react";

type GreetingTwoProps = {
    num1: number;
    num2: number;
    // result: number;
}
const GreetingTwo: FC<GreetingTwoProps>=({num1,num2})=>{
    return(
        <>
        <p>Hello Maria</p>
        <p>Num 1 value : {num1}</p>
        <p>Num 2 value :{num2}</p>
        <p>The result is :{num1+num2}</p>
        </>
    )
}

 export default GreetingTwo