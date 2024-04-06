import React, {useState} from "react";


export default function FormSection() {
    const [errorMessage, setErroMessege] = useState('')

    function hundleChange(event) {
      const regex = /^[a-zA-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
      let string = event.target.value
      
      if(regex.test(string)) {
       setErroMessege("")
      }else {
        setErroMessege("Please enter a valid email address")
      }
      }



    return (
         <div>
            <article className="formCard" id="Sign">
            <div id="information-item">
              <h4>Get early access today</h4>
              <p> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
            </div>
            <form className="form"> 
              <label className="d-flex center  direction-column  all-to-center-0  ">
                 <input type="text" name="email" placeholder="email@exemplo.com" onChange={hundleChange} ></input>
                 <p className='Error sms0'>{errorMessage}</p>
                 <input type="button" value="Get Started For Free"></input>
              </label>
              <p className='Error sms1'>{errorMessage}</p>
            </form>
        </article>
         </div>
     
       
    )
}