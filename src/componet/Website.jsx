import React from "react";
import "./Website.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Amazon,
  Google,
  Lenovo,
  Paypal,
  Shopify,
  Spotify,
  logo4,
  Download,
  Mobile,
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer5,
} from "../assests";
import { logo2 } from "../assests";
import { CiSettings } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuBookMinus } from "react-icons/lu";
import { project1 } from "../assests";
import { CiCircleQuestion } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const Website = () => {
  return (
    <>
      <nav className="container">
        <div className="container2">
          <div className="image">
            <img
              style={{
                height: "2.5rem",
                width: "6rem",
                fontSize: "bold",
                marginLeft: "0rem",
              }}
              src={logo2}
              alt="images2"
            ></img>
          </div>
          <ul className="container-list">
            <li>HOME</li>
            <li>LANDING</li>
            <li>PAGES</li>
            <li>DEMOS</li>
            <li>COMPONENTS</li>
            <li>DOCS</li>
          </ul>
          <div
            style={{
              marginLeft: "20rem",
              display: "flex",
              flexDirection: "row",
              gap: "15px",
            }}
          >
            <CiSettings
              style={{ height: "25px", width: "25px", color: "blue" }}
            />
            <CiShoppingCart
              style={{
                height: "26px",
                width: "26px",
                backgroundColor: "blue",
                borderRadius: "50px",
                color: "white",
              }}
            />
          </div>
        </div>
      </nav>
      <section className="section1">
        <div className="content">
          <h1
            style={{
              fontSize: "3rem",
              fontFamily: "sans-serif",
              marginBottom: "0",
            }}
          >
            Our Criativity Is Your
            <br />{" "}
            <span
              style={{
                color: "blue",
                fontSize: "3rem",
                fontFamily: "sans-serif",
                marginBottom: "0",
              }}
            >
              Success
            </span>
          </h1>
          <br />
          <p style={{ marginTop: "0", lineHight: "10px", color: "lightblack" }}>
            Lanch your campaign and benefit from our expertise on designing and
            <br />
            managing conversion centered bootstrap v5 html page
          </p>
          <button
            style={{
              width: "10rem",
              height: "2rem",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "5px 5px 5px 5px",
            }}
          >
            <MdOutlineEmail style={{ paddingRight: "0.3rem" }} />
            Get Started
          </button>
          <button
            style={{
              height: "2rem",
              width: "10rem",
              color: "blue",
              borderRadius: "5px 5px 5px 5px",
              marginLeft: "1rem",
            }}
          >
            <LuBookMinus style={{ paddingRight: "0.3rem" }} />
            Documentation
          </button>
        </div>
        <div className="content2">
          <img
            style={{ height: "80%", width: "80%" }}
            src={project1}
            alt="image2"
          ></img>
        </div>
      </section>
      <section className="image-list">
        <div style={{ height: "5rem", width: "5rem" }}>
          <img src={Amazon} alt="amazon"></img>
        </div>
        <div style={{ height: "5rem", width: "5rem" }}>
          <img src={Google} alt="amazon"></img>
        </div>
        <div style={{ height: "5rem", width: "5rem" }}>
          <img src={Lenovo} alt="amazon"></img>
        </div>
        <div style={{ height: "5rem", width: "5rem" }}>
          <img src={Paypal} alt="amazon"></img>
        </div>
        <div style={{ height: "5rem", width: "5rem" }}>
          <img src={Shopify} alt="amazon"></img>
        </div>
        <div style={{ height: "5rem", width: "5rem" }}>
          <img src={Spotify} alt="amazon"></img>
        </div>
      </section>
      <section className="section2">
        <h1
          style={{ fontSize: "2rem", fontWeight: "1rem", textAlign: "center" }}
        >
          How It Works?{" "}
        </h1>
        <p style={{ color: "gray", fontSize: "1rem", textAlign: "center" }}>
          start working with{" "}
          <span style={{ color: "blue", fontSize: "1rem" }}>Landrick</span> that
          can provides everything you need to generate <br /> awareness, drive
          traffic, connect.
        </p>
      </section>
      <section className="section3">
        <div className="image3">
          <img
            style={{ height: "500px", width: "500px" }}
            src={logo4}
            alt="logo"
          ></img>
        </div>
        <div className="content3">
          <h1 style={{ fontSize: "2rem", fontWeight: "0.5rem" }}>
            change the way you build websites
          </h1>
          <p style={{ color: "gray", fontSize: "1rem" }}>
            You can combine all the Landrick templates into a single one,you can
            take a <br />
            component from the application them and use it int the Website
          </p>
          <ul
            style={{
              color: "gray",
              listStyleType: "none",
              lineHeight: "1.5rem",
              marginLeft: "0",
            }}
          >
            <li style={{ display: "inline-flex" }}>
              <div
                style={{
                  justifycontent: "center",
                  alignItem: "center",
                  marginRight: "0.5rem",
                }}
              >
                <img
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "1rem",
                    width: "1rem",
                    lineHeight: "2rem",
                  }}
                  src={Download}
                  alt="download"
                ></img>
              </div>
              Digital Marketing Solution for Tomorrow
            </li>
            <li style={{ display: "inline-flex" }}>
              <div
                style={{
                  justifycontent: "center",
                  alignItem: "center",
                  marginRight: "0.5rem",
                }}
              >
                <img
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "1rem",
                    width: "1rem",
                    lineHeight: "2rem",
                  }}
                  src={Download}
                  alt="download"
                ></img>
              </div>
              Our Talented & Experienced Marketing Agency
            </li>
            <li style={{ display: "inline-flex" }}>
              <div
                style={{
                  justifycontent: "center",
                  alignItem: "center",
                  marginRight: "0.5rem",
                }}
              >
                <img
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={Download}
                  alt="download"
                ></img>
              </div>
              Create your own skin to match your brand
            </li>
          </ul>
          <p
            style={{
              color: "blue",
              paddingLeft: "3rem",
              paddingBottom: "6rem",
            }}
          >
            Find out More
          </p>
        </div>
      </section>
      <section className="section4">
        <div className="content4">
          <h1 style={{ fontSize: "2rem", fontWeight: "normal" }}>
            Speed up your devlopment <br />
            with <span style={{ color: "blue" }}>Landrick</span>
          </h1>
          <p style={{ color: "gray" }}>
            using Landrick to build your site means never worrying about
            designing another page or
            <br /> cross-browser compatibility. our ever -growing library of
            components and pre-designed
            <br /> Layout will make your life easier.
          </p>
          <ul
            style={{
              color: "gray",
              listStyleType: "none",
              lineHeight: "1.5rem",
              marginLeft: "0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <li style={{ display: "inline-flex" }}>
              <div
                style={{
                  justifycontent: "center",
                  alignItem: "center",
                  marginRight: "0.5rem",
                }}
              >
                <img
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "1rem",
                    width: "1rem",
                    lineHeight: "2rem",
                  }}
                  src={Download}
                  alt="download"
                ></img>
              </div>
              Digital Marketing Solution for Tomorrow
            </li>
            <li style={{ display: "inline-flex" }}>
              <div
                style={{
                  justifycontent: "center",
                  alignItem: "center",
                  marginRight: "0.5rem",
                }}
              >
                <img
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "1rem",
                    width: "1rem",
                    lineHeight: "2rem",
                  }}
                  src={Download}
                  alt="download"
                ></img>
              </div>
              Our Talented & Experienced Marketing Agency
            </li>
            <li style={{ display: "inline-flex" }}>
              <div
                style={{
                  justifycontent: "center",
                  alignItem: "center",
                  marginRight: "0.5rem",
                }}
              >
                <img
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={Download}
                  alt="download"
                ></img>
              </div>
              Create your own skin to match your brand
            </li>
          </ul>
        </div>
        <div className="image4">
          <div
            style={{
              border: "1px silid",
              boxShadow: "8px 5px 8px 5px white",
              paddingRight: "5rem",
            }}
          >
            <img
              style={{ height: "400px", width: "400px" }}
              src={Mobile}
              alt="image4"
            ></img>
            <form>
              <label>
                <br />
                Name:*
                <br />
                <input
                  style={{
                    height: "2rem",
                    width: "22rem",
                    marginTop: "1rem",
                  }}
                  type="text"
                  placeholder="Name"
                ></input>
              </label>
              <br />
              <label>
                <br />
                Email:*
                <br />
                <input
                  style={{
                    height: "2rem",
                    width: "22rem",
                    marginTop: "1rem",
                  }}
                  type="Email"
                  placeholder="Email"
                ></input>
              </label>
              <br />
              <label>
                <br />
                Password:*
                <br />
                <input
                  style={{
                    height: "2rem",
                    width: "22rem",
                    borderRadius: "lightgray",
                    marginTop: "1rem",
                  }}
                  type="password"
                  placeholder="password"
                ></input>
              </label>
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  height: "2rem",
                  width: "22.5rem",
                  textAlign: "center",
                  gap: "1rem",
                  marginTop: "1rem",
                }}
              >
                Download
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="content5">
          <p style={{ fontSize: "1.3rem", fontWeight: "3rem" }}>
            We believe in building each other and hence
          </p>
          <h1
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              fontWeight: "normal",
            }}
          >
            work with some amazing partners
          </h1>
          <p style={{ color: "gray" }}>
            start working with <span style={{ color: "blue" }}>Landrick</span>{" "}
            that can provide everything you need to generate
            <br /> awareness. drive traffic, connect.
          </p>
        </div>
      </section>
      <section className="section6">
        <div className="main-conent">
          <div className="img-content1">
            <img
              style={{ height: "3rem", width: "5rem" }}
              src={Amazon}
              alt="amazon1"
            ></img>
            <p style={{ color: "gray" }}>
              "It seems that only fragments of the
              <br /> original text remain in the Lorem ipsum
              <br /> text used today"
            </p>
            <br />
            <span style={{ color: "blue" }}>-Thomas israel</span>
          </div>
          <div className="img-content2">
            <img
              style={{ height: "3rem", width: "5rem" }}
              src={Google}
              alt="google2"
            ></img>
            <p style={{ color: "gray" }}>
              "The most well-known dummy text is
              <br /> the 'Lorem ipsum', which is said to have
              <br /> originated in the 16th century."
            </p>
            <br />
            <span style={{ color: "blue" }}>-Carl Olivr</span>
          </div>
          <div className="img-content2">
            <img
              style={{ height: "3rem", width: "5rem" }}
              src={Lenovo}
              alt="lenovo2"
            ></img>
            <p style={{ color: "gray" }}>
              "One disadvantages of Lorum ipsum is
              <br /> that in Latin certain letters appear more
              <br /> frequently than others."
            </p>
            <br />
            <span style={{ color: "blue" }}>-Barbara Mclntosh</span>
          </div>
        </div>
      </section>
      <section className="section7">
        <div className="content7">
          <h1 style={{ fontSize: "2rem", fontWeight: "normal" }}>
            Our Comfortable Rates
          </h1>
          <p style={{ color: "gray" }}>
            Start working with <span style={{ color: "blue" }}>Landrick</span>{" "}
            that can provide everything you
            <br /> need to generate awarness, drive traffic, connect.
          </p>
          <button
            style={{
              backgroundColor: "blue",
              height: "2rem",
              width: "9rem",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Buy Now
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                height: "1rem",
                width: "3rem",
                borderRadius: "40px 40px 40px 40px",
                marginLeft: "1rem",
                textAlign: "center",
                paddingBottom: "1.5rem",
                alignItems: "center",
              }}
            >
              {" "}
              v4.4
            </button>
          </button>
        </div>
        <div className="image7">
          <div className="card1">
            <span style={{ color: "blue", fontSize: "1rem" }}>STARTER</span>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "normal",
                fontFamily: "initial",
              }}
            >
              $ 39/mo
            </h1>
            <ul className="list-content">
              <li style={{ display: "inline-flex" }}>
                <div
                  style={{
                    marginRight: "0.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download2"
                  ></img>
                </div>
                Full Access
              </li>
              <li style={{ display: "inline-flex" }}>
                <div style={{ marginRight: "0.5rem" }}>
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download"
                  ></img>
                </div>
                Source Files
              </li>
              <li style={{ display: "inline-flex" }}>
                <div style={{ marginRight: "0.5rem" }}>
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download"
                  ></img>
                </div>
                Free Appointments
              </li>
              <li
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ marginRight: "0.5rem" }}>
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download"
                  ></img>
                </div>
                Enhanced security
              </li>
            </ul>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                height: "2rem",
                width: "6rem",
              }}
            >
              Get Started
            </button>
          </div>
          <div className="card2">
            <span style={{ color: "blue", fontSize: "1rem" }}>
              PROFESSIONAL
            </span>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "normal",
                fontFamily: "initial",
              }}
            >
              $ 59/mo
            </h1>
            <ul className="list-content">
              <li style={{ display: "inline-flex" }}>
                <div
                  style={{
                    marginRight: "0.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download2"
                  ></img>
                </div>
                Full Access
              </li>
              <li style={{ display: "inline-flex" }}>
                <div style={{ marginRight: "0.5rem" }}>
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download"
                  ></img>
                </div>
                Source Files
              </li>
              <li style={{ display: "inline-flex" }}>
                <div style={{ marginRight: "0.5rem" }}>
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download"
                  ></img>
                </div>
                Free Appointments
              </li>
              <li
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ marginRight: "0.5rem" }}>
                  <img
                    style={{ height: "1rem", width: "1rem" }}
                    src={Download}
                    alt="download"
                  ></img>
                </div>
                Enhanced security
              </li>
            </ul>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                height: "2rem",
                width: "6rem",
              }}
            >
              Try it now
            </button>
          </div>
        </div>
      </section>
      <section className="section8">
        <div className="content8">
          <ul style={{ liststyleType: "none" }}>
            <li style={{ display: "inline-flex" }}>
              <CiCircleQuestion
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  display: "inline-flex",
                  color: "blue",
                }}
              />
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "lighter",
                  marginTop: "-0.5rem",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "1rem",
                }}
              >
                {" "}
                How our <span style={{ color: "blue" }}>Landrick </span>work?
              </h4>
            </li>
            <p
              style={{
                color: "gray",
                marginTop: "1rem",
                marginLeft: "2.5rem",
              }}
            >
              {" "}
              Due to its widespread use as filler text for
              layouts,non-readability is of
              <br />
              great importance: human perception is tuned to recognize certain{" "}
              <br />
              patterns and repetitions in texts.
            </p>
            <li style={{ display: "inline-flex", marginTop: "1.5rem" }}>
              <CiCircleQuestion
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  display: "inline-flex",
                  color: "blue",
                }}
              />
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "lighter",
                  marginTop: "-0.5rem",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "1rem",
                }}
              >
                {" "}
                How to make unlimited data entry?
              </h4>
            </li>
            <p
              style={{
                color: "gray",
                marginTop: "1rem",
                marginLeft: "2.5rem",
              }}
            >
              Furthermore, it is advantageous when the dummy text is relatively
              <br />
              realistic so that the layout impression of the final publication
              is not
              <br /> compromised.
            </p>
          </ul>
        </div>
        <div className="content8-1">
          <ul style={{ liststyleType: "none" }}>
            <li style={{ display: "inline-flex" }}>
              <CiCircleQuestion
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  display: "inline-flex",
                  color: "blue",
                }}
              />
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "lighter",
                  marginTop: "-0.5rem",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "1rem",
                }}
              >
                What is the main process open account?
              </h4>
            </li>
            <p
              style={{
                color: "gray",
                marginTop: "1rem",
                marginLeft: "2.5rem",
              }}
            >
              if the distribution of letters and 'words' is random, the reader
              will not
              <br /> be distracted from making a neutral judgement on the visual
              impact
            </p>
            <li style={{ display: "inline-flex", marginTop: "1.5rem" }}>
              <CiCircleQuestion
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  display: "inline-flex",
                  color: "blue",
                }}
              />
              <h4
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "lighter",
                  marginTop: "-0.5rem",
                  alignItems: "center",
                  textAlign: "center",
                  marginLeft: "1rem",
                }}
              >
                <span>Is Landrick</span> safer to use with my account?
              </h4>
            </li>
            <p
              style={{
                color: "gray",
                marginTop: "1rem",
                marginLeft: "2.5rem",
              }}
            >
              The most well-known dummy text is the 'LOREM ipsum'.which is said
              to
              <br />
              have originated in the 16th century. Lorem ipsum is composed in a
              <br /> pseudo-latin language which more less corresponds to proper
              <br /> Latin.
            </p>
          </ul>
        </div>
      </section>
      <section className="section9">
        <div className="content9">
          <h1>Have Question?Get intouch!</h1>
          <p style={{ color: "gray" }}>
            start working with <span style={{ color: "blue" }}>Landrick</span>{" "}
            that can provide everything you need to generate <br />
            awareness, drive traffic, connect.
            <br />
            <br />
            <button
              style={{
                color: "white",
                backgroundColor: "blue",
                height: "2rem",
                width: "8rem",
              }}
            >
              <BsTelephone
                style={{
                  height: "1rem",
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
              />
              contact us
            </button>
          </p>
        </div>
      </section>
      <section className="footer-container">
        <div class="custom-shape-divider-top-1721573248">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="footer-group">
          <div className="footer-list1">
            <img
              style={{
                paddingTop: "2rem",
                height: "3rem",
                width: "7rem",
                marginBottom: "1rem",
              }}
              src={logo2}
              alt="logo2"
            ></img>
            <br />
            <p style={{ color: "white" }}>
              start working with Landrick that can provide
              <br /> everything you need to generate awarness,
              <br />
              drive traffic,connect.
            </p>
            <IoLogoFacebook className="icon-lg-20" />
            <FaInstagram className="icon-lg-20" />
            <CiTwitter className="icon-lg-20" />
            <CiLinkedin className="icon-lg-20 " />
          </div>
          <div className="footer-list2">
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "2rem",
                paddingLeft: "2.5rem",
              }}
            >
              Company
            </p>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward style={{}} />
                </div>
                About us
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>{" "}
                services
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                Team
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                pricing
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                project
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                careers
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>{" "}
                Blog
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                Login
              </li>
            </ul>
          </div>
          <div className="footer-list3">
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "2rem",
                paddingLeft: "2.5rem",
                color: "white",
              }}
            >
              Usefull Links
            </p>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "white",
              }}
            >
              <li style={{ display: "inline-flex" }}>
                <div>
                  {" "}
                  <IoIosArrowForward />
                </div>
                Terms of services
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                privacy policy
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                Documentation
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                changelog
              </li>
              <li style={{ display: "inline-flex" }}>
                <div>
                  <IoIosArrowForward />
                </div>
                components
              </li>
            </ul>
          </div>
          <div className="footer-list4">
            <h3>Newsletter</h3>
            <p>
              sign up and receive the latest tips
              <br /> via email{" "}
            </p>
            <form>
              write your email<span style={{ color: "red" }}>*</span>
              <br />
              <input
                style={{ height: "3rem", width: "18rem" }}
                type="email"
                placeholder="Your email:"
              ></input>
              <br />
              <br />
              <button
                style={{ height: "3rem", width: "18rem", color: "darkblue" }}
                subscribe
              >
                {" "}
                subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-last">
          <p style={{ color: "white", marginLeft: "6rem" }}>
            {" "}
            @2024 Landrick. Design with ❤ by Themesbrand.{" "}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "44rem",
              paddingBottom: "2rem",
            }}
          >
            <div>
              <img src={Footer1} alt="foot"></img>
            </div>
            <div>
              <img src={Footer2} alt="foot"></img>
            </div>
            <div>
              <img src={Footer3} alt="foot"></img>
            </div>
            <div>
              <img src={Footer4} alt="foot"></img>
            </div>
            <div>
              <img src={Footer5} alt="foot"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Website;
