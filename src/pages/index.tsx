// Home page has to design
import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="auth-background">
      Welcome to Student Life Portal
      <br />
      <Link href="/auth/signup">
        <button>Sign Up</button>
      </Link>
      <br />
      <Link href="/auth/signin">
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default Home;
