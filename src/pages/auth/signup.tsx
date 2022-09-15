import style from "../../../styles/signup.module.css";
import Link from "next/link";
import Header from "../../components/header";
import React from "react";
import SignUpForm from "../../components/forms/signUpForm";


function Signup() {
  return (
    <div className="auth-background">
      <div className={style.box1} />
      <div className={style.box2} />
      <Header style={style} />
      <SignUpForm style={style}/>
    </div>
  );
}

export default Signup;
