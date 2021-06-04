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
  CRow,
} from '@coreui/react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import CIcon from '@coreui/icons-react'

const AddUOM = () => { 
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add Unit Of Measurement</h4>              
              <Link to="/system/UOM">
              <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                
                <CFormGroup row>                  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">UOM Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Code Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Unit Details</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />                    
                  </CCol>                 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">                      
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>                      
                    </CSelect>
                  </CCol>                                      
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Add UOM</CButton>
              <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}

export default AddUOM;
