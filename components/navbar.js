import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        // border: "2px solid black",
        marginBottom: "3rem",
        fontSize: "1.4rem",
        padding: "8px 12px",
        background: "pink",
      }}
    >
      <Link href="/">
        <a
          style={{
            // border: "2px solid green",
            marginRight: "3rem",
            marginLeft: "2rem",
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/browse">
        <a>Browse</a>
      </Link>
    </nav>
  );
};

export default Navbar;
