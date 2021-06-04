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
import RatingTable from './RatingTable'

const Rating = () => { 
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Rating</h4>  
               <Link to="/rank-calculation">
                 <CButton size="md" className="ml-auto btn_orange"><KeyboardBackspaceIcon/></CButton>
              </Link> 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row>
                <CCol xs="12" md="4" className="mt-2 mb-2">
                     <CLabel htmlFor="text-input">CB Name </CLabel> 
                    <CInput id="text-input" name="text-input" placeholder="" disabled  value="Wade Warren"/>                    
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>           
          </CCard>          
        </CCol>        
      </CRow>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <RatingTable />
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Rating;