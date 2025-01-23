import React, { useState } from 'react'

const ColorCarousel : React.FC=() => {
    
    const colors = ['red','violet','yellow','pink']
    const[colorIndex,setColorIndex] = useState(0)
    const[color,setColor] = useState(colors[colorIndex])
    
    return (
        <>
    <div style={{width: "400px", height: "500px",
        border: "2pt solid black",
        backgroundColor: color
    }}>
      
    </div>
<div style={{display: "flex", flexDirection:'row', gap:"200px"}}>
    <button  style={{backgroundColor: 'red'}}>
        Prev Color
    </button>
    <button 
    onClick={()=> 
        {
            setColorIndex(colorIndex+1)
        setColor(colors[colorIndex])
    }}
    style={{backgroundColor: 'blue'}}>
        Next Color
    </button>
  </div>  
    </>
  )
}

export default ColorCarousel
