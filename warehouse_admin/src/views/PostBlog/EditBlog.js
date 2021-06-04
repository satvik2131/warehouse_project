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
import CIcon from '@coreui/icons-react'
import Checkbox from '@material-ui/core/Checkbox';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const EditBlog = () => { 
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Edit Blogs</h4>    
              <Link to="/blogs">
                    <CButton size="md" className="ml-auto btn_orange"><KeyboardBackspaceIcon /> </CButton>
             </Link>     
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">                
                <CFormGroup row>               
                      <CCol xs="12" md="6" className="mt-2 mb-2">
                      <h5 className="mb-3">Choose blog section</h5>
                      <ul className="resolution_n_products pl-0">
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Warehouse security </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Warehouse Management </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Warehouse Operation </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox                            
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />  
                        <CLabel htmlFor="select" className="fontnsize">Warehouse Services </CLabel> </div>
                        </li>                                           
                      </ul>                      
                    </CCol>
                    <CCol xs="12" md="12" className="mt-2 mb-2">
                    <CLabel htmlFor="file-input">Attach Blog Image </CLabel>
                    <CInput type="file" id="file-input" name="file-input" placeholder="" />                    
                  </CCol>  
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                        <CLabel htmlFor="textarea-input">Blog Content</CLabel>
                          <CTextarea 
                            name="textarea-input" 
                            id="textarea-input" 
                            rows="3"
                            placeholder="Enter Here..." 
                          />
                      </CCol>         
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
            <CButton type="reset" size="" color="danger" className="mr-2"><CIcon name="cil-ban" /> Reset</CButton>
              <CButton type="submit" size="" color="success" className="ml-2"><CIcon name="cil-scrubber" /> Save Blog</CButton>
              
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}
export default EditBlog;
