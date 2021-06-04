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

const EditPlan = () => { 
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Edit Plan Details</h4>      
              <Link to="/Subscription">
              <CButton size="md" className="ml-auto btn_orange"><KeyboardBackspaceIcon /> </CButton>
                </Link>    
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">                
                <CFormGroup row>    
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Plan ID </CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Plan Type </CLabel>
                        <CSelect custom name="select" id="select" className="fontnsize">
                          <option value="0">Please select Plan</option>
                          <option value="1">Platinum</option>
                          <option value="2">Gold</option>    
                          <option value="3">Silver</option>                       
                        </CSelect>
                      </CCol>  
                                    
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="textarea-input">Plan Discription </CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="6"
                      placeholder="Enter Text Here..." 
                    />
                  </CCol> 
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Status</CLabel>
                        <CSelect custom name="select" id="select" className="fontnsize">                        
                          <option value="Active" >Active</option>
                          <option value="Inactive">Inactive</option>                                               
                        </CSelect>
                      </CCol>                               
                  
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
            <CButton type="reset" size="" color="danger" className="mr-2"><CIcon name="cil-ban" /> Reset</CButton>
              <CButton type="submit" size="" color="success" className="ml-2"><CIcon name="cil-scrubber" /> Save Plan</CButton>
              
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}
export default EditPlan;
