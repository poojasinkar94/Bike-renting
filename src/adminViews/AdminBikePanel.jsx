import React from "react";
import "../styles/adminBikePanel.css";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import IconButton from "../components/common/IconButton";
import Patch from "../components/common/Patch";
import BikePanel from "../images/Admin bike panel/BikePanel.png";

function AdminBikePanel() {
  return (
    <div className="MainBikePanel">
      <div className="BikePanel">
        <div className="BikePanel_icon">
          <KeyboardBackspaceSharpIcon />
          <IconButton />
        </div>

        <div className="category_patch">
          <Patch label="Category" />
        </div>

        <div className="bike_Catogory">
          <div className="bike_lift_catogory">
            <img className="BikePanel" src={BikePanel} alt="BikePanel" />
          </div>

          <div className="bike_right_catogory">
            <div className="right_top">
              <div className="right_top_content">
                <h2>Aviator</h2>
                <h2 id="numeric">7</h2>
              </div>

              <div className="right_bottom_content">
                <p>
                  {" "}
                  <span>4</span> available
                </p>
                <p>
                  {" "}
                  <span>1</span> out of order
                </p>
              </div>

              <hr />
            </div>
            <div className="right_bottom">
              <div className="right_top_content">
                <p>
                  <span>₹ 100 </span>/hours
                </p>
                <p>
                  <span>₹ 1200 </span>/days
                </p>
              </div>

              <div className="right_bottom_content">
                <p>
                  <span>₹ 300</span> caution amount
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bike_Catogory">
          <div className="bike_lift_catogory">
            <img className="BikePanel" src={BikePanel} alt="BikePanel" />
          </div>

          <div className="bike_right_catogory">
            <div className="right_top">
              <div className="right_top_content">
                <h2>Aviator</h2>
                <h2 id="numeric">7</h2>
              </div>

              <div className="right_bottom_content">
                <p>
                  {" "}
                  <span>4</span> available
                </p>
                <p>
                  {" "}
                  <span>1</span> out of order
                </p>
              </div>

              <hr />
            </div>
            <div className="right_bottom">
              <div className="right_top_content">
                <p>
                  <span>₹ 100 </span>/hours
                </p>
                <p>
                  <span>₹ 1200 </span>/days
                </p>
              </div>

              <div className="right_bottom_content">
                <p>
                  <span>₹ 300</span> caution amount
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bike_Catogory">
          <div className="bike_lift_catogory">
            <img className="BikePanel" src={BikePanel} alt="BikePanel" />
          </div>

          <div className="bike_right_catogory">
            <div className="right_top">
              <div className="right_top_content">
                <h2>Aviator</h2>
                <h2 id="numeric">7</h2>
              </div>

              <div className="right_bottom_content">
                <p>
                  {" "}
                  <span>4</span> available
                </p>
                <p>
                  {" "}
                  <span>1</span> out of order
                </p>
              </div>

              <hr />
            </div>
            <div className="right_bottom">
              <div className="right_top_content">
                <p>
                  <span>₹ 100 </span>/hours
                </p>
                <p>
                  <span>₹ 1200 </span>/days
                </p>
              </div>

              <div className="right_bottom_content">
                <p>
                  <span>₹ 300</span> caution amount
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBikePanel;
