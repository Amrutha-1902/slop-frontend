import Link from "next/link";
import Image from "next/image";
import style from "../styles/home.module.css";

function Home() {
  return (
    <div className="root">
      <div className={style.navbar}>
        <nav className={style.pages}>
          <Link href="/home">
            <a>Home</a>
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
        </nav>
      </div>
    </div>
  );
}

export default Home;
