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
  CRow, CCardFooter, CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react';


const SalesInvoice = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between pur-invoice-details">
              <div className="comp-name">
                <CImg className="invoice-logo" height={60} src={'avatars/inventory.png'} alt="mInventory" />
                <p><label>Company Name :</label> <span>ABC</span></p>
                <p><label>Address :</label> <span>ABC, 12s, UK</span></p>
                <p><label>Phone Number :</label> <span>1236547890</span></p>
                <p><label>Email Id :</label> <span>@gmail.com</span></p>
              </div>
              <div className="comp-name mt-5">
                <p><label>Order Number :</label> <span>#123ABC</span></p>
                <p><label>Date :</label> <span>12 Jan, 2021</span></p>
              </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="4" className="mt-1">
                    <CLabel htmlFor="text-input">Supplier Name : </CLabel>
                    <span> ABC</span>
                  </CCol>
                  <CCol xs="12" md="4" className="mt-1">
                    <CLabel htmlFor="text-input">Supplier Order Number :</CLabel>
                    <span> 123364</span>
                  </CCol>
                  <CCol xs="12" md="4" className="mt-1">
                    <CLabel htmlFor="text-input">Phone Number :</CLabel>
                    <span> 1236547890</span>
                  </CCol>
                  <CCol xs="12" md="8" className="mt-1">
                    <CLabel htmlFor="textarea-input">Supplier Address :</CLabel>
                    <span> Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text</span>
                  </CCol>

                  <CCol xs="12" md="4" className="mt-1">
                    <CLabel htmlFor="text-input">Email Id : </CLabel>
                    <span>mInventory@info.com</span>
                  </CCol>
                </CFormGroup>

                <CRow>
                  <CCol lg="12">
                    <CCard>
                      <CCardHeader className="d-flex justify-content-between align-items-center">
                        <h5>SALES INVOICE DETAILS  </h5>
                      </CCardHeader>
                      <CCardBody>
                        <div className="table-responsive">
                          <table class="table purchase-invoice-table">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th width="30%">Product Name</th>
                                <th>Qty</th>
                                <th>UOM</th>
                                <th>Unit Price</th>
                                <th width="10%">Discount</th>
                                <th>Sub Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>Book Shelves</td>
                                <td>2</td>
                                <td>Kg</td>
                                <td>$ 10.00</td>
                                <td>$ 00.00</td>
                                <td>$ 4215</td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <td>Book Shelves</td>
                                <td>2</td>
                                <td>Kg</td>
                                <td>$ 10.00</td>
                                <td>$ 00.00</td>
                                <td>$ 4251</td>
                              </tr>
                              <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Sub-Total</th>
                                <th>$ 24,200.00</th>
                              </tr>
                              <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Tax - Rate</th>
                                <th>$ 605.00 (2.5%)</th>
                              </tr>
                              <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Total</th>
                                <th>$ 24,805.00</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg="12">
                    <Link to="/">
                      <CButton type="submit" size="" color="primary" className=""><CIcon name="cil-print" /> Print</CButton>
                    </Link>
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

export default SalesInvoice
