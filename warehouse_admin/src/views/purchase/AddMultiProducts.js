import React, { useState, useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CCol,
    CDataTable,
    CRow,
} from '@coreui/react'
import Checkbox from '@material-ui/core/Checkbox';

const usersData = [
    { id: 0, Product_name: 'Sunglasses', UOM: 'kg', Quantity: '10', Approved_Qty: '8', Remaining_Qty: '2', Rate: '$10', Amount: '$100' }

]
const fields = [   
    { key: 'Product_name' },
    { key: 'UOM' },
    { key: 'Quantity' },
    { key: 'Approved_Qty' },
    { key: 'Remaining_Qty' },
    { key: 'Rate' },
    { key: 'Amount' }
]
const AddMultiProducts = () => {
    return (
        <>
            <CRow>
                <CCol lg="12">
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped                                                    
                                hover                                                               
                                className="fontnsize"                               
                            />
                </CCol>
            </CRow>
        </>
    )
}

export default AddMultiProducts
