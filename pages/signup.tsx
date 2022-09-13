import style from "../styles/signup.module.css";
import Link from "next/link";
import Image from "next/image";
import img1 from "../public/gitam.png";
import img2 from "../public/student.png";

function Signup() {
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
        <input className={style.input} type="password" placeholder="Password" />
        <br />
        <br />
        <Link href="/signin">
          <button className={style.btn}>Create Account</button>
        </Link>
        <p>
          Already Have An Account?
          <Link href="/signin">
            <a className={style.a}>Sing in!</a>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
