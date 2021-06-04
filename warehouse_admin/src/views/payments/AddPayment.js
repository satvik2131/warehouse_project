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

const AddPayment = () => {
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add Payment</h4>
              <Link to="/payments/advance-payments">
              <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>  
                <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />                    
                  </CCol> 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Product Name </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol> 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Supplier Name </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please Name</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>              
                  {/* <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Product Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Name" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Supplier Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="e.g:-HTC suppliers" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Company</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="NV Tech" />                    
                  </CCol> */}
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Advance Payment</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="$100" /> 
                  </CCol>
                  {/* <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Unit Price</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="$100/per" /> 
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">QTY</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="1" /> 
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Unit Price</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="$100" /> 
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Billed Qty</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="$100" /> 
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Recevied Qty</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="$100" /> 
                  </CCol>                 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="file-input">Choose Image</CLabel>
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="textarea-input">Description</CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="6"
                      placeholder="Enter Product Description Here..." 
                    />
                  </CCol>                   */}
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Add Payment</CButton>
              <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}

export default AddPayment;
