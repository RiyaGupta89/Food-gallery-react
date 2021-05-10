import React from "react";

const Card = (props) => {
    return (
        <div className="card">
                <div className="img">
                  <img src={props.image} />
                </div>
                <div className="wrap">
                  <div className="header">
                    <h3>{props.text}</h3>
                  </div>
                  <div className="para">
                    <p>{props.para}</p>
                  </div>
                  <div className="price-button">
                    <div className="price">Price: {props.price}</div>
                    <div className="button">
                      <button className="order-btn">Order Now</button>
                    </div>
                  </div>
                  <div className="para-end">
                    <p>*Prices may vary on selected date.</p>
                  </div>
                </div>
              </div>
    )
}

export default Card;