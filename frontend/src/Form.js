import axios from "axios";
import React,{ useState } from "react";

export default function Form() {
  const [inpstate, setinpstate] = useState()
  const [filestate, setfilestate] = useState()
console.log(filestate);
  const handleChange = (e)=>{
    setinpstate(e.target.value)
    
  }
  const handleFile = (e)=>{
    setfilestate(e.target.files[0])
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    let formData = new FormData()
    formData.append("title", inpstate)  // "inpstate" is just key and inpstate is value means valariable
    formData.append("file", filestate)
    axios.post("http://localhost:5000/uploads",formData).then(res=>{
      console.log(res.data,"success");
    })
  }
  return (
    <form>
      <div className="form" id="">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's make a post!</div>

        <div className="input-container ic2">
          <input id="title" className="input" type="text" placeholder=" " onChange={handleChange}/>
          <div className="cut"></div>
          <label htmlFor="title" className="placeholder">
            Title
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="choose-file"
            className=" tochoose"
            type="file"
            placeholder=" "
            onChange={handleFile}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="choose-file" className=""></label>
        </div>
        <button  className="submit" id="submit" onClick={handleSubmit}>
          Post
        </button>
      </div>
    </form>
  );
}
