import React from 'react'
import { Link ,useHistory,useLocation} from 'react-router-dom'
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
import RankTable from './RankTable'

const Rank = () => { 

  const history = useHistory();
  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Rank</h4>                 
                 <CButton size="md" className="ml-auto btn_orange" onClick ={()=>history.goBack()}><KeyboardBackspaceIcon/></CButton>
              
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row>
                {/* <CCol xs="12" md="4" className="mt-2 mb-2">
                     <CLabel htmlFor="text-input">CB Name </CLabel> 
                    <CInput id="text-input" name="text-input" placeholder="" disabled  value="Wade Warren"/>                    
                  </CCol> */}
                  
                  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Select Categories </CLabel>
                        <CSelect custom name="select" id="select" className="fontnsize">
                          <option value="0">Please select</option>
                          <option value="1">Admin Close</option>
                          <option value="2">Web Page</option>    
                          <option value="3">Security</option>   
                          <option value="4">Flexibility</option>   
                          <option value="5">Services</option>   
                          <option value="6">Logistics Services</option>   
                          <option value="7">Staff Services</option> 
                          <option value="8">Description and Comments</option>                         
                        </CSelect>
                      </CCol> 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Percentage </CLabel>
                    <CInput id="text-input" name="text-input" placeholder="%" />                    
                  </CCol>                 
                                
                  
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
            <CButton type="reset" size="" color="danger" className="mr-2"><CIcon name="cil-ban" /> Reset</CButton>
              <CButton type="submit" size="" color="success" className="ml-2"><CIcon name="cil-scrubber" /> Update</CButton>              
            </CCardFooter>
          </CCard>          
        </CCol>        
      </CRow>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <RankTable />
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Rank;
