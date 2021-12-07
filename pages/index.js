import Link from "next/link";
import Navbar from "../components/navbar";
import React, { useState } from "react";

export default function Home({ data }) {
  console.log(data);
  const [dogImage, setDogImage] = useState(data.message);

  const changeImageHandler = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setDogImage(data.message);
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          // border: "2px solid red",
          display: "grid",
          placeItems: "center",
          minHeight: "70vh",
        }}
      >
        <div
          style={{
            // border: "2px solid green",
            height: "23rem",
            width: "28rem",
            margin: "0 auto",
            objectFit: "contain",
          }}
        >
          <img style={{ width: "100%", height: "100%" }} src={dogImage}></img>
        </div>
        <button onClick={changeImageHandler}>Change Image</button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
