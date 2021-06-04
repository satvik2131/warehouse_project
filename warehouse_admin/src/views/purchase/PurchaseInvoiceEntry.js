import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CDataTable,
  CLabel,
  CRow,CCardFooter
} from '@coreui/react'
import AddInvoiceDetails from "./AddInvoiceDetails"

const PurchaseInvoiceEntry = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex align-item-center justify-content-between">
              <h4>Purchase Invoice Entry</h4>
              <h6 >Purchase Invoice Code : #PO123645</h6>
              <div></div>
            </CCardHeader>
            <CCardBody>   
            <CRow >
              <CCol lg="12">
                <AddInvoiceDetails />
              </CCol>              
            </CRow>             
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PurchaseInvoiceEntry
