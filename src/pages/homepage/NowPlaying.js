import React, { useState } from "react";
import { Link } from "react-router-dom";
import constants from "../../assets/Config/constant";
import "./NowPlaying.scss";

export const NowPlaying = () => {
  const [email, setEmail] = useState(""); // State to hold the input value
  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update the state with the new input value
  };
  return (
    <div className="contactUsWrapper">
      <Link to="/" className="cross-btn">
        <img src={constants.image.cross} />
      </Link>
      <div className="container">
        <div className="row">
          <div id="mc_embed_shell">
            <div id="mc_embed_signup">
              <form
                action="https://zwrtnws.us21.list-manage.com/subscribe/post?u=84df2eed7b16d7e2a36c22732&amp;id=ca7dbc612c&amp;f_id=00e75de1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <div id="mc_embed_signup_scroll" className="row flex-row justify-content-center">
                  <h2 className="text-center">
                    Meld je an en wordt als eerste geinformeerd
                  </h2>

                  <div className="mc-field-group p-0">
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Jouw email"
                      className="required email"
                      id="mce-EMAIL"
                      value={email} // Use the state value here
                      onChange={handleEmailChange} // Attach the onChange handler
                    />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        value="OK"
                      />
                    </div>
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-5000px" }}
                  >
                    <input
                      type="text"
                      name="b_84df2eed7b16d7e2a36c22732_ca7dbc612c"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
