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
    {id: 0, date:'01 jan 2021', Product_ID: 'PO201', Store_name: 'Virendra Medico', Product_name: 'crosin', Supplier: 'Kabra Suppliers'},
    {id: 1, date:'01 jan 2021', Product_ID: 'P0202', Store_name: 'Rohit Medico', Product_name: 'Power 999', Supplier: 'Kabra Suppliers'}
  ]

const fields = [
    { key: 'Product_ID'},
    { key: 'date' },    
    { key: 'Store_name'},
    { key: 'Product_name'},
    { key: 'Supplier'},    
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const StoreList = () => {
    //const  = useState([])

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Store </h4> 
                            <Link to="/stock/add-store">
                                <CButton size="md"  color="success" className="ml-auto">+ Add Store</CButton>
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

export default StoreList;
