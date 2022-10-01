import React from "react";

const AboutMe = () => {
  return (
    <div className="am-conatiner">
      <div className="am-row">
        <h2 className="f-title">About Me</h2>
      </div>
      <div className="am-row">
        <div className="am-left">
          <img
            src="https://images.pexels.com/photos/603022/pexels-photo-603022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="am-right">
          <h3 className="am-fullname">A</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
