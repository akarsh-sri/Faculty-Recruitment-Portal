import React from "react";
import "./SignUp.css";
import cap from "../assets/captcha.png";
import { registerUser } from "../util";
const SignUp = () => {
  let captcha = "";
  var code;
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthOtp = 6;
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha = captcha + charsArray[index];
    else i--;
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const fd = new FormData(evt.target);
    const data = Object.fromEntries(fd.entries());
    const {
      fname,
      lname,
      email,
      category,
      password,
      repassword,
      captcha: cap,
    } = data;
    // console.log(1);
    if (password !== repassword) {
      window.alert("passwords don't match");
      return;
    } else if (cap !== captcha) {
      window.alert("invalid captcha");
      return;
    }
    registerUser(email, password, fname, lname);
  }
  return (
    <div>
      <div className="tp">
        <h1 className="font-bold text-3xl text-center py-2">
          भारतीय प्रौद्योगिकी संस्थान पटना
        </h1>
        <h1 className="font-bold text-3xl text-center py-1">
          Indian Institute of Technology Patna
        </h1>
      </div>
      <div className="btm my-2">
        <h1 className="blink_me font-bold text-3xl text-center py-2">
          Application for Faculty Position
        </h1>
        <div className="box2 my-6">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/1200px-Indian_Institute_of_Technology%2C_Patna.svg.png"
              alt=""
            />
          </div>
          <div className="rgt">
            <h1 className="font-bold underline text-2xl text-center py-3 text-green-800">
              CREATE YOUR PROFILE
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="flex gap-6 py-2 mx-20">
                <input
                  type="text"
                  className="fn p-1 w-64"
                  placeholder="First Name"
                  name="fname"
                />
                <input
                  type="text"
                  className="ln p-1 w-64"
                  placeholder="Last Name"
                  name="lname"
                />
              </div>
              <div className="flex gap-6 mx-20">
                <input
                  type="text"
                  className="yem p-1 w-64"
                  placeholder="Your Email"
                  name="email"
                />
                <span className="sl">
                  <select name="category" id="">
                    <option value="Select Category p-1">Select Category</option>
                    <option value="UR">UR</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="PWD">PWD</option>
                    <option value="EWS">EWS</option>
                  </select>
                </span>
              </div>
              <div className="flex gap-6 py-2 mx-20">
                <input
                  type="password"
                  className="fn p-1 w-64"
                  placeholder="New password"
                  name="password"
                />
                <input
                  type="password"
                  className="ln p-1 w-64"
                  placeholder="Retype-new password"
                  name="repassword"
                />
              </div>
              <div className="flex mx-20 gap-6 py-2">
                {/* <span id='captcha' className="fn p-1 px-2 w-64"></span> */}
                <div
                  style={{
                    backgroundImage: `url(${cap})`,
                    width: "75px",
                    height: "33px",
                    padding: "2px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: "white",
                      userSelect: "none",
                    }}
                  >
                    {captcha}
                  </p>
                </div>
                <input
                  type="text"
                  className="ln p-1 w-64"
                  placeholder="Insert image text"
                  name="captcha"
                />
              </div>
              <div className="mx-20 pt-4">
                <p className="text-red-700 font-bold ">Note:</p>
                <div className="text-blue-800 font-bold txt py-6">
                  <div>
                    1. Applicant should kindly check their email for activation
                    link to access the portal.
                  </div>
                  <div>
                    2. Please check SPAM folder also, in case activation link is
                    not received in INBOX.
                  </div>
                  <div>
                    3. Applicant applying for more than one position/ department
                    should use different email id for each application.
                  </div>
                </div>
              </div>
              <button className="register mx-20 ">Register</button>
              <span className="font-bold text-green-700 mv">
                If registered
              </span>
              <span>
                <button
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  className="login2"
                  type="button"
                >
                  Login Here
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
