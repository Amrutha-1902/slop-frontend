// Home page has to design
import React from "react";
import Link from "next/link";
import AuthComponent from "../components/layout/authComp";

function Home() {
  const widget = (
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
  return <AuthComponent child={widget} fromAuth={true} />;
}

export default Home;
