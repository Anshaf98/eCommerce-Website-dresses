import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../../style/Product.css";

const ProductDetails = () => {
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <div className="pd-container">
      <div className="pd-row">
        <div className="pd-col">
          <div className="pd-imageDiv">
            <div className="pd-top">
              <TransformWrapper>
                <TransformComponent>
                  <img
                    className="pd-Img"
                    src={
                      selectedImg ||
                      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt=""
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
            <div className="pd-bottom">
              <img
                onClick={() =>
                  setSelectedImg(
                    "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  )
                }
                className="pd-smallImg"
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                onClick={() =>
                  setSelectedImg(
                    "https://images.pexels.com/photos/581339/pexels-photo-581339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  )
                }
                className="pd-smallImg"
                src="https://images.pexels.com/photos/581339/pexels-photo-581339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                onClick={() =>
                  setSelectedImg(
                    "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  )
                }
                className="pd-smallImg"
                src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pd-col">
          <div className="pd-groups">
            <div className="pd-group">
              <h3 className="pd-title">P0</h3>
            </div>
            <div className="pd-group">
              <span className="pd-category">MEN</span>
              <span className="pd-subcategory">Dresses</span>
            </div>
            <div className="pd-group">
              <p className="pd-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem magnam a at id cum autem doloremque possimus
                ducimus sint. Amet, totam quasi suscipit quia expedita placeat
                fuga iste quae odio.
              </p>
            </div>
            <div className="pd-group">
              <p className="pd-qty">
                Qty: <span className="pd-qtyNo">1</span>
              </p>
            </div>
            <div className="pd-group">
              <div className="pd-otherAction">
                <div className="pd-size">
                  <h4 className="pd-sizeTitle">Size:</h4>
                  <div className="pd-sizeDiv">
                    <input type="radio" id="s" name="size" value="S" />
                    <label htmlFor="s">S</label>
                    <input type="radio" id="l" name="size" value="L" />
                    <label htmlFor="l">L</label>
                  </div>
                </div>
                <div className="pd-color">
                  <h4 className="pd-sizeTitle">Color:</h4>
                  <div className="pd-sizeDiv">
                    <input type="radio" id="blue" name="color" value="Blue" />
                    <label htmlFor="blue">Blue</label>
                    <input type="radio" id="black" name="color" value="Black" />
                    <label htmlFor="black">Black</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="pd-group">
              <div className="pd-buttonsgroup">
                <button className="pd-wish">Add to Wish</button>
                <button className="pd-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
