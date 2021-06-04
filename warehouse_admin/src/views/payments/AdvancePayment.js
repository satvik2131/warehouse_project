import React from 'react'
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

const usersData = [
    {id: 0, date:'01 jan 2021', Product_name: 'crosin', Supplier_Name: 'Yash Suppliers',Advance_Payment:"$100"},
    {id: 1, date:'01 jan 2021', Product_name: 'Power 999',Supplier_Name: 'Samartha Suppliers',Advance_Payment:"$200"}
  ]

const fields = [
    { key: 'date' },    
    { key: 'Product_name'},
    { key: 'Supplier_Name'},  
    // { key: 'QTY'}, 
    // { key: 'Unit_Price'}, 
    // { key: 'Billed_Qty'},
    // { key: 'Received_Qty'},
    // { key: 'Total'}, 
    { key: 'Advance_Payment'},  
       
]


const AdvancePayment = () => {  

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Advance Payment </h4> 
                            <Link to="/payments/add-payment">
                                <CButton size="md"  color="success" className="ml-auto">+ Advance Payment</CButton>
                            </Link>                           
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
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default AdvancePayment
