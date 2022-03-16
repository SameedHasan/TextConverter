import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Clicked");
        //setText("You Clicked on UpperCase")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Field Cleared","success");
    }
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied ","success");
    }
    const handleESClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }
    const handleUpChange=(event)=>{
        // console.log("Changed");
        setText(event.target.value)
    }
    const [text,setText]=useState('Type your text here');
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor: props.mode==='dark'?'#cfc0c0':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleESClick}>Remove Space</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>Time Required to Read {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        
    </>
  )
}
