import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,   
    CRow,   
} from '@coreui/react'
import AddPurchaseOrderList from '../purchase/AddPurchaseOrderList'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

const AddPurchaseOrder = () => {

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Add Purchase Order </h4>                                                      
                            <h6>PO Code : #PO123645</h6>
                            <Link to="/purchase/purchase-order">
                              <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
                            </Link>
                        </CCardHeader>
                        <CCardBody>
                            <AddPurchaseOrderList />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default AddPurchaseOrder
