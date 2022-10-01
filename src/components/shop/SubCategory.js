import React from "react";

const SubCategory = () => {
  return (
    <div className="f-filterDiv">
      <div className="f-checkboxes">
        <div className="f-checkbox">
          <label htmlFor="dresses" className="f-filterLabel">
            Dresses
          </label>
          <input type="checkbox" className="f-check" name="" id="dresses" />
        </div>
        <div className="f-checkbox">
          <label htmlFor="jeans" className="f-filterLabel">
            Jeans
          </label>
          <input type="checkbox" className="f-check" name="" id="jeans" />
        </div>
        <div className="f-checkbox">
          <label htmlFor="t-shirt" className="f-filterLabel">
            T-Shirt
          </label>
          <input type="checkbox" className="f-check" name="" id="t-shirt" />
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
