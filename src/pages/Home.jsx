import React, { useEffect, useState } from "react";
import gif from "./../assets/giphy.webp";
import waterlevel from "./../assets/waterlevel.jpg";
import identifyicon from "./../assets/identifyicon.png";
import diseaseicon from "./../assets/diseaseicon.png";
import grapeImg from "./../assets/grape-home-blog.jpg";
import tomatoImg from "./../assets/tomato-home-blog.webp";
import appleImg from "./../assets/apple-home-blog.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { useBlogContext } from "../context/BlogContext";
import "./../styles/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const blogData = useBlogContext();
  const [typedText, setTypedText] = useState("");
  const targetText = "BotaniScan";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(targetText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 300); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);
  const [typedText1, setTypedText1] = useState("");
  const targetText1 = ">Discover the Power of BotaniScan";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(targetText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === targetText1.length) {
        clearInterval(intervalId);
      }
    }, 300); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {/* hero section */}
      <div class="container col-xxl-12 px-4 py-5 hero-container ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class=" col-sm-12 col-lg-4 hero-img-div  ">
            <img
              src={gif}
              class="d-block mx-lg-auto hero-img  img-fluid"
              alt="Bootstrap Themes"
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
          <div class="col-lg-8  hero-txt-container col-sm-12 ">
            <div class="d-flex flex-column align-items-start">
              <p class="hero-lead">
                Make Your Plant's Thrive With <br />
                <span>
                  <h1 className="hero-head">{typedText}</h1>
                </span>
                Smart Plant Care for Everyone
              </p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start col-sm-2">
              <Link to={"identify"}>
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2 hero-btn"
                >
                  Identify
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* featured columns  */}
      <div
        className="container-fluid px-4 py-5 feature-container"
        id="hanging-icons"
      >
        <h1 className="text-center mb-5">Discover the Power of BotaniScan</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-center align-items-center">
          <div className="col d-flex flex-column align-items-center feature-column ms-lg-1 mb-4 shadow">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src={identifyicon}
                alt="Image 1"
                className="img-fluid mt-4"
                width="50"
                height="50"
              />
            </div>
            <div className="text-center">
              <h3 className="fs-5 text-body-emphasis feature-head">
                Plant Identification
              </h3>
              <p className="feature-para">
                Say goodbye to plant identification guesswork. BotaniScan's
                AI-driven Leaf Identification feature instantly recognizes
                grape, apple, and tomato plants based on their unique leaf.
              </p>
            </div>
          </div>
          <div className="col d-flex flex-column align-items-center feature-column ms-lg-5 mb-4 shadow">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src={diseaseicon}
                alt="Image 2"
                className="img-fluid mt-4"
                width="60"
                height="60"
              />
            </div>
            <div className="text-center">
              <h3 className="fs-5 text-body-emphasis feature-head">
                Disease Detection
              </h3>
              <p className="feature-para">
                Protect your plants with BotaniScan's Disease Detection feature.
                The app swiftly identifies leaf spot diseases, allowing you to
                catch issues early. Stay ahead of potential problems.
              </p>
            </div>
          </div>
          <div className="col d-flex flex-column align-items-center feature-column ms-lg-5 mb-4 shadow">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src={waterlevel}
                alt="Image 3"
                className="img-fluid mt-4"
                width="50"
                height="50"
              />
            </div>
            <div className="text-center">
              <h3 className="fs-5 text-body-emphasis feature-head">
                Water Level Estimation
              </h3>
              <p className="feature-para">
                Whether you're a hobbyist gardener or a seasoned botanist,
                ensure your plants receive the right amount of water for optimal
                health. BotaniScan makes plant care a breeze.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* featured plant blogs */}
      <div class="container-fluid px-4 " id="featured-3">
        <h2 class="pb-2 text-center">Read Plant Blogs</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div
            class="feature col blog-column mx-auto mb-4 text-justify ms-lg-10 mb-4 shadow"
            style={{ width: "320px", height: "500px" }}
          >
            <div class="feature-image align-items-center justify-content-center mb-3">
              <img
                src={grapeImg}
                alt="Featured Image 1"
                class="img-fluid home-blog-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
            <h3 class="fs-2 text-body-emphasis home-blog-head">
              Learn about Grapes
            </h3>
            <p>
              Grapes contain such minerals as calcium and phosphorus and are a
              source of vitamin A. All grapes contain sugar (glucose and
              fructose) in varying quantities depending upon the variety.{" "}
            </p>
            <Link
              to={`/Blogs/${blogData[1].id}`}
              class="btn btn-primary home-blog-btn"
            >
              Read More <IoIosArrowForward />
            </Link>
          </div>
          <div
            class="feature col blog-column mx-auto mb-4 text-justify ms-lg-10 mb-4 shadow"
            style={{ width: "320px", height: "500px" }}
          >
            <div class="feature-image align-items-center justify-content-center mb-3">
              <img
                src={tomatoImg}
                alt="Featured Image 2"
                class="img-fluid home-blog-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
            <h3 class="fs-2 text-body-emphasis home-blog-head">
              Learn about Tomato
            </h3>
            <p>
              The plant requires relatively warm weather and much sunlight; it
              is grown chiefly in hothouses in cooler climates. Tomatoes are
              usually staked, tied, or caged to keep the stems and fruits off{" "}
            </p>
            <Link
              to={`/Blogs/${blogData[2].id}`}
              class="btn btn-primary home-blog-btn "
            >
              Read More <IoIosArrowForward />
            </Link>
          </div>
          <div
            class="feature col blog-column mx-auto mb-4 text-justify ms-lg-10 mb-4 shadow"
            style={{ width: "320px", height: "500px" }}
          >
            <div class="feature-image align-items-center justify-content-center mb-3">
              <img
                src={appleImg}
                alt="Featured Image 3"
                class="img-fluid home-blog-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
            <h3 class="fs-2 text-body-emphasis home-blog-head ">
              Learn about Apple
            </h3>
            <p>
              The apple itself is a pome (fleshy) fruit, in which the ripened
              ovary and surrounding tissue both become fleshy and edible. When
              harvested, apples are usually roundish, 5–10 cm (2–4 inches) in{" "}
            </p>
            <Link
              to={`/Blogs/${blogData[0].id}`}
              class="btn btn-primary home-blog-btn"
            >
              Read More <IoIosArrowForward />
            </Link>
          </div>
        </div>

        {/* View More Blogs Button */}
        <div class="row justify-content-center">
          <div class="col text-center">
            <Link to={"blogs"} class="btn btn-primary view-more-btn mb-5 mt-10">
              View More Blogs <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
