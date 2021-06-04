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
    { id: 0, Brand_ID: '789456123',Brand_Name: 'Addidas', Brand_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    { id: 1, Brand_ID: '123654789', Brand_Name: 'Puma',  Brand_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
]

const fields = [
    { key: 'Brand_ID'},
    { key: 'Brand_Name'},
    // { key: 'Product_Name'},
    // { key: 'Quantity'},
    { key: 'Brand_description'},          
    
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const Brand = () => {    

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Brand </h4>
                            <Link to="/system/add-brand">
                                <CButton size="md" color="success" className="ml-auto">+ Add Brand</CButton>
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

export default Brand;
