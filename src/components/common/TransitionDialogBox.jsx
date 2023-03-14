import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import '../../styles/commonStyle.css'

const Transition = React.forwardRef(function Transition(
  props, ref 
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TransitionDialogBox(props) {
  

  return (
    <div className='openDialogBox'>
      
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Disagree</Button>
          <Button onClick={props.handleClose}>Agree</Button>
        </DialogActions> */}

        <DialogContent className='dialogContentMain'>
        
        

        <h1>Bike up</h1>
        <p className='para1'>lets get u a ride</p>
        
        <form action="">
            <div>
                <p className='para2'>Select bike</p>
                <select name="bike" id="bike">
                <option value=""></option>
                <option value="Avaitor">Avaitor</option>
                <option value="Jupitor">Jupitor</option>
                <option value="Activa">Activa</option>
                <option value="Pleasure">Pleasure</option>
                <option value="Vispa">Vispa</option>
                </select>
            </div>

            <div>
                <p className='para2'>When do you want it?</p>
                <input type="date" id='Birthday' name='Birthday'/>
            </div>

            <div>
                <p className='para2'>How long you want it?</p>
                
                <input type="number" id='num' name='num'/>
                <input type="time" id='time' name='time'/>
            </div>
        </form>

        <button>Submit</button>

       

        </DialogContent>
                

        
      
        

      </Dialog>
    </div>
  );
}