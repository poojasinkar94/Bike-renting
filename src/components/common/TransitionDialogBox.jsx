import * as React from 'react';
import { useState } from 'react'
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import '../../styles/commonStyle.css'
// import HeaderLine from '../../images/dialog box/Header_line.png'
import Button from '../../components/common/Button'
import FooterPatch from '../../images/dialogBox/footer_patch.png'
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

const Transition = React.forwardRef(function Transition(
  props, ref 
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TransitionDialogBox(props) {
  
  const navigate = useNavigate();
  const [bikeCat, setBikeCat] = useState(0)
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [hour, setHour] = useState(0)


  const navigateToSelectedBikeForm = () => {
    navigate("/form");
  }

  const navigateToAdminSelectedBikeForm = () => {
    navigate("/admin/form");
  }

  const sendBookingDetails = () => {
    let config_get = {
      params: {
        phoneNumber: sessionStorage.getItem("user-phonenumber")
      }
    }
    Axios.get("http://localhost:3002/getuserInfo", config_get
    ).then((response) => {
            console.log (response.data)
            Axios.post('http://localhost:3002/addBookingDetails', {
              from_date: fromDate,
              user_id: response.data.id,
              to_date: toDate,
              bike_category_id: bikeCat,
              hours: hour
          }).then((response) => {
              // if (response.data.error) {
              //     alert(response.data.error)
              // } else {
                  
              // }
            navigateToSelectedBikeForm()
          });
            
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            // setLoading(false);
        });
  

  }
  

  return (
    <div className='openDialogBox'>
      
      <Dialog className='dialogContainer'
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        

        <DialogContent className='dialogContentMain'>
        
        <div className='dialog_main_container'>

        <h1>Bike up</h1>
        <p className='para1'>lets get u a ride</p>
        
        <form action="">

            <div className="select_bike_option">

            <div className='select_option' >
                <p>Select bike</p>
                <select name="bike" id="bike_select" onChange={(e) => {
                  setBikeCat(e.target.value)
                }}>
                <option value=""></option>
                <option value="2">Avaitor</option>
                <option value="1">Jupitor</option>
                <option value="3">Activa</option>
                <option value="4">Pleasure</option>
                <option value="5">Vispa</option>
                </select>
            </div>

            <div className='select_date'>
                <p>When do you want it?</p>
                <input type="date" id='from_date' name='from_date' onChange={(e) => {
                  setFromDate(e.target.value)
                }}/>
                <input type="date" id='to_date' name='to_date' onChange={(e) => {
                  setToDate(e.target.value)
                }}/>
            </div>

            <div className='select_period'>
                <p>How long you want it?</p>
                <input type="number" id='num' name='num' onChange={(e) => {
                  setHour(e.target.value)
                }}/>
            </div>

            </div>
        </form>
        
        <div className='btn_dialog_box'>

        <Button onClick={sendBookingDetails}
           backGroundColor = {'white'}
           label = {'Submit'}
        />

        </div>

      </div>
       

        </DialogContent>
                

        
      
        

      </Dialog>
    </div>
  );
}