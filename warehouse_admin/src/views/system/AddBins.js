import React,{ useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {    
    CCard,
    CCardBody,   
    CCol,  
    CForm,
    CFormGroup,
    CCardHeader,      
    CInput,   
    CLabel,
    CSelect,
    CRow,
    CSwitch
  } from '@coreui/react'

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
    return ['Bins Details', 'Product Details', 'Conversion'];
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
                      <CCol xs="12" md="6" className="mt-2 mb-2">
                        <CLabel className="fontnsize" htmlFor="text-input">Bins ID</CLabel>
                        <CInput className="fontnsize"  type="text" id="text-input" name="text-input" placeholder="" />                                         
                      </CCol>
                      <CCol xs="12" md="6" className="mt-2 mb-2">
                        <CLabel className="fontnsize" htmlFor="text-input">Bins Name</CLabel>
                        <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
                      </CCol>                      
                      <CCol xs="12" md="6" className="mt-2 mb-2">
                        <CLabel htmlFor="text-input" className="fontnsize">Store Name</CLabel>
                        <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
                      </CCol>
                      <CCol xs="12" md="6" className="mt-2 mb-2">
                        <CLabel htmlFor="text-input" className="fontnsize">Product Name</CLabel>
                        <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
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
                    <CLabel htmlFor="text-input" className="fontnsize">Product ID</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
                  </CCol> 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input" className="fontnsize">Product Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input" className="fontnsize">Available Quantity</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input" className="fontnsize">UOM</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" className="fontnsize" />                    
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
                <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input" className="fontnsize">Conversion Quantity</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" className="fontnsize"/>                    
                  </CCol>  
                <CCol xs="12" md="4" className="mt-2 mb-2">
                   <CLabel htmlFor="select" className="fontnsize">Conversion UOM </CLabel>
                    <CSelect custom name="select" id="select" className="fontnsize">
                      <option value="0">Please select</option>
                      <option value="1">VAT</option>
                      <option value="2">GST</option>                     
                    </CSelect>
                  </CCol> 
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input" className="fontnsize">Conversion Value</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" className="fontnsize" />                    
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
  
  const AddBins=()=> {   
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
        <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add Bins</h4>              
              <Link to="/system/bins">
              <Button variant="contained" size="" color="primary" ><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
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
              <Typography className={classes.instructions}>Convert Successfully</Typography>
              <Button className="mb-2" variant="contained" color="warning" onClick={handleReset}>Refresh</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className="text-right mb-4 mr-4">
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
      </CCard>
    </CCol>
  </CRow>
    );
  }
  export default AddBins;