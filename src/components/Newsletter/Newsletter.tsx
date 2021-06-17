import React, { useState, useEffect } from "react";
import { StyledNewsLetter } from "./Newsletter.styles";

const Newsletter = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setClicked(true);
    }, 10000);
  }, []);

  const toggleClick = () => {
    setClicked((prev) => !prev);
  };
  const handleClick = () => {};

  return (
    <StyledNewsLetter>
      {clicked && (
        <div className="modal">
          <div className="modal-newsletter">
            <button className="close-btn" onClick={toggleClick}>
              &times;
            </button>
            <h3>Sign up &amp; get 10% off</h3>
            <p>
              Subscribe to our newsletters now and stay up-to-date with latest
              news, books and exclusive offers.
            </p>
            <input
              type="email"
              name="email"
              placeholder="Subscribe by email ..."
            />
            <button className="submit">subscribe</button>
          </div>
        </div>
      )}
    </StyledNewsLetter>
  );
};

export default Newsletter;
