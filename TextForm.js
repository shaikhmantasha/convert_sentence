import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpbutton = () => {
        let newText = Text.toUpperCase()
        // console.log("handle was clicked " + Text)
        setText(newText)
    }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    const handlelowerbutton = () => {
        let newlower = Text.toLowerCase()
        setText(newlower);
    } 
    const [Text , setText] = useState("Enter text here")

return (
<div>
    
    <div className="mb-3 my-3">
        <h1>{props.name}</h1>
        <textarea className="form-control" value={Text} onChange={handleOnchange} id= "myBox" rows={8}>
        </textarea>         
    </div>
    <button onClick={handleUpbutton}  className="btn btn-primary">
        Conver to Upercase
    </button>
    <button onClick={handlelowerbutton}  className="btn btn-primary mb-3">
        Conver to LowerCase
    </button>
    
</div>
);
}

