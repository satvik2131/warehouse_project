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
// import { DocsLink } from 'src/reusable'

const AddRate = () => {
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add Rate</h4>
              <Link to="/stock/rate-list">
                <Button variant="contained" size="" color="primary"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>                  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Date*</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Product Id*</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="e.g:-#HJRF1234" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Product Name*</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="e.g:Addidas" /> 
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Weight</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="1234@VGHJ" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Unit Price*</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="1234@VGHJ" />                    
                  </CCol>
                  
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Discount* </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>  
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Tax* </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>                      
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Add Rate</CButton>
              <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}

export default AddRate;
