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
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow,
} from '@coreui/react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import CIcon from '@coreui/icons-react'
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
// import { DocsLink } from 'src/reusable' 

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddUsergroup = () => { 
  const Products =["Product List","Category List"];
const updatedProducts = Products.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
const Purchase =["Purchase Order","Purchase Cancellation","Purchase Invoice","Prchase Return"];
const updatedPurchase = Purchase.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
const Stocks =["Stock List","Store List","Rate List"];
const updatedStocks = Stocks.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
const Sales =["Sale Order","Sale Cancellation","Sale Invoice","Sale Return"];
const updatedSales = Sales.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
const Payment =["Advance Payment","Payment For Purchase"];
const updatedPayment = Payment.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
const Report =["Purchase Report","Purchase Payment Report","Purchase Tax Report","Sale Report","Sale Payment Report","Sale Tax Report","Stock Report"];
const updatedReport = Report.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
const System =["Tax Rate","UOM","Brand","Bins"];
const updatedSystem = System.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
const People =["Customers","Suppliers","Users","Transporters"];
const updatedPeople = People.map((value)=>{ 
  return <li><Checkbox size="small" className="p-1 mr-1"/>{value}</li>; 
});
  const classes = useStyles();
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
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add User Group</h4>
              <Link to="/people/usergroup-list">
              <Button variant="contained" size="" color="primary"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">Usergroup Name</CLabel>
                      <CInput className="fontnsize" id="text-input" name="text-input" placeholder="" className="text-left"/>                    
                  </CCol>                         
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">User Type </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Customer</option>
                      <option value="2">User</option>
                      <option value="3">Supplier</option>
                      <option value="4">Transpoter</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">User Group </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Admin</option>
                      <option value="2">Manager</option>
                      <option value="3">Supervisor</option>
                      <option value="4">Customer</option>
                      <option value="5">Supplier</option>
                      <option value="6">TRansporter</option>
                      <option value="7">Sale Manager</option>
                      <option value="8">Purchase Manager</option>
                      <option value="9">Store Keeper</option>                                       
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>                     
                    </CSelect>
                  </CCol> 
                   <CCol xs="12" md="2" className="mb-2 permissions">
                  <Button variant="contained" size="" color="primary" className="mr-2 " onClick={handleClickOpen}>Permissions </Button>
                  <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                      <AppBar className={classes.appBar}>
                        <Toolbar>
                          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                          </IconButton>
                          <Typography variant="h6" className={classes.title}>
                            Permission
                          </Typography>
                          <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                          </Button>
                        </Toolbar>
                      </AppBar>
                      <div className="row w-100">
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">Product</h5></div>  
                            <Divider />                         
                              {updatedProducts}
                            </ul>
                         </div> 
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">Purchase</h5></div>                           
                            <Divider />
                              {updatedPurchase}
                            </ul>
                         </div>   
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">Stocks</h5></div>                           
                            <Divider />
                              {updatedStocks}
                            </ul>
                         </div>  
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">Sales</h5></div>                           
                            <Divider />
                              {updatedSales}
                            </ul>
                         </div>  
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">Payment</h5></div>                           
                            <Divider />
                              {updatedPayment}
                            </ul>
                         </div>  
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">Report</h5></div>                           
                            <Divider />
                              {updatedReport}
                            </ul>
                         </div> 
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">System</h5></div>                           
                            <Divider />
                              {updatedSystem}
                            </ul>
                         </div> 
                         <div className="col-lg-3 col-md-6 col-12">                            
                            <ul className="my_new_style">
                            <div className="d-flex mr-1"><Checkbox size="small" className="p-1"/><h5 className="dashboardHeading my-2">People</h5></div>                           
                            <Divider />
                              {updatedPeople}
                            </ul>
                         </div>                    
                        
                        </div>
                    </Dialog>
                  </CCol>                
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Add Usergroup</CButton>
              <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
      
    </>
  )
}

export default AddUsergroup;
