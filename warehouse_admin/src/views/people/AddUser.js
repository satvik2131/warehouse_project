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
  CInputCheckbox
} from '@coreui/react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Checkbox from '@material-ui/core/Checkbox';




const AddUser = () => {

  return (
    <>     
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add User</h4>
              <Link to="/people/user-list">
              <Button variant="contained" size="" color="primary" ><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CForm action="" method="post" className="form-horizontal">
            <CCardBody>            
                <CFormGroup row>                  
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Name" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="email-input">Email</CLabel>
                    <CInput type="email" id="email-input" name="email-input" placeholder="e.g:-abc4@gmail.com" />                    
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Phone</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="741258963" />                    
                  </CCol>   
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Company</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="xyz pvt ltd" />                    
                  </CCol> 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Gender </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Other</option>
                    </CSelect>
                  </CCol>               
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">City </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">User Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="abcstar" />                    
                  </CCol> 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="password-input">Password</CLabel>
                    <CInput type="password" id="password-input" name="password-input" placeholder="Password" />                    
                  </CCol>
                  {/* <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="password-input">Confirm Password</CLabel>
                    <CInput type="password" id="password-input" name="password-input" placeholder="Confirm Password" />                    
                  </CCol> */}
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Customer</option>
                      <option value="2">User</option>
                      <option value="3">Supplier</option>
                      <option value="4">Transporter</option>
                    </CSelect>
                  </CCol> 
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                   <CLabel htmlFor="select">User Group </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Admin</option>  
                      <option value="2">Manager</option>
                      <option value="3">Supervisor</option>
                      <option value="4">Customer</option>
                      <option value="5">Supplier</option>
                      <option value="6">Transporter</option>
                      <option value="7">Sale Manager</option>
                      <option value="8">Purchase Manager</option> 
                      <option value="9">Store Keeper</option>
                    </CSelect>
                  </CCol> 

                  <CCol md="12" className="mt-2">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1">Notify User By Email</CLabel>
                    </CFormGroup>
                  </CCol>                           
                </CFormGroup>             
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Add User</CButton>
              <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
            </CForm>
           
          </CCard>          
        </CCol>        
      </CRow>
    </>
  )
}

export default AddUser;
