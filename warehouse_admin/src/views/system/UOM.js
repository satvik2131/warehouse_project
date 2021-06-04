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
    { id: 0, Unit_Name: 'Per', product: '0', Unit_Details: '1 item'},
    { id: 1, Unit_Name: 'Gram', product: '10', Unit_Details: 'Peice in Gram'}
]

const fields = [
    { key: 'Unit_Name'},
    { key: 'product'},
    { key: 'Unit_Details'},      
    {
        key: 'state',
        label: 'Status',      
    },
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }
]


const UOM = () => {
    //const  = useState([])

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Unit Of Measurement </h4>
                            <Link to="/system/add-UOM">
                                <CButton size="md" color="success" className="ml-auto">+ Add UOM</CButton>
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
                                        'state':()=>{
                                            return(
                                            <td>
                                                <CBadge className="mr-1" color="success">Active</CBadge>
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

export default UOM
