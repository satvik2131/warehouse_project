import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom'

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



const EditPersonalDetails = () => {
  const history = useHistory();
  
  return (
    <CRow>
      <CCol xs="12" md="12" >
        <CCard>
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Update Personal Details </h4>
            <CButton size="md" className="ml-auto btn_orange" onClick={()=>history.goBack()}><KeyboardBackspaceIcon /></CButton>
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <h5 className="mb-2">Personal Details Form</h5>
              <CFormGroup className="row">
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">First Name</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Last Name</CLabel>
                  <CInput className="fontnsize" id="text-input" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Password</CLabel>
                  <CInput className="fontnsize" id="text-input" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">RUT</CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Phone </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />  
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Cellular</CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Mail </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />  
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
export default EditPersonalDetails;
