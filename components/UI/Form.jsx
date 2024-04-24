import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = ({ data }) => {
    e.preventDefault();
    const communityCheck=[]
    if(data){
      console.log({data})
    }else(
      data.push("data-check",communityCheck)
    )
  };

  const validationSchema = {
    firstName: "",
    lastName: "",
    mobileNo: "235789",
    userName: "testUnique",
    Password: "",
    confirmPassword: "",
    isValidated: false,
  };








  const goodMorning=w9i=>{
    amr sonar bangla ami toma
  }


  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
