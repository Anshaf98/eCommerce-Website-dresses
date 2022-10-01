import React from "react";

const ChangePassword = () => {
  return (
    <div className="f-container cp-container">
      <div className="f-row">
        <div className="f-formGroups">
          <form>
            <h2 className="f-title">Change Password</h2>
            <div className="f-formGroup">
              <label htmlFor="opassword" className="f-label">
                Old Password
              </label>
              <input type="password" id="opasssword" className="f-input" />
            </div>
            <div className="f-formGroup">
              <label htmlFor="password" className="f-label">
                New Password
              </label>
              <input type="password" id="passsword" className="f-input" />
            </div>
            <div className="f-formGroup">
              <label htmlFor="cpassword" className="f-label">
                Confirm Password
              </label>
              <input type="password" id="cpasssword" className="f-input" />
            </div>
            <div className="f-formBtn">
              <button className="f-btn">Update Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
