import React, { useState } from 'react'

const ColorCarousel : React.FC=() => {
    
    const colors = ['red','violet','yellow','pink']
    const[color,setColor] = useState(colors[0])
    return (
        <>
    <div style={{width: "400px", height: "600px",
        border: "2pt solid black"
    }}>
      
    </div>
    </>
  )
}

export default ColorCarousel
