import React, { useState } from 'react'

export default function TextForm() {
    const[text,settext]=useState("Enter your text here")

    const handleOnClick = ()=>{
    let inputValue = text.toUpperCase();
    settext(inputValue);
}

const handleOnChange = (event)=>{
    settext(event.target.value);
}
const handleOnClickLower = (event)=>{
    let inputValue = text.toLowerCase();
    settext(inputValue);}

    const clear = (event)=>{
        let inputValue = '';
        settext(inputValue);}

  return (
    <>
    <div>
        <div className="mb-3">
            <h2>Enter your text here</h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert it into Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickLower}>Convert it into Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
    </div>
    <div className='my-5'>
    <h2>Your Text Summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
   </>
  )
}
