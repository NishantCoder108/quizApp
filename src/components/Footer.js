import React from "react";
// import { Link } from "react-router-dom";
const Footer = () => {
  // setInterval(updateTime, 1000);
  const timpor = new Date().toLocaleTimeString();
  const now = new Date().toLocaleDateString();

  // function updateTime() {
  //   const newTime = new Date().toLocaleTimeString();
  //   setTime(newTime);
  // }

  return (
    <div className="text-center mt-5 p-5">
      <hr />
      <h4 className="m-5">Meet With Your Friend</h4>
      <div className="text-center">
        <a
          style={{ textDecoration: "none", color: "brown" }}
          href="https://www.instagram.com/think_with_code/"
          title="Ketu"
          target="_ketu"
        >
          <i class="fab fa-instagram"></i>{" "}
        </a>{" "}
        <a
          style={{ textDecoration: "none", color: "brown" }}
          title="Ketu"
          target="_ketu"
          href="https://www.linkedin.com/in/ketunishant/"
        >
          <span>
            <i class="fab fa-linkedin-in  ml-3"></i>
          </span>
        </a>
      </div>

      <hr />
      <h5 className="text-center py-3">
        {" "}
        {now} &nbsp; [ {timpor} ]{" "}
      </h5>
    </div>
  );
};

export default Footer;
