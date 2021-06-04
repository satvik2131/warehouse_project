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
import CIcon from '@coreui/icons-react'

const usersData = [
    {id: 0, date:'01 jan 2021', Order_ID: 'crosin', Item_Name: 'Yash Suppliers', Quantity: '2',Rate: '$20',Tota_Amount:"10",Status: '10'},
    {id: 1, date:'01 jan 2021', Order_ID: 'Power 999',Item_Name: 'Samartha Suppliers',Quantity: '4',Rate: '$30',Tota_Amount:"20",Status: '18'}
  ]

const fields = [
    { key: 'date' },    
    { key: 'Order_ID'},
    { key: 'Item_Name'},
    { key: 'Quantity'}, 
    { key: 'Rate'}, 
    { key: 'Tota_Amount'},
    { key: 'Status'},
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    },  
       
]


const PaymentForPurchase = () => {  

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Payment For Purchase</h4>                                                      
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
                                                    <CButton size="sm"  color="success" className="ml-1">
                                                        <CIcon name="cil-pencil" color="primary"/>
                                                    </CButton>
                                                    <CButton size="sm"  color="danger" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary"/>
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

export default PaymentForPurchase;
