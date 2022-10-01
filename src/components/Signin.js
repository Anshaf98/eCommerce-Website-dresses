import React from "react";
import { Link } from "react-router-dom";
import "../style/Form.css";

const Signin = () => {
  return (
    <div className="f-container">
      <div className="f-row">
        <div className="f-formGroups">
          <form>
            <h2 className="f-title">Login</h2>
            <div className="f-formGroup">
              <label htmlFor="email" className="f-label">
                Email
              </label>
              <input type="email" id="email" className="f-input" />
            </div>
            <div className="f-formGroup">
              <label htmlFor="password" className="f-label">
                Password
              </label>
              <input type="password" id="passsword" className="f-input" />
            </div>
            <div className="f-formBtn">
              <button className="f-btn">Login</button>
            </div>
            <div className="f-formOther">
              <Link to="/register">Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
