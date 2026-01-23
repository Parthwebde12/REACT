import React,{useState} from 'react'


export default function Textform(props) {
  const [text, setText] = useState('Enter text here');
  const handleUpClick =()=>{
    console.log("uppercase was selected");
    setText("You have clicked on HandleUpClick")
  }
   const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  // text ="new text" //wrong way to change text
  // settext=("new Text"); //correct way to change the txt
  return (
    <div>
      <h1>{props.heading}</h1>
    
  <div class="mb-3">
    <label for="myBox" className="form-label"></label>
    <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>    
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
