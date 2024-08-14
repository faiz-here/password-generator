import React, { useState } from 'react'
import "./app.css"
import { Lc, Uc, Nc, Sc } from './passChar'

function App() {
  let [passLength, setPassLength] = useState(10)
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [numericcase, setNumericcase] = useState(false)
  let [specialcase, setSpecialcase] = useState(false)
  let[finalvalue, setfinalvalue] = useState("")

  let createPass = () => {
    let charSet = ""
    if (uppercase || lowercase || numericcase || specialcase) {
      if(uppercase) charSet += Uc;
      if(lowercase) charSet += Lc;
      if(numericcase) charSet += Nc;
      if(specialcase) charSet += Sc;
      let finalResult = ""
      for (let index = 0; index < passLength; index++) {
        let pickRandom = Math.floor(Math.random() * charSet.length);
        // console.log(pickRandom);
        finalResult+= charSet.charAt(pickRandom);
        // console.log(charSet);
        }
        // console.log(finalResult);
        setfinalvalue(finalResult)

    }
    else {
      alert("please select")
    }
  }

  let lengthOfPass = (e)=>{
    // console.log(e.target.value);
    setPassLength((e.target.value));
    console.log(passLength);
  }
  let copyToClipboard = ()=>{
    if(finalvalue==""){
      alert("please first generate the password")
    }
    else{
      navigator.clipboard.writeText(finalvalue)
    }
  }
  const selectAllText = (e) => {
    e.target.select(); // Select all text in the input field
  };
  return (
    <>
      <div className="container">
          <h1 className='h1'>Password Generator</h1>
        <div className="minicontainer">
          <div className="showfield">
            <input type="text" readOnly value={finalvalue} id='valuehere' placeholder='Ex-P@s5wo7d' /> <button onClick={copyToClipboard} className='btn' type="">Copy</button>
          </div>
          <div className='passLength'>
            <h3>Password Length</h3> <input type="number" onChange={lengthOfPass} value={passLength} max={20} min={8} name="" id="" />
          </div>
          <div className="checkboxes">
            <label htmlFor="" for="myButton1">Upper Case</label> <input checked={uppercase} onChange={() => setUppercase(!uppercase)} className='inp' type="checkbox" id='myButton1' />
          </div>
          <div className="checkboxes">
            <label htmlFor="" for="myButton2">Lower Case</label> <input checked={lowercase} onChange={() => setLowercase(!lowercase)} className='inp' type="checkbox" id="myButton2" />
          </div>
          <div className="checkboxes">
            <label htmlFor="" for="myButton3" >Numeric</label> <input className='inp' type="checkbox" name="" id="myButton3" onChange={() => setNumericcase(!numericcase)}/>
          </div>
          <div className="checkboxes">
            <label htmlFor="" for="myButton4">Special Characters</label> <input onChange={() => setSpecialcase(!specialcase)} className='inp' type="checkbox" name="" id="myButton4" />
          </div>
          <button onClick={()=>createPass()} className='btn2'>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App