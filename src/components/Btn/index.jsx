// import "./Btn.css"
// const Btn = () => {
//   let rect = document.getElementById("rect");
//   let username = document.getElementById("username");
//   let password = document.getElementById("password");

//   function handle1() {
//     rect.setAttribute("className", "rect2");
//   }

//   function handle2() {
//     rect.setAttribute("className", "rect1");
//   }

//   setTimeout(() => {
//     password.focus();
//   }, 500);

//   setTimeout(() => {
//     username.focus();
//   }, 1500);
//   return (
    // <div>
    //   <div class="al"></div>
    //   <div class="container">
    //     <div class="header">Sign In</div>
    //     <div class="info">*Click on the input boxes</div>
    //     <input
    //       id="username"
    //       class="text"
    //       onClick={handle2()}
    //       onfocus="handle2()"
    //       className="inc2"
    //       type="text"
    //       name="Username"
    //       placeholder="Username"
    //       value=""
    //     />
    //     <input
    //       onClick={handle1()}
    //       id="password"
    //       cl="pass"
    //       onfocus="handle1()"
    //       className="inc1"
    //       type="pass"
    //       name="Password"
    //       placeholder="Password"
    //       value=""
    //     />
    //     <button>Sign In</button>
    //     <svg
    //       width="390"
    //       height="549"
    //       xmlns="http://www.w3.org/2000/svg"
    //       xmlns:xlink="http://www.w3.org/1999/xlink"
    //     >
    //       <rect
    //         id="rect"
    //         className="rect1"
    //         x="45px"
    //         y="300px"
    //         rx="27"
    //         ry="27"
    //         width="300px"
    //         height="50px"
    //         style="stroke: #fff; stroke-width: 1px; fill: #000"
    //       />
    //     </svg>
    //   </div>
    // </div>
//   );
// };

// export default Btn;

// ?????
import React, { useEffect } from "react";
import "./Btn.css";

function Btn() {
  useEffect(() => {
    let rect = document.getElementById("rect");
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    function handle1() {
      rect.setAttribute("className", "rect2");
    }

    function handle2() {
      rect.setAttribute("className", "rect1");
    }

    setTimeout(() => {
      password.focus();
    }, 500);

    setTimeout(() => {
      username.focus();
    }, 1500);
  }, []);

  return (
    <div className="container mx-auto">
      {/* <div className="al"></div> */}
      <div className="containe mx-auto flex flex-col ">
        <input
          onClick={handle1()}
          id="username"
          className="text inc2"
          type="text"
          name="Username"
          placeholder="Username"
          value=""
        />
        <input
          onClick={handle2()}
          id="password"
          className="pass inc1"
          type="pass"
          name="Password"
          placeholder="Password"
          value=""
        />
        <div>
          <button
          // className="outline-width:0"
          >
            Sign In
          </button>
        </div>
        <svg
          width="390"
          height="549"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            id="rect"
            className="rect1"
            x="45px"
            y="300px"
            rx="27"
            ry="27"
            width="300px"
            height="50px"
            style={{ stroke: "#fff", strokeWidth: "1px", fill: "#000" }}
          />
        </svg>
      </div>
    </div>
  );
}

export default Btn;
