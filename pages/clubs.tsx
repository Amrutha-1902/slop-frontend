import React from "react";
import Link from "next/link";

function Clubs() {
  return (
    <div className="root">
      <nav>
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
  );
}

export default Clubs;
