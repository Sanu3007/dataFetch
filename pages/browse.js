import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Navbar from "../components/navbar";

const Browse = ({ data }) => {
  const [breedImages, setBreedImages] = useState([]);

  console.log(data);
  const breedList = Object.keys(data.message);

  const getDogImages = async (breedName) => {
    const res = await axios(`https://dog.ceo/api/breed/${breedName}/images`);
    const { data } = res;
    console.log(data.message);
    setBreedImages(data.message);
  };

  const changeBreed = async (e) => {
    try {
      console.log(`${e.target.value} is selected`);
      const breedName = e.target.value;
      getDogImages(breedName);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ margin: "2rem" }}>
        <select
          onChange={changeBreed}
          style={{ fontSize: "1.2rem", marginLeft: "44%", padding: "0 2rem" }}
        >
          {breedList.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          // border: "2px solid red",
          margin: "2rem auto",
          width: "80%",
          maxWidth: "1270px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "8px",
            gridRowGap: "8px",
          }}
        >
          {breedImages.length > 0 ? (
            breedImages.map((breedImage) => {
              return (
                <div
                  style={{
                    // border: "2px solid green",
                    height: "23rem",
                    objectFit: "contain",
                  }}
                  key={breedImage}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={breedImage}
                  ></img>
                </div>
              );
            })
          ) : (
            <h3>Select a breed to display Image</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios("https://dog.ceo/api/breeds/list/all");
  const { data } = res;
  return {
    props: {
      data,
    },
  };
}

export default Browse;
