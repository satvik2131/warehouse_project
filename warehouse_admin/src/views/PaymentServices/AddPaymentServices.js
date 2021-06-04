import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,  
  CForm,
  CFormGroup,  
  CInput, 
  CLabel,
  CSelect,
  CTextarea,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Checkbox from '@material-ui/core/Checkbox';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const AddPaymentServices = () => { 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h4>Add Payment Service</h4>    
              <Link to="/payment-services">
                                <CButton size="md"  className="ml-auto btn_orange"><KeyboardBackspaceIcon /> </CButton>
                            </Link>     
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>

                <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">CB ID </CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">CB Name </CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>   
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">End Date </CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="" />                    
                  </CCol>    
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Plan Type</CLabel>
                        <CSelect custom name="select" id="select" className="fontnsize">
                          <option value="0">Select Plan Type</option>
                          <option value="1">Platinum</option> 
                          <option value="2">Gold</option>
                          <option value="3">Silver</option>  
                                                 
                        </CSelect>
                      </CCol>
                      <CCol xs="12" md="12" className="mt-2 mb-2">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-3">Logistics Services</h5>
                        <CButton size="md"  color="info" className="ml-auto"  onClick={handleClickOpen}>+ Add Service </CButton>                        
                        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                              Add Logistics Services
                            </DialogTitle>
                            <DialogContent dividers>
                            <CFormGroup row>
                              <CCol xs="12" md="12" className="mt-2 mb-2">
                                  <CLabel htmlFor="text-input">Service Name </CLabel>
                                  <CInput id="text-input" name="text-input" placeholder="" />                    
                                </CCol> 
                              </CFormGroup> 
                              <div className="text-center">
                                <CButton size="md" className="ml-auto btn_orange"> Add Service </CButton>
                              </div>                             
                            </DialogContent>                            
                          </Dialog>
                        </div>
                      <ul className="resolution_n_products pl-0">
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Photos </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">3d photos </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">videos </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Prices and Promotions </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Custom texts </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Sponsored link </CLabel> </div>
                        </li>                        
                      </ul>                      
                    </CCol>           
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
            <CButton type="reset" size="" color="danger" className="mr-2"><CIcon name="cil-ban" /> Reset</CButton>
              <CButton type="submit" size="" color="success" className="ml-2"><CIcon name="cil-scrubber" /> Save</CButton>
              
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}
export default AddPaymentServices;
