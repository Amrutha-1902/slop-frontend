import Link from "next/link";
import Image from "next/image";
import style from "../styles/signin.module.css";
import img1 from "../public/gitam.png";
import img2 from "../public/student.png";

function Signin() {
  return (
    <div className="root">
      <div className={style.box1}></div>
      <div className={style.box2}></div>
      <div className={style.gitam}>
        <Image src={img1} alt="gitam-logo" width={200} height={80} />
      </div>
      <div className={style.student}>
        <Image src={img2} alt="student-life-logo" width={200} height={150} />
      </div>
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
          <Link href="/signup">
            <a className={style.a}>Create One!</a>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;
