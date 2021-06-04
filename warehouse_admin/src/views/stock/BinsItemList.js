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
    {id: 0, date:'01 jan 2021', Product_ID: 'PO201', Product_name: 'crosin', Store_name: 'Virendra Medico', Supplier: 'Kabra Suppliers',Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {id: 1, date:'01 jan 2021', Product_ID: 'P0202',Product_name: 'Power 999', Store_name: 'Rohit Medico',  Supplier: 'Kabra Suppliers',Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  ]

const fields = [
    { key: 'date' },
    { key: 'Product_ID'},
    { key: 'Product_name'},
    { key: 'Store_name'},    
    { key: 'Supplier'},   
    { key: 'Description'}, 
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const BinsItemList = () => {
    //const  = useState([])

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Bins </h4>                                                      
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

export default BinsItemList;
