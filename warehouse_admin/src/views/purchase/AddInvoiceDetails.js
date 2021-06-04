import React,{ useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import {  
    CButton,   
    CCard,
    CCardBody,   
    CCol,  
    CForm,
    CFormGroup,      
    CInput,   
    CLabel,
    CSelect,
    CRow,    
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react';

import PurchaseOrderLastStep from './PurchaseOrderLastStep';


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
  
  function getSteps() {
    return ['Invoice Header', 'Invoice Type', 'Purchase Order'];
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
                        <CLabel htmlFor="date-input" className="fontnsize">Purchase Date*</CLabel>
                        <CInput className="fontnsize"  type="date" id="date-input" name="date-input" placeholder="date" required/>                                         
                      </CCol>
                      <CCol xs="12" md="4" className="mt-2 mb-2">
                        <CLabel htmlFor="text-input" className="fontnsize">Purchase Code*</CLabel>
                        <CInput className="fontnsize" id="text-input" name="text-input" placeholder="#HJRF1234" className="text-left"/>                    
                      </CCol>
                      <CCol xs="12" md="4" className="mt-2 mb-2">
                        <CLabel htmlFor="date-input" className="fontnsize">Invoice Date*</CLabel>
                        <CInput className="fontnsize" type="date"  name="date-input" placeholder="#HJRF1234" className="text-left"/>                    
                      </CCol>
                      <CCol xs="12" md="4" className="mt-2 mb-2">
                        <CLabel htmlFor="text-input" className="fontnsize">Invoice Code*</CLabel>
                        <CInput className="fontnsize" id="text-input" name="text-input" placeholder="#HJRF1234" className="text-left"/>                    
                      </CCol>
                       
                      <CCol xs="12" md="4" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Supplier* </CLabel>
                        <CSelect custom name="select" id="select" className="fontnsize">
                          <option value="0">Please select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>                          
                        </CSelect>
                      </CCol>                     
                      <CCol xs="12" md="4" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Pay Mode* </CLabel>
                        <CSelect custom name="select" id="select" className="fontnsize">
                          <option value="0">Please select</option>
                          <option value="1">Credit</option>
                          <option value="2">UPI</option>                          
                        </CSelect>
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
                   <CLabel htmlFor="select" className="fontnsize">Invoice Type* </CLabel>
                    <CSelect custom name="select" id="select" className="fontnsize" >
                      <option value="0">Please select</option>
                      <option value="1">Direct</option>
                      <option value="2">Indirect</option>                     
                    </CSelect>
                  </CCol>   
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input" className="fontnsize">Notes</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
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
              <PurchaseOrderLastStep />
            </CCardBody>
           
          </CCard>          
        </CCol>        
      </CRow>
    </>;
      default:
        return 'Unknown stepIndex';
    }
   
  }
  
  const AddInvoiceDetails=()=> {   
    // const [item, ShowTable]= useState(false);
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
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
              {/* <Typography className={classes.instructions}>Thanks for the PO ref:<span>PO_20200226232</span></Typography> */}
              
                        <Link to="/purchase/purchase-invoice">
                          <CButton type="submit" size="" color="secondary" className="mr-2"><CIcon name="cil-print" /> Print</CButton>
                        </Link>
                      
              <Button variant="contained" color="secondary" onClick={handleReset}>New PI</Button>
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
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  export default AddInvoiceDetails;