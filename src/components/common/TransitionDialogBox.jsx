import * as React from 'react';
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

const Transition = React.forwardRef(function Transition(
  props, ref 
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TransitionDialogBox(props) {
  
  const navigate = useNavigate();

  const navigateToSelectedBikeForm = () => {
    navigate("/form");
  }

  const navigateToAdminSelectedBikeForm = () => {
    navigate("/admin/form");
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

        {/* <div className="header_img">

        <img className='header_line' src={HeaderLine} alt="header_line" />
        </div> */}

        <h1>Bike up</h1>
        <p className='para1'>lets get u a ride</p>
        
        <form action="">

            <div className="select_bike_option">

            <div className='select_option'>
                <p>Select bike</p>
                <select name="bike" id="bike">
                <option value=""></option>
                <option value="Avaitor">Avaitor</option>
                <option value="Jupitor">Jupitor</option>
                <option value="Activa">Activa</option>
                <option value="Pleasure">Pleasure</option>
                <option value="Vispa">Vispa</option>
                </select>
            </div>

            <div className='select_date'>
                <p>When do you want it?</p>
                <input type="date" id='Birthday' name='Birthday'/>
            </div>

            <div className='select_period'>
                <p>How long you want it?</p>
                
                <input type="number" id='num' name='num'/>
                <input type="time" id='time' name='time'/>
            </div>

            </div>
        </form>
        
        <div className='btn_dialog_box'>

        <Button onClick={props.admin? navigateToAdminSelectedBikeForm:navigateToSelectedBikeForm}
           backGroundColor = {'white'}
           label = {'Submit'}
        />

        </div>

      </div>

        {/* <div className="footer_patch">
          
            <img className='FooterPatch' src={FooterPatch} alt="FooterPatch" />
          
          
            <img className='FooterPatch' src={FooterPatch} alt="FooterPatch" /> 
         
         
            <img className='FooterPatch' src={FooterPatch} alt="FooterPatch" />

        </div> */}
       

        </DialogContent>
                

        
      
        

      </Dialog>
    </div>
  );
}