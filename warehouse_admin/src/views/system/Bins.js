import React from 'react'
import { Link } from 'react-router-dom'
import {
    CBadge,
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
    { id: 0, Bins_ID:'B1' , Bins_Name: 'Cadbery',Product_Name: 'Dairy Milk', Store_Name: 'Yash Mini Market'},
    { id: 1, Bins_ID:'B2 ', Bins_Name: 'Parle', Product_Name: '5 Star',  Store_Name: 'Kapila Choci Chips'}
]

const fields = [
    { key: 'Bins_ID'},
    { key: 'Bins_Name'},
    { key: 'Store_Name'}, 
    {key: 'Product_Name'},        
   
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const Bins = () => {
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Bins </h4>
                            <Link to="/system/add-bins">
                                <CButton size="md" color="success" className="ml-auto">+ Add Bins</CButton>
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
                                scopedSlots={{                                   
                                    'show_details':
                                        () => {
                                            return (
                                                <td className="py-2 d-flex">
                                                    <CButton size="sm" color="success" className="ml-1">
                                                        <CIcon name="cil-pencil" color="primary" />
                                                    </CButton>
                                                    <CButton size="sm" color="danger" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary" />
                                                    </CButton>
                                                </td>
                                            )
                                        },
                                        
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default Bins;
