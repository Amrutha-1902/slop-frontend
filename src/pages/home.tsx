import Link from "next/link";
import Image from "next/image";
import style from "../../styles/home.module.css";
import { StudentLifeLogo } from "../components/assets";
import AuthComponent from "../components/layout/authComp";
function Home() {
  const widget = (
    <div className="root">
      <div className={style.navbar}>
        <div className={style.logo}>
          <Link href="/home">
            <Image
              src={StudentLifeLogo}
              alt="student-life-logo"
              width={StudentLifeLogo.width}
              height={StudentLifeLogo.height}
            />
          </Link>
        </div>
        <div>
          <div className={style.dropdown}>
            <button className={style.dropbtn}>
              <Link href="/home">Home</Link>
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
    </div>
  );
  return <AuthComponent child={widget} />;
}

export default Home;
