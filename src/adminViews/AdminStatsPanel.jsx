import React from "react";
import "../styles/adminStatsPanel.css";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import Patch from "../components/common/Patch";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function AdminStatsPanel() {
  return (
    <div className="main_stats">
      <div className="stats">
        <div className="stats_icon">
          <KeyboardBackspaceSharpIcon />
        </div>

        <div className="system_stats_patch">
          <Patch 
            label = 'System Stats'
          />
        </div>

        <div className="stats_booking_green">
          <div className="bookings">
            <h2>200</h2>
            <div className="booking_percentage">
              <div className="stats_arrow_icon">
                <ArrowDropUpIcon />
              </div>
              <p>5%</p>
            </div>
          </div>

          <div className="booking_para">
            <p>current on going bookings</p>
          </div>
        </div>

        <div className="stats_booking_green">
          <div className="bookings">
            <h2>20</h2>
            <div className="booking_percentage">
              <div className="stats_arrow_icon">
                <ArrowDropUpIcon />
              </div>
              <p>2%</p>
            </div>
          </div>

          <div className="booking_para">
            <p>upcoming bookings</p>
          </div>
        </div>

        <div className="stats_booking_green">
          <div className="bookings">
            <h2>₹ 5,50,000</h2>
            <div className="booking_percentage">
              <div className="stats_arrow_icon">
                <ArrowDropUpIcon />
              </div>
              <p>12%</p>
            </div>
          </div>

          <div className="booking_para">
            <p>Revenue for past 7 days</p>
          </div>
        </div>

        <div className="stats_booking_red">
          <div className="bookings">
            <h2>4</h2>
          </div>

          <div className="booking_para">
            <p>bikes out of orde</p>
          </div>
        </div>

        <div className="stats_booking_red">
          <div className="bookings">
            <h2>12</h2>
          </div>

          <div className="booking_para">
            <p>free bikes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStatsPanel;
