import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
const usersData = [
    { id:1, Receipt_ID: '11345424', Date: '10/12/2020', Product_name: 'jeans', Customer_Name: 'Harry', Advance_Payment: '$100'},
    { id: 2,Receipt_ID: '778945615', Date: '10/12/2024', Product_name: 'T-shirt', Customer_Name: 'Nik', Advance_Payment: '$150'}
]

const fields = [
    { key: 'Receipt_ID' },
    { key: 'Date' },     
    { key: 'Product_name' },    
    { key: 'Customer_Name'},
    { key: 'Advance_Payment'},   
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }
]
    const AdvanceReceiptsList = () =>{      
    
        return (
            <>
                <CRow>
                    <CCol lg="12">
                        <CCard>
                            <CCardHeader className="d-flex justify-content-between align-items-center">
                                <h4>Advance Payment</h4>                         
                                {/* <Link to="/product/add-products">
                                    <CButton size="md" color="success" className="ml-auto">+ Add Product</CButton>
                                </Link> */} 
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={usersData}
                                    fields={fields}
                                    striped
                                    columnFilter
                                    tableFilter
                                    itemsPerPageSelect
                                    itemsPerPage={5}
                                    hover
                                    sorter
                                    pagination
                                    scopedSlots={{

                                        'show_details':
                                            () => {
                                                return (
                                                    <td className="py-2 d-flex"> 
                                                       <Link to="/receipts/advance-receipt">                                                  
                                                          <CButton size="sm" color="info" className="ml-1">
                                                              <RemoveRedEyeIcon/>
                                                          </CButton>    
                                                        </Link>                                                  
                                                        
                                                        <CButton size="sm" color="danger" className="ml-1">
                                                            <CIcon name="cil-trash"  />
                                                        </CButton>
                                                    </td>
                                                )
                                            }
                                    }}
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </>
        )
    }
export default AdvanceReceiptsList;