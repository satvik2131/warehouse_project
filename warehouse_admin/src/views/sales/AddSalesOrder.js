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
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AddSalesOrderList from '../sales/AddSalesOrderList'

const usersData = [
    {
        id: 0, P_name: '', UOM: '', SO_qty: '', SO_app_qty: '', SO_rem_qty: '', rate: '',
        amount: '', SO_date: '', SO_code: '', customer_name: '', store_name: '', pay_mode: '', note: '', SO_status: '', T_amount: ''
    },
    {
        id: 1, P_name: '', UOM: '', SO_qty: '', SO_app_qty: '', SO_rem_qty: '', rate: '',
        amount: '', SO_date: '', SO_code: '', customer_name: '', store_name: '', pay_mode: '', note: '', SO_status: '', T_amount: ''
    },
    {
        id: 2, P_name: '', UOM: '', SO_qty: '', SO_app_qty: '', SO_rem_qty: '', rate: '',
        amount: '', SO_date: '', SO_code: '', customer_name: '', store_name: '', pay_mode: '', note: '', SO_status: '', T_amount: ''
    }
]


const fields = [
    { key: 'P_name', _style: { width: '1%' } },
    { key: 'UOM', _style: { width: '1%' } },
    { key: 'SO_qty', _style: { width: '1%' } },
    { key: 'SO_app_qty', _style: { width: '1%' } },
    { key: 'SO_rem_qty', _style: { width: '1%' } },
    { key: 'rate', _style: { width: '1%' } },
    { key: 'amount', _style: { width: '1%' } },
    { key: 'SO_date', _style: { width: '1%' } },
    { key: 'SO_code', _style: { width: '1%' } },
    { key: 'customer_name', _style: { width: '1%' } },
    { key: 'store_name', _style: { width: '1%' } },
    { key: 'pay_mode', _style: { width: '1%' } },
    { key: 'note', _style: { width: '1%' } },
    { key: 'SO_status', _style: { width: '1%' } },
    { key: 'T_amount', _style: { width: '1%' } }
]



const AddSalesOrder = () => {

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Add Sales Order </h4>
                            <h6>SO Code : #PO123645</h6> 
                            <Link to="/sales/sales-order">
                               <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
                            </Link>                                                     
                        </CCardHeader>
                        <CCardBody>
                            <AddSalesOrderList />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default AddSalesOrder
