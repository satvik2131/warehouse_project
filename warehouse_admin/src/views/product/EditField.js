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

const EditField = () => {
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Edit Field</h4>
              <Link to="/cb-form">
              <CButton size="md" className="ml-auto btn_orange"><KeyboardBackspaceIcon /></CButton>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>                
                <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Family</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="" /> 
                  </CCol>  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Sub-Family</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="" /> 
                  </CCol>                                  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="text-input">Tital</CLabel>
                   <CInput id="text-input" name="text-input" placeholder="" /> 
                  </CCol>                
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="reset" size="" color="danger" className="mr-2"><CIcon name="cil-ban" /> Reset</CButton>
              <CButton type="submit" size="" color="success" className="ml-2"><CIcon name="cil-scrubber" /> Edit Field</CButton>              
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}

export default EditField;
