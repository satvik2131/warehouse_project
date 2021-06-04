import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const usersData = [
    {id: 0, Date:'12/12/2020',PO_ID: '1000', Supplier_name: 'John Michale', Total_price: '$ 20000.00'},
    {id: 1, Date:'14/12/2020', PO_ID: '2000', Supplier_name: 'Michale', Total_price: '$ 100.00'}
  ]

const fields = [
    { key: 'PO_ID'},
    { key: 'Date'},
    { key: 'Supplier_name'},       
    { key: 'Total_price'},
    { key: 'PO_status'},
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



const PurchaseOrder = () => {  
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
                            <h4>Purchase Order </h4>
                            <Link to="/purchase/add-purchase-order">
                                <CButton size="md"  color="success" className="ml-auto">+ Add Purchase</CButton>
                            </Link>
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
                                                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                                        <DialogTitle id="customized-dialog-title" className="p-3" onClose={handleClose}>
                                                          <h4>Purchase Order</h4>
                                                        </DialogTitle>
                                                        <DialogContent dividers>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <table className="table table-sm purchase_order_view">                                                            
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">Purchase Order ID </th>
                                                                            <td>: 7895413</td>                                                                    
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" >Date </th>
                                                                            <td>: 10/12/2021</td>                                                                   
                                                                        </tr> 
                                                                        <tr>
                                                                            <th scope="row" >Supplier </th>
                                                                            <td>: Jacob</td>                                                                   
                                                                        </tr> 
                                                                        <tr>
                                                                            <th scope="row">Purchase Order Status </th>
                                                                            <td>: Open</td>                                                                   
                                                                        </tr>                                                                
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="col-lg-12">
                                                            <h6>Product List</h6>
                                                                <table className="table table-sm purchase_order_view_all_products">    
                                                                   <thead>
                                                                        <tr>
                                                                            <th scope="col">#</th>
                                                                            <th scope="col">Product</th>
                                                                            <th scope="col">Order Qty</th>
                                                                            <th scope="col">Rem. Qty</th>
                                                                            <th scope="col">Cost</th> 
                                                                            <th scope="col">Sub-total</th>                                                                  
                                                                        </tr>
                                                                    </thead>                                                        
                                                                    <tbody> 
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td scope="row">Banana</td>
                                                                            <td>10</td>  
                                                                            <td>2</td>
                                                                            <td>$26.00</td> 
                                                                            <td>$260.00</td>                                                                                                                                               
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
                                                            </div>
                                                         </div>
                                                        
                                                        </DialogContent>                                                        
                                                    </Dialog>
                                                    <CButton size="sm"  color="success" className="ml-1" >
                                                        <CIcon name="cil-pencil" color="primary"/>
                                                    </CButton>                                                    
                                                    <CButton size="sm"  color="danger" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary"/>
                                                    </CButton>
                                                </td>
                                            )
                                        },
                                        'PO_status':()=>{
                                            return (
                                                <td className="py-2">
                                                    <CBadge className="text-light p-1" color="warning">Open</CBadge>
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

export default PurchaseOrder
