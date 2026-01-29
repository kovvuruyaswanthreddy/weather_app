import React, { useState } from 'react'
import "./App.css";

const Comp = () => {

    const [item, setItems] = useState(["Apple", "Banana"]);
    const [name, setName] = useState("");

    const handleSubmit = () =>{
        setItems([
            ...item,
            name
        ])

        console.log(item);
    }

  return (
    <>
    <div>Comp</div>
    <input type="text" onChange={(e)=> setName(e.target.value)} />
    <button onClick={handleSubmit}>Add Fruits</button>
    <ul>
    {item.map((fruits,index) => (
        <>
        <li key={index}>{fruits}</li>
        </>
    ))}
    </ul>
    </>

  )
}

export default Comp