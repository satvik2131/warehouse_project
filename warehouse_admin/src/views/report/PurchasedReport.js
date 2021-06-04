import React ,{useRef} from 'react'
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
    {id: 0, date:'01 jan 2021', Supplier_Name: 'Yash Suppliers',Quantity: '2',Purchase_Price: '90.00',Paid_Amount:"90.00"},
    {id: 1, date:'01 jan 2021',Supplier_Name: 'Samartha Suppliers', Quantity: 'New Old Company',Purchase_Price: '190.00',Paid_Amount:"190.00"}
  ]

const fields = [
    { key: 'date' },    
    { key: 'Supplier_Name'},
    { key: 'Quantity'},
    { key: 'Purchase_Price'},
    { key: 'Paid_Amount'}, 
     
]
const PurchasedReport = () => {  
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Purchased Report </h4>                                                        
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

export default PurchasedReport;



