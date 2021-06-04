import React from 'react'
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
    {id: 0, date:'01 jan 2021', Product_name: 'PO201', PO_code: '1000', supplier_name: 'John Michale', total_price: '$ 20000.00'},
    {id: 1, date:'01 jan 2021', Product_name: 'SamppaPO201', PO_code: '2000', supplier_name: 'Michale', total_price: '$ 100.00'}
  ]

const fields = [
    { key: 'date'},
    { key: 'Product_name'},
    { key: 'PO_code'},
    { key: 'supplier_name'},
    { key: 'total_price'},
       
]


const PurchaseOrderLastStep = () => {
    return (
        <>
            <CRow>
                <CCol lg="12">                   
                        
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped                                                           
                                hover                                                          
                                                            
                            />
                        </CCardBody>                    
                </CCol>
            </CRow>
        </>
    )
}

export default PurchaseOrderLastStep;
