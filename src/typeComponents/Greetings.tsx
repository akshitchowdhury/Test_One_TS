import React, { FC } from "react";

type GreetingsProps = {
    alias: string;
    age: number;
}
const Greetings : FC<GreetingsProps> = ({alias,age}) => {
    
    
    return(
        <>
        <p>
            Hello {alias}! You are {age} years old
        </p>
        
        </>
    )
}

export default Greetings;