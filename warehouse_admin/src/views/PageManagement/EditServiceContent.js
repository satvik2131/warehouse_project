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
  CTextarea,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Checkbox from '@material-ui/core/Checkbox';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const EditServiceContent = () => { 
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Edit Service Content </h4>    
              <Link to="/Page-Management/manage-service">
                                <CButton size="md" className="ml-auto btn_orange"><KeyboardBackspaceIcon /> </CButton>
                            </Link>     
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>

                <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Heading </CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="file-input">Image </CLabel>
                    <CInput type="file" id="file-input" name="file-input" placeholder="" />                    
                  </CCol>
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                        <CLabel htmlFor="textarea-input">Content</CLabel>
                          <CTextarea 
                            name="textarea-input" 
                            id="textarea-input" 
                            rows="4"
                            placeholder="Enter Here..." 
                          />
                      </CCol>  
                     
                       
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
            <CButton type="reset" size="" color="danger" className="mr-2"><CIcon name="cil-ban" /> Reset</CButton>
              <CButton type="submit" size="" color="success" className="ml-2"><CIcon name="cil-scrubber" /> Save</CButton>
              
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}
export default EditServiceContent;
