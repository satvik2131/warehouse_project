import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Link, useHistory } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {
  CButton,
  CCard, CCardHeader,
  CCardBody, CCardFooter,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CTextarea,
  CInputFile,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const EditCompanyDetails = () => {
  const [country, setcountry] =useState("Chile");
  const [Region,Setregion]=useState(country)

  const history = useHistory();


  return (
    <CRow>
      <CCol xs="12" md="12" >
        <CCard>
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Update Company Details </h4>
            <CButton size="md" className="ml-auto btn_orange" onClick={()=>history.goBack()}><KeyboardBackspaceIcon /></CButton>
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <h5 className="mb-2">Company Form</h5>
              <CFormGroup className="row">
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Business Name</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">RUTH</CLabel>
                  <CInput className="fontnsize" id="text-input" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="textarea-input">Direction</CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="2"
                    placeholder="Enter Here..."
                  />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Select Commune </CLabel>
                        <CSelect custom name="select" id="select" className="fontnsize">
                          <option value="0">Please select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>                          
                        </CSelect>
                      </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Select Region </CLabel>
                       <RegionDropdown
                          country={country}
                          value={Region}
                          onChange={(val) => Setregion(val)}
                          className="fontnsize form-control" />   
                      </CCol>
                      <CCol xs="12" md="6" className="mt-2 mb-2">
                       <CLabel htmlFor="select" className="fontnsize">Select Country </CLabel>
                       <CountryDropdown
                          value={country}
                          onChange={(val) => setcountry(val)}
                          className="fontnsize form-control" disabled/>                         
                      </CCol> 
               
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Phone</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2 d-flex justify-content-between">
                <div className="w-91">
                  <CLabel htmlFor="select" className="fontnsize">Legal Rep-1 </CLabel>
                  <CSelect custom name="select" id="select" className="fontnsize">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CSelect>
                  </div>
                  <div className="rounded_btn"> 
                  <Link to="/company-and-contact/edit-personal-details">               
                      <Button variant="contained" size="" color="primary" className="mr-2 btn"><AddIcon /> </Button>                   
                    </Link> 
                  </div>
                </CCol>  
                <CCol xs="12" md="6" className="mt-2 mb-2 d-flex justify-content-between">
                <div className="w-91">
                  <CLabel htmlFor="select" className="fontnsize">Legal Rep-2 </CLabel>
                  <CSelect custom name="select" id="select" className="fontnsize">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CSelect>
                  </div>
                  <div className="rounded_btn"> 
                  <Link to="/company-and-contact/edit-personal-details">                  
                      <Button variant="contained" size="" color="primary" className="mr-2 btn"><AddIcon /> </Button>                   
                      </Link>
                  </div>
                </CCol>                
                <CCol xs="12" md="6" className="mt-2 mb-2 d-flex justify-content-between">
                <div className="w-91">
                  <CLabel htmlFor="select" className="fontnsize">Contact </CLabel>
                  <CSelect custom name="select" id="select" className="fontnsize">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CSelect>
                  </div>
                  <div className="rounded_btn">     
                  <Link to="/company-and-contact/edit-personal-details">                  
                      <Button variant="contained" size="" color="primary" className="mr-2 btn"><AddIcon /> </Button>                   
                  </Link>
                  </div>
                </CCol>
                {/* <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="select" className="fontnsize">Direction </CLabel>
                  <CSelect custom name="select" id="select" className="fontnsize">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CSelect>
                </CCol> */}
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Contact Position</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Owners</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                
              </CFormGroup>
            
              <CCardFooter className="text-center">
                <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CForm>


          </CCardBody>


        </CCard>
      </CCol>
    </CRow>
  );
}
export default EditCompanyDetails;
