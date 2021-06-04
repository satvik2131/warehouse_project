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
    {id: 0, date:'01 jan 2021', P_ID: 'PO201', P_name: 'Cap', Qty: '1', UOM: 'kg', Category: 'geueu', Store_Name: 'Samarth', P_Rate: '$ 200', S_Rate: '$400'},
    {id: 1, date:'01 jan 2021', P_ID: 'P0202', P_name: 'Sunglasses', Qty: '2', UOM: 'gm', Category: 'hbabhb', Store_Name: 'Shree Radhe', P_Rate: '$ 100', S_Rate: '$200'}
  ]

const fields = [
    { key: 'P_ID'},
    { key: 'date' },
    { key: 'P_name'},
    { key: 'Qty'},
    { key: 'UOM'},
    { key: 'Category'},
    { key: 'Store_Name'},
    { key: 'P_Rate'},
    { key: 'S_Rate'},
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]


const StockList = () => {
    //const  = useState([])

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Stock </h4>                            
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

export default StockList;
