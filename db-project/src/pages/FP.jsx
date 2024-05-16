import React, { useRef } from "react";
// import { forgetPassword } from "./util.js";
import { forgetPassword } from "../util";

const FP = () => {
  const emailRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    forgetPassword(emailRef.current.value);
    window.alert(`reset Link has been sent to ${emailRef.current.value}`)
    window.location.href = "/";
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
        <div className="box my-6">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/1200px-Indian_Institute_of_Technology%2C_Patna.svg.png"
              alt=""
            />
          </div>
          <div className="right">
            <h1 className="font-bold underline text-2xl text-center py-3 mr-6 text-red-600">
              FORGOT PASSWORD
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="em">
                <input
                  type="text"
                  placeholder="Please Enter Your Registered Email"
                  className="mail"
                  ref={emailRef}
                />
              </div>
              <button className="login hover:bg-green-500 my-10">
                Submit
              </button>
              <button className="rp  hover:bg-red-800" type="button">
                Login Area
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FP;
