import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import tv from "./images/tv.png";
import videotv from "./images/video-tv.mp4";
import mobile from "./images/mobile.jpg";
import device from "./images/device.png";
import videodv from "./images/video-devices.mp4";
import children from "./images/children.png";
import plus from "./images/plus.png";
import greater from "./images/greater.png";
const Main = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [rotateAngles, setRotateAngles] = useState({});

  const handleButtonClick = (buttonId) => {
    setActiveButton((prevActiveButton) =>
      prevActiveButton === buttonId ? null : buttonId
    );
    setRotateAngles((prevRotateAngles) => {
      const newRotateAngles = { ...prevRotateAngles };
      newRotateAngles[buttonId] = (prevRotateAngles[buttonId] || 0) - 45;
      return newRotateAngles;
    });
  };
  return (
    <div>
      <div className="header">
        <div className="header1">
          <div className="nav">
            <div className="logo">
              <img src={logo} alt="logo"></img>
            </div>
            <div className="lang-sign">
              <div className="droupdown">
                <select className="lang">
                  <option value="English">English</option>
                  <option value="Nepali">नेपाली</option>
                </select>
              </div>
              <div className="signin">
                <Link to="/Login">
                  <button>Sign In</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="maindata">
              <div className="headline">
                <h1>Unlimited movies, TV shows and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <p>
                  (Eg: madanrajbhatta874@gmail.com)
                </p>
              </div>
              <div className="search">
                <div className="email">
                  <input type="email" placeholder="Email Address"></input>
                </div>
                <div className="button">
                  <button>
                    Get Started
                    <span className="btn-span">
                      <img src={greater}></img>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty"></div>
      <div className="div1">
        <div className="para1">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="content1">
          <img src={tv} alt="tv"></img>
          <div className="video1">
            <video autoPlay playsinline muted loop>
              <source src={videotv} type="video/mp4" />
              your browser does not support the video tag
            </video>
          </div>
        </div>
      </div>
      <div className="empty"></div>
      <div className="div2">
        <div className="para2">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className="content2">
          <img src={mobile} alt="tv"></img>
        </div>
      </div>
      <div className="empty"></div>
      <div className="div3">
        <div className="para3">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="content3">
          <img src={device} alt="tv"></img>
          <div className="video3">
            <video autoPlay playsinline muted loop>
              <source src={videodv} type="video/mp4" />
              your browser does not support the video tag
            </video>
          </div>
        </div>
      </div>
      <div className="empty"></div>
      <div className="div4">
        <div className="para4">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <div className="content4">
          <img src={children} alt="tv"></img>
        </div>
      </div>
      <div className="empty"></div>
      <div className="faq">
        <div className="faq1">
          <div className="faq-heading">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="faq-btn">
            <div className="btn">
              <button onClick={() => handleButtonClick(1)}>
                <div>
                  <span className="s-faq">What Is Netflix?</span>
                </div>
                <div className="plus">
                  <img
                    src={plus}
                    alt="plus"
                    style={{ transform: `rotate(${rotateAngles[1] || 0}deg)` }}
                  />
                </div>
              </button>
              {activeButton === 1 && (
                <div className="vis-content">
                  <h2 className="btn-content">
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more – on thousands of internet-connected devices.
                    <br />
                    <br /> You can watch as much as you want, whenever you want,
                    without a single ad – all for one low monthly price. There's
                    always something new to discover, and new TV shows and
                    movies are added every week!
                  </h2>
                </div>
              )}
            </div>
            <div className="btn">
              <button onClick={() => handleButtonClick(2)}>
                <div>
                  <span className="s-faq">How much does Netflix costs?</span>
                </div>
                <div className="plus">
                  <img
                    src={plus}
                    alt="plus"
                    style={{ transform: `rotate(${rotateAngles[2] || 0}deg)` }}
                  />
                </div>
              </button>
              {activeButton === 2 && (
                <div className="vis-content">
                  <h2 className="btn-content">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₹649 to ₹149 a month. No extra costs, no
                    contracts.
                  </h2>
                </div>
              )}
            </div>
            <div className="btn">
              <button onClick={() => handleButtonClick(3)}>
                <div>
                  <span className="s-faq">Where can I watch?</span>
                </div>
                <div className="plus">
                  <img
                    src={plus}
                    alt="plus"
                    style={{ transform: `rotate(${rotateAngles[3] || 0}deg)` }}
                  />
                </div>
              </button>
              {activeButton === 3 && (
                <div className="vis-content">
                  <h2 className="btn-content">
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
                    <br />
                    <br /> You can also download your favourite shows with the
                    iOS, Android, or Windows 10 app. Use downloads to watch
                    while you're on the go and without an internet connection.
                    Take Netflix with you anywhere.
                  </h2>
                </div>
              )}
            </div>
            <div className="btn">
              <button onClick={() => handleButtonClick(4)}>
                <div>
                  <span className="s-faq">How do I cancel?</span>
                </div>
                <div className="plus">
                  <img
                    src={plus}
                    alt="plus"
                    style={{ transform: `rotate(${rotateAngles[4] || 0}deg)` }}
                  />
                </div>
              </button>
              {activeButton === 4 && (
                <div className="vis-content">
                  <h2 className="btn-content">
                    Netflix is flexible. There are no annoying contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </h2>
                </div>
              )}
            </div>
            <div className="btn">
              <button onClick={() => handleButtonClick(5)}>
                <div>
                  <span className="s-faq">What can I watch on Netflix?</span>
                </div>
                <div className="plus">
                  <img
                    src={plus}
                    alt="plus"
                    style={{ transform: `rotate(${rotateAngles[5] || 0}deg)` }}
                  />
                </div>
              </button>
              {activeButton === 5 && (
                <div className="vis-content">
                  <h2 className="btn-content">
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </h2>
                </div>
              )}
            </div>
            <div className="btn">
              <button onClick={() => handleButtonClick(6)}>
                <div>
                  <span className="s-faq">Is Netflix good for kids?</span>
                </div>
                <div className="plus">
                  <img
                    src={plus}
                    alt="plus"
                    style={{ transform: `rotate(${rotateAngles[6] || 0}deg)` }}
                  />
                </div>
              </button>
              {activeButton === 6 && (
                <div className="vis-content">
                  <h2 className="btn-content">
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and films in their own space.
                    <br />
                    <br /> Kids profiles come with PIN-protected parental
                    controls that let you restrict the maturity rating of
                    content kids can watch and block specific titles you don’t
                    want kids to see.
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="faq-mail">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="search1">
            <div className="email1">
              <input type="email" placeholder="Email Address"></input>
            </div>
            <div className="button1">
              <button>
                Get Started{" "}
                <span className="btn-span">
                  <img src={greater}></img>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="empty"></div>
      <footer>
        <div className="footer">
          <div className="question">
            <p>
              Questions? Call <span className="nbr">000-800-919-1694</span>
            </p>
          </div>
          <div className="boxes">
            <div className="box1">
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
            <div className="box1">
              <p>Help Centre</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
              <p>Legal Notices</p>
            </div>
            <div className="box1">
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate Information</p>
              <p>Only on Netflix</p>
            </div>
            <div className="box1">
              <p>Media Centre</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="droupdn">
            <div className="droupdown">
              <select className="lang">
                <option value="English">English</option>
                <option value="Nepali">नेपाली</option>
              </select>
            </div>
          </div>
          <div className="india">
            <p>Netflix Nepal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
