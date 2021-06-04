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
    {id: 0, date:'01 jan 2021', Product_name: 'crosin', Supplier_Name: 'Yash Suppliers', Available_QTY: '2',Selling_Price: '$20',Purchase_Price:"$25"},
    {id: 1, date:'01 jan 2021', Product_name: 'Power 999',Supplier_Name: 'Samartha Suppliers',Available_QTY: '4',Selling_Price: '$30',Purchase_Price:"$40"}
  ]

const fields = [
    { key: 'date' },    
    { key: 'Product_name'},
    { key: 'Supplier_Name'},
    // { key: 'Company'},
    // { key: 'Description'},
    { key: 'Available_QTY'}, 
    { key: 'Selling_Price'},
    { key: 'Purchase_Price'}, 
    // { key: 'Billed_Qty'},
    // { key: 'Received_Qty'},
    // { key: 'Advance_Payment'},  
    // { key: 'Sub_Total'},    
]


const PurchasePaymentReport = () => {  
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Stock Report </h4> 
                            {/* <Link to="/payments/add-payment">
                                <CButton size="md"  color="success" className="ml-auto">+ Add Payment</CButton>
                            </Link>                            */}
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

export default PurchasePaymentReport;
