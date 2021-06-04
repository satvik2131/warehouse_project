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
    {id: 0, date:'01 jan 2021', Product_Name: 'Banana',Quantity: '12',Selling_Price: '90.00'},
    {id: 1, date:'01 jan 2021',Product_Name: 'Apple', Quantity: '14',Selling_Price: '190.00'}
  ]

const fields = [
    { key: 'date' },    
    { key: 'Product_Name'},
    { key: 'Quantity'},
    { key: 'Selling_Price'}, 
     
]


const SaleReport = () => {  
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Sale Report </h4>                                                        
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

export default SaleReport;
