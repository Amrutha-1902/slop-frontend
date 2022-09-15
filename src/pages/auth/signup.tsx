import style from "../../../styles/signup.module.css";
import Link from "next/link";
import Image from "next/image";
import { GitamLogo, StudentLifeLogo } from "../../components/assets";
import Header from "../../components/header";

function Signup() {
  return (
    <div className="auth-background">
      <div className={style.box1} />
      <div className={style.box2} />
      <Header style={style} />
      <div className="center-div">
        <form className={style.signup}>
          <h1>Create An Account</h1>
          <input className={style.input} type="text" placeholder="Full Name" />
          <br />
          <input
            className={style.input}
            type="text"
            placeholder="Registeration Number"
          />
          <br />
          <input className={style.input} type="email" placeholder="Email ID" />
          <br />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <Link href="/auth/signin">
            <button className={style.btn}>Create Account</button>
          </Link>
          <p>
            Already Have An Account?
            <Link href="/auth/signin">
              <a className={style.a}>Sing in!</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
