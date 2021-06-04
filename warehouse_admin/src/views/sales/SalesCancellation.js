import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import RemoveIcon from '@material-ui/icons/Remove';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
const usersData = [
    { id: 0, Sale_Date: '11/12/2020', Sale_Order_ID: '150051',Invoice_ID:"12458963", Customer_Name: 'Rohit Medipluse Suppliers', Total_Price: '$200'},
    { id: 1, Sale_Date: '21/12/2020', Sale_Order_ID: '651645',Invoice_ID:"44785556", Customer_Name: 'Karad Supplier', Total_Price: '$150'}
]

const fields = [   
    { key: 'Sale_Order_ID'},
    { key: 'Sale_Date'},
    { key: 'Invoice_ID'},
    { key: 'Customer_Name'},   
    { key: 'Total_Price'}, 
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
   
]
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
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




const SalesCancellation = () => {  
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
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Sale Cancellation </h4>
                            <div>
                            {/* <CButton size="md" color="danger" className="ml-auto mr-2">Delete All</CButton> */}
                            <Link to="/sales/add-sale-cancellation">
                                <CButton size="md" color="success" className="ml-auto">+ Add Cancellation</CButton>
                            </Link>
                             
                            </div>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped
                                columnFilter
                                tableFilter
                                itemsPerPageSelect
                                itemsPerPage={5}
                                hover
                                sorter
                                pagination 
                                scopedSlots={{
                                    
                                    'show_details':
                                        () => {
                                            return (
                                                <td className="py-2 d-flex">
                                                 <CButton size="sm"  color="info" className="ml-1" onClick={handleClickOpen} >
                                                 <VisibilityOutlinedIcon fontSize="small" />
                                                    </CButton>
                                                    <Dialog className="purchase_cancel_dialog" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                                        <DialogTitle id="customized-dialog-title" className="p-3" onClose={handleClose}>
                                                          <h4>Sale Cancellation</h4>
                                                        </DialogTitle>
                                                        <DialogContent dividers>
                                                        <div className="row">
                                                          <div className="col-lg-6 border-right">
                                                            {/* <div className="row">                                                               */}
                                                                {/* <div className="col-lg-12"> */}
                                                                <h6 className="text-center">Order Summary</h6>
                                                                    <table className="table table-sm purchase_order_view">                                                            
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="row">Sale Order ID </th>
                                                                                <td>: 7895413</td>                                                                    
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">Invoice ID </th>
                                                                                <td>: 12458963</td>                                                                    
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row" >Date </th>
                                                                                <td>: 10/12/2021</td>                                                                   
                                                                            </tr> 
                                                                            <tr>
                                                                                <th scope="row" >Customer </th>
                                                                                <td>: Jacob</td>                                                                   
                                                                            </tr>                                                                                                                                          
                                                                        </tbody>
                                                                    </table>
                                                                {/* </div> */}
                                                                {/* <div className="col-lg-12"> */}
                                                                <h6 className="text-center">Product List</h6>
                                                                    <table className="table table-sm purchase_order_view_all_products">    
                                                                    <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Product</th>
                                                                                <th scope="col">Or.Qty</th>
                                                                                <th scope="col">Rem.Qty</th>
                                                                                <th scope="col">Cost</th> 
                                                                                <th scope="col">Sub-total</th>                                                                  
                                                                            </tr>
                                                                        </thead>                                                        
                                                                        <tbody> 
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td scope="row">Banana</td>
                                                                                <td >10</td>  
                                                                                <td >2</td>
                                                                                <td >$26.00</td> 
                                                                                <td >$260.00</td>                                                                                                                                               
                                                                            </tr>  
                                                                            <tr>
                                                                                <th colSpan="5" className="text-right pr-5">Sub-total</th>
                                                                                <th >$260.00 </th>                                                                                                                                                                                                                           
                                                                            </tr> 
                                                                            <tr>
                                                                                <th colSpan="5" className="text-right pr-5">Tax</th>
                                                                                <th >$6.5 <span>(2.5%)</span> </th>                                                                                                                                                                                                                           
                                                                            </tr> 
                                                                            <tr>
                                                                                <th colSpan="5" className="text-right pr-5">Total</th>
                                                                                <th >$266.50 </th>                                                                                                                                                                                                                           
                                                                            </tr>                                                                                                                               
                                                                        </tbody>
                                                                    </table>
                                                                {/* </div> */}
                                                            {/* </div> */}
                                                          </div>
                                                          <div className="col-lg-6">
                                                          <h6 className="text-center">Order Summary</h6>
                                                          <table className="table table-sm purchase_order_view_all_products">    
                                                                    <thead>
                                                                            <tr>
                                                                                <th scope="col">Yes/No</th>
                                                                                <th scope="col">Product</th>                                                                                
                                                                                <th scope="col">Cancel Qty</th>                                                                  
                                                                            </tr>
                                                                        </thead>                                                        
                                                                        <tbody> 
                                                                            <tr>
                                                                                <td><Checkbox defaultChecked fontSize="small" className="p-0" color="primary" inputProps={{ 'aria-label': 'checkbox with small size' }} disabled/></td>
                                                                                <td scope="row">Banana</td>                                                                                 
                                                                                <td ><input type="number" className="form-control my_custom_input" placeholder="0" /></td>                                                                                                                                               
                                                                            </tr> 
                                                                                                                                                                                                                                                                           
                                                                        </tbody>
                                                                    </table>

                                                          </div>

                                                        </div>
                                                        
                                                        
                                                        </DialogContent> 
                                                        <DialogActions>
                                                           <CButton size="sm"  color="danger" className="ml-1" onClick={handleClose}>
                                                              <HighlightOffOutlinedIcon fontSize="small"/> Close
                                                            </CButton>
                                                            {/* <CButton size="sm"  color="success" className="ml-1" >
                                                            <RemoveIcon fontSize="small"/> Cancel Order
                                                            </CButton> */}
                                                        </DialogActions>                                                       
                                                    </Dialog>
                                                    {/* <CButton size="sm"  color="success" className="ml-1" >
                                                        <CIcon name="cil-pencil" color="primary"/>
                                                    </CButton>                                                    */}
                                                    <CButton size="sm"  color="danger" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary"/>
                                                    </CButton>
                                                </td>
                                            )
                                        },
                                        'Checkbox' :()=>{
                                              return(
                                                  <td>
                                                      <Checkbox className="p-0" color="primary" />                                                      
                                                  </td>
                                              )
                                        }
                                    
                                }}                               
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default SalesCancellation;
