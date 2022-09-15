import Link from "next/link";
import Image from "next/image";
import style from "../../../styles/signin.module.css";
import { GitamLogo, StudentLifeLogo } from "../../components/assets";
import Header from "../../components/header";

function Signin() {
  return (
    <div className="auth-background">
      <div className={style.box1}></div>
      <div className={style.box2}></div>
      <Header style={style} />
      <form className={style.signin}>
        <h1>Let`s Goo</h1>
        <input className={style.input} type="email" placeholder="Email ID" />
        <br />
        <input className={style.input} type="password" placeholder="Password" />
        <br />
        <br />
        <Link href="/home">
          <button className={style.btn}>Sign In</button>
        </Link>
        <p>
          Don`t Have An Account?
          <Link href="/auth/signup">
            <a className={style.a}>Create One!</a>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;
