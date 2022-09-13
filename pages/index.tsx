// Home page has to design
import React from "react";
import Link from "next/link";
import style from "../styles/globals.css";

function Home() {
  return (
    <div>
      Welcome to Student Life Portal
      <br />
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>
      <br />
      <Link href="/signin">
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default Home;
