import React,{ useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import {    
    CCard,
    CCardBody,   
    CCol,  
    CForm,
    CFormGroup,      
    CInput,   
    CLabel,
    CSelect,
    CRow,
    CSwitch
  } from '@coreui/react'
import { CenterFocusStrong } from '@material-ui/icons';
import AddMuitiProducts from './AddMultiProducts';


const useStyles = makeStyles((theme) => ({  
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),

     
    },
  }));
  const theme = {
    spacing: [0, 2, 3, 5, 8],
  }
  
 
  
  const AddPurchaseOrderList=()=> {   
    const [item, ShowTable]= useState(false);
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function getSteps() {
      return ['Puchase Order Header', 'Puchase Order Products', 'Puchase Order Fooder'];
    }
    
    
    function getStepContent(stepIndex) {    
      switch (stepIndex) {        
        case 0:
          return <><CRow>
              <CCol xs="12" md="12" >
                <CCard>               
                  <CCardBody>
                    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">                    
                      <CFormGroup row>                  
                        <CCol xs="12" md="4" className="mt-2 mb-2">
                          <CLabel htmlFor="date-input" className="fontnsize">PO Date*</CLabel>
                          <CInput className="fontnsize" type="date" id="date-input" name="date-input" placeholder="date" />                                         
                        </CCol>
                        <CCol xs="12" md="4" className="mt-2 mb-2">
                          <CLabel htmlFor="text-input" className="fontnsize">Refrence Number</CLabel>
                          <CInput className="fontnsize"  id="text-input" name="text-input" placeholder="#HJRF1234"/>                    
                        </CCol>                      
                        <CCol xs="12" md="4" className="mt-2 mb-2">
                         <CLabel htmlFor="select" className="fontnsize">Supplier Name*</CLabel>
                          <CSelect custom name="select" id="select" className="fontnsize">
                            <option value="0">Please select</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                        <CCol xs="12" md="4" className="mt-2 mb-2">
                         <CLabel htmlFor="select" className="fontnsize">Pay Mode* </CLabel>
                          <CSelect custom name="select" id="select" className="fontnsize">
                            <option value="0">Please select</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>                      
                        <CCol xs="12" md="4" className="mt-2 mb-2">
                          <CLabel htmlFor="text-input" className="fontnsize">Delivery Note</CLabel>
                          <CInput className="fontnsize" id="text-input" name="text-input" placeholder="Enter Here..." />                    
                        </CCol>                                                          
                      </CFormGroup>
                    </CForm>
                  </CCardBody>
                 
                </CCard>          
              </CCol>        
            </CRow>
          </>;
        
        case 1:        
          return <><CRow>
          <CCol xs="12" md="12" >
            <CCard>               
              <CCardBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">                    
                  <CFormGroup row>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                     <CLabel htmlFor="select" className="fontnsize">Product Name* </CLabel>
                      <CSelect custom name="select" id="select" className="fontnsize">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>   
                    <CCol xs="12" md="3" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">UOM</CLabel>
                      <CInput className="fontnsize" id="text-input" name="text-input" placeholder="e.g:-gm" />                    
                    </CCol> 
                    <CCol xs="12" md="3" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">PO Qty*</CLabel>
                      <CInput className="fontnsize" id="text-input" name="text-input" placeholder="e.g:-12" />                    
                    </CCol> 
                    <CCol xs="12" md="3" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">PO Approved Qty*</CLabel>
                      <CInput className="fontnsize" id="text-input" name="text-input" placeholder="e.g:-2" />                    
                    </CCol>              
                    <CCol xs="12" md="3" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">PO Remaining Qty*</CLabel>
                      <CInput className="fontnsize" id="text-input" name="text-input" placeholder="e.g:-5" />                    
                    </CCol>  
                    <CCol xs="12" md="3" className="mt-2 mb-2">
                      <CLabel className="fontnsize" htmlFor="text-input">Rate</CLabel>
                      <CInput className="fontnsize" id="text-input" name="text-input" placeholder="$22" />                    
                    </CCol>  
                    <CCol xs="12" md="3" className="mt-2 mb-2">
                      <CLabel className="fontnsize" htmlFor="text-input">Amount</CLabel>
                      <CInput className="fontnsize" id="text-input" name="text-input" placeholder="$123" />                    
                    </CCol>
                    <CCol tag="label" sm="3" className="col-form-label " className="fontnsize">
                      <h5 className="my-2">Add Multiple Products?</h5>
                    </CCol>
                    <CCol sm="1" className="my-2">
                    <CSwitch
                        className="mt-1"
                        color="dark"                      
                        shape="pill"
                        variant="opposite"
                        onChange={()=>ShowTable(!item)}
                      />
                    </CCol>
                    <CCol sm="8" className="text-right my-2">
                      <Button variant="contained" className="mx-2 bg-success text-light">Save</Button>                   
                    </CCol>
                    <CCol sm="12">                   
                      {item?<AddMuitiProducts />:null}
                    </CCol>                                                        
                  </CFormGroup>
                </CForm>
              </CCardBody>
             
            </CCard>          
          </CCol>        
        </CRow>
      </>;
        case 2:
          return <><CRow>
          <CCol xs="12" md="12" >
            <CCard>               
              <CCardBody>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">                    
                  <CFormGroup row>                
                    <CCol xs="12" md="6" className="mt-2 mb-2">
                     <CLabel htmlFor="select" className="fontnsize">PO Status </CLabel>
                      <CSelect custom name="select" id="select"  className="fontnsize">
                        <option value="0">Please select</option>
                        <option value="1">Open</option>
                        <option value="2">Approved</option>
                        <option value="3">In-progress</option>
                        <option value="4">Purchased</option>
                      </CSelect>
                    </CCol>  
                    <CCol xs="12" md="6" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">Total Amount</CLabel>
                      <CInput  className="fontnsize" id="text-input" name="text-input" placeholder="eg:$123" />                    
                    </CCol>                                                          
                  </CFormGroup>
                </CForm>
              </CCardBody>
             
            </CCard>          
          </CCol>        
        </CRow>
      </>;
        default:
          return 'Unknown stepIndex';
      }
     
    }
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div className="text-center">
              <Typography className={classes.instructions} >Thanks for the PO ref:<span>PO_20200226232</span></Typography>
              
              <Button variant="contained" color="secondary" className="float-right buttmar" onClick={handleReset}>New PO</Button>
              <Link to="/purchase/purchase-order"><Button variant="contained" color="primary" className="float-right buttmar mx-2">PO List</Button></Link>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className="text-right">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                  variant="contained"
                  className="fontnsize"
                >
                  Back
                </Button>
                <Button variant="contained" className="mx-2" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Add PO' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  export default AddPurchaseOrderList