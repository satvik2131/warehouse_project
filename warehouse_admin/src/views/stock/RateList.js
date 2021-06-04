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
    {id: 0, date:'01 jan 2021', Product_ID: 'PO201', Product_name: 'crosin',  Weight: '50gm',Unit_Price: '$40',Tax: '$40',Discount: 'NA'},
    {id: 1, date:'01 jan 2021', Product_ID: 'P0202',  Product_name: 'Power 999',Weight: '60gm', Unit_Price: '$64',Tax: '$64',Discount: '5%'}
  ]

const fields = [
    { key: 'Product_ID'},
    { key: 'date' },    
    { key: 'Product_name'},
    { key: 'Weight'},
    { key: 'Unit_Price'},
    { key: 'Tax'}, 
    { key: 'Discount'},    
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const RateList = () => {
    //const  = useState([])

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Rate </h4> 
                            <Link to="/stock/add-rate">
                                <CButton size="md"  color="success" className="ml-auto">+ Add Rate</CButton>
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

export default RateList;
