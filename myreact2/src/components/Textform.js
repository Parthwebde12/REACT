import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleloclick = () =>{
    setText(text.toLowerCase());
  }
   
  const handleclearClick =() =>{
    setText(" ")
  }



  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleloclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleclearClick}>
          Clear
        </button>
        
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length } minutes read</p>


        <h3>Preview</h3>
        <p>
          {text}
        </p>
      </div>
    </>
  );
}
