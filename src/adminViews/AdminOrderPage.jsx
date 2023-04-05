import React from "react";
import "../styles/adminOrderPage.css";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import Patch from "../components/common/Patch";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useNavigate } from 'react-router-dom';

function AdminOrderPage() {

  const navigate = useNavigate();

  const navigateToAdminHomePage = () => {
    navigate("/admin/home");
  }
  return (
    <div className="main_admin_order">
      <div className="admin_order">
        <div className="admin_order_icons">
          <KeyboardBackspaceSharpIcon 
            onClick = {navigateToAdminHomePage}
          />
          <CallSharpIcon />
        </div>

        <div className="admin_order patch">
          <Patch label="Order details" />
        </div>

        <div className="adminOrderList">
          <div className="adminOrderBikeDetails">
            <h2>Aviator</h2>
          </div>

          <div className="adminOrderBikeDate">
            <div className="adminOrderDate">
              <p>22 feb</p>
              <p>28 feb</p>
            </div>
            <p id="adminOrderPrice">100hrs</p>
          </div>

          <div className="adminOrderBikePrice">
            <h2>₹ 5500</h2>
          </div>
        </div>

        <div className="orderDetails">
          <div className="orderDetailName">
            <h1>Kaushik khandelwal </h1>
            <p>+91 9672602342</p>
          </div>

          <div className="orderDetailIcon">
            <EditSharpIcon />
          </div>
        </div>

        <div className="documents">
          <div className="document_aadhar_front">
            <p>Aadhar Card front</p>
            <button>Aadhar Card front</button>
          </div>

          <div className="document_aadhar_back">
            <p>Aadhar Card back</p>
            <button>Aadhar Card back</button>
          </div>

          <div className="document_license">
            <p>Driving license</p>
            <button>Driving license</button>
          </div>
        </div>

        <div className="orderDetailPaid">
          <div className="paid">
            <p>Paid</p>

            <div className="deliveredBtn">
              <RadioButtonCheckedIcon
                style={{
                  color: "#38950D",
                  // marginTop:"px",
                  marginRight: "8px",
                }}
              />
              <p>to be delivered</p>
            </div>
          </div>

          <div className="deleteBtn">
            <EditSharpIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrderPage;
