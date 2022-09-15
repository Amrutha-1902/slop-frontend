import style from "../../../styles/signin.module.css";
import SignInForm from "../../components/forms/signInForm";
import Header from "../../components/header";

function Signin() {
  return (
    <div className="auth-background">
      <div className={style.box1}></div>
      <div className={style.box2}></div>
      <Header style={style} />
      <SignInForm style={style} />
    </div>
  );
}

export default Signin;
