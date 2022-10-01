import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MyOrder = () => {
  return (
    <div className="mo-container">
      <div className="mo-row">
        <h2 className="f-title">My Orders</h2>
      </div>
      <div className="mo-row">
        <div className="mo-groups">
          <div className="mo-group">
            <h4>Order ID: 123456789</h4>
            <Link to="/order" className="mo-link">
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
