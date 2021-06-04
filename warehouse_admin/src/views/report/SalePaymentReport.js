import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CBadge
} from '@coreui/react'

const usersData = [
    {id: 0, date:'01 jan 2021', Invoice_ID: '21655161',Payment_Method: 'Debit Card',Note:"",Amount:"90.00"},
    {id: 1, date:'01 jan 2021', Invoice_ID: '65561165',Payment_Method: 'Gpay',Note:"",Amount:"90.00"}
  ]

const fields = [
    { key: 'Invoice_ID'},
    { key: 'date' },    
    { key: 'Type'},    
    { key: 'Payment_Method'},
    { key: 'Note'}, 
    { key: 'Amount'}
     
]


const SalePaymentReport = () => {  
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Sale Payment Report </h4>                                                        
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
                                    
                                    'Type':
                                        () => {
                                            return (
                                                <td className="py-2">
                                                    <CBadge className="mr-1" color="warning">Selled</CBadge>
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

export default SalePaymentReport;
