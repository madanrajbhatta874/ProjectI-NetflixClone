import React from "react";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Main-Login">
      <div class="container">
        <div class="Login1">
          <div class="logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div class="login">
          <div class="form">
            <div class="form1">
              <div class="sign">
                <h1>Sign In</h1>
              </div>
              <div class="box1">
                <input type="text" placeholder="Email or phone number" />
              </div>
              <div class="box2">
                <input type="password" placeholder="password" />
              </div>
              <div class="box3">
                <button>Sign In</button>
              </div>
              <div class="box4">
                <p>OR</p>
              </div>
              <div class="box5">
                <a href="#">Use a sign-in code</a>
              </div>
              <div class="box6">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div class="form2">
              <div class="box7">
                <input type="checkbox" checked />
                <p>Remember me</p>
              </div>
              <div class="box8">
                <p>
                  New to Netflix? <span class="span"><Link to={'/SignUp'}>Sign up now</Link></span>
                </p>
              </div>
              <div class="box9">
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <a href="#" class="ancor">
                    Learn more.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="foooter">
          <div class="call">
            <p>
              Questions? Call <span>000-800-919-1694</span>
            </p>
          </div>
          <div class="L-faq1">
            <a>FAQ</a>
            <a>Help Centre</a>
            <a>Terms of Use</a>
            <a>Privacy</a>
          </div>
          <div class="L-faq2">
            <a>Cookie Preferences</a>
            <a>Corporate Information</a>
          </div>
          <div class="droup"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
