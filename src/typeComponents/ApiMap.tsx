import React, { FC, useEffect, useState } from 'react'

const ApiMap: FC= () => {
    const [datalist,setDataList] = useState<any[]>([])

    const fetchProducts = async()=>{

        const data = await fetch("https://dummyjson.com/products",{method: "GET"})
        const response = await data.json();
        setDataList(response.products)
        console.log(datalist)
    }

    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div>
      { 
        datalist.map((product,index)=>(
            <>
            <p key={index}>{product.title}</p>
            </>
        ))
      }
    </div>
  )
}

export default ApiMap
