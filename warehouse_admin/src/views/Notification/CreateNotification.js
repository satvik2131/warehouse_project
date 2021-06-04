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
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import CIcon from '@coreui/icons-react'

const CreateNotification = () => { 
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Creat notification</h4>         
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>    
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Subject </CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>                 
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="textarea-input">Text </CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="6"
                      placeholder="Enter Text Here..." 
                    />
                  </CCol>                 
                  
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
            <CButton type="reset" size="" color="danger" className="mr-2"><CIcon name="cil-ban" /> Reset</CButton>
              <CButton type="submit" size="" color="success" className="ml-2"><CIcon name="cil-scrubber" /> Send</CButton>
              
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}
export default CreateNotification;
