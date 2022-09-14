import Link from "next/link";
import Image from "next/image";
import logo from "../public/student.png";
import style from "../styles/settings.module.css";

function Settings() {
  return (
    <div className="root">
      <div className={style.navbar}>
        <div className={style.logo}>
          <Link href="/home">
            <Image
              src={logo}
              alt="student-life-logo"
              width={200}
              height={150}
            />
          </Link>
        </div>
        <div className={style.dropdown}>
          <button className={style.dropbtn}>
            <Link href="/settings">Settings</Link>
          </button>
          <div className={style.dropdowncontent}>
            <Link href="/home">
              <a className={style.a}>Home</a>
            </Link>
            <Link href="/clubs">
              <a>Clubs</a>
            </Link>
            <Link href="/events">
              <a>Events</a>
            </Link>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
