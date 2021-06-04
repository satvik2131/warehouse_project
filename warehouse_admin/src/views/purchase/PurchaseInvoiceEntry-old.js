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

import CIcon from '@coreui/icons-react';

const usersData = [
  { id: 0, product_name: 'Book Shelves', PO_rate: '1000', PO_qty: '2', UOM: '2', tax: '2 %', discount: '2 %', total_amount: '$ 20000.00' }
]

const fields = [

  { key: 'product_name', _style: { width: '20%' } },
  { key: 'PO_rate', _style: { width: '15%' } },
  { key: 'PO_qty', _style: { width: '10%' } },
  { key: 'UOM', _style: { width: '10%' } },
  { key: 'tax', _style: { width: '15%' } },
  { key: 'discount', _style: { width: '15%' } },
  { key: 'total_amount', _style: { width: '15%' } },


]

const PurchaseInvoiceEntry = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h2>Purchase Invoice Entry</h2>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">PURCHASE  DATE *</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">INVOICE  DATE *</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Purchse Invoice Code</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="1245801" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">SUPPLIER NAME *</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">SUPPLIER  CONTACT *</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Enter Mobile Number" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">INVOICE  NUMBER *</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="145001" />
                  </CCol>
                  <CCol xs="12" md="8" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">SUPPLIER ADDRESS *</CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="3"
                      placeholder="Enter Address..."
                    />
                  </CCol>
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                    <CButton type="submit" size="" color="primary" className="mr-2"><CIcon name="cil-scrubber" /> Save</CButton>
                    <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
                  </CCol>
                </CFormGroup>

                <CRow>
                  <CCol lg="12">
                    <CCard>
                      <CCardHeader className="d-flex justify-content-between align-items-center">
                        <h5>PURCHASE  INVOICE DETAILS  </h5>
                      </CCardHeader>
                      <CCardBody>
                        <CDataTable
                          items={usersData}
                          fields={fields}
                          striped
                          tableFilter
                          itemsPerPageSelect
                          itemsPerPage={5}
                          hover
                          sorter
                          pagination

                        />
                      </CCardBody>
                      <CCardFooter>
                        <Link to="/purchase/purchase-invoice">
                          <CButton type="submit" size="" color="secondary" className="mr-2"><CIcon name="cil-print" /> Print</CButton>
                        </Link>
                      </CCardFooter>
                    </CCard>
                  </CCol>
                </CRow>

              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PurchaseInvoiceEntry
