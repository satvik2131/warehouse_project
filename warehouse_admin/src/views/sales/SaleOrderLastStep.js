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
    {id: 0, date:'01 jan 2021', Product_name: 'PO201', SO_ID: '1000', Customer_name: 'John Michale', total_price: '$ 20000.00'},
    {id: 1, date:'01 jan 2021', Product_name: 'SamppaPO201', SO_ID: '2000', Customer_name: 'Michale', total_price: '$ 100.00'}
  ]

const fields = [
    { key: 'SO_ID'},
    { key: 'date'},
    { key: 'Product_name'},    
    { key: 'Customer_name'},
    { key: 'total_price'},
       
]


const SaleOrderLastStep = () => {
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

export default SaleOrderLastStep;
