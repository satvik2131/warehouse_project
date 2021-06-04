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
  CLabel,
  CRow, CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react';


const AdvanceReceipt = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between pur-invoice-details">
              <div className="comp-name">
                <CImg className="invoice-logo" height={60} src={'avatars/4.svg'} alt="mInventory" />
                <p><label>Company Name :</label> <span>ABC</span></p>
                <p><label>Address :</label> <span>ABC, 12s, UK</span></p>
                <p><label>Phone Number :</label> <span>1236547890</span></p>
                <p><label>Email Id :</label> <span>@gmail.com</span></p>
              </div>
              <div className="comp-name mt-5">
                <p><label>Receipt Number :</label> <span>#123ABC</span></p>
                <p><label>Date :</label> <span>12 Jan, 2021</span></p>
              </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="4" className="mt-1">
                    <CLabel htmlFor="text-input">Customer Name : </CLabel>
                    <span className="customer_name"> Harry</span>
                  </CCol>    
                </CFormGroup>
                <CRow>
                  <CCol lg="12">                                         
                     
                        <div className="table-responsive">
                          <table class="table purchase-invoice-table">
                            <thead>
                              <tr>
                                <th width="6%">#</th>
                                <th width="50%">Product Name</th>
                                {/* <th  width="6%">Qty</th>                                
                                <th  width="20%" className="text-center">Price</th> */}
                                <th  width="18%"  className="text-center">Advance Payment</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>1</th>
                                <td>Book Shelves</td>
                                {/* <td>2</td>                                
                                <td  className="text-center">$ 10.00</td>                                */}
                                <td  className="text-center">$ 20.00</td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <td>Book Shelves</td>
                                {/* <td>4</td>                                
                                <td  className="text-center">$ 10.00</td>                                */}
                                <td  className="text-center">$ 40.00</td>
                              </tr>
                              {/* <tr>                                
                                <td></td>
                                <td></td>
                                <td></td>
                                <th  className="text-center">Sub-Total</th>
                                <th  className="text-center">$ 60.00</th>
                              </tr> */}
                              {/* <tr>                                
                                <td></td>
                                <td></td>
                                <td></td>
                                <th  className="text-center">Tax - Rate</th>
                                <th  className="text-center">$ 1.5 (2.5%)</th>
                              </tr> */}
                              <tr>                                
                                
                                <td></td>
                                <th  className="text-center">Total</th>
                                <th  className="text-center">$ 60.00</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                                        
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg="12" className="text-center">
                    <Link >
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

export default AdvanceReceipt;
