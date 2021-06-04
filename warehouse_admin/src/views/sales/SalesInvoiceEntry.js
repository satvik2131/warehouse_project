import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import AddSaleInvoiceDetails from "./AddSaleInvoiceDetails"

const SalesInvoiceEntry = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex align-items-center justify-content-between">
              <h4>Sale Invoice Entry</h4>
              <h6 >Sale Invoice Code : #PO123645</h6>
              <div></div>
            </CCardHeader>
            <CCardBody>   
            <CRow >
              <CCol lg="12">
                <AddSaleInvoiceDetails />
              </CCol>              
            </CRow>             
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SalesInvoiceEntry