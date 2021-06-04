import React, { useState, useEffect } from 'react'
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
import Checkbox from '@material-ui/core/Checkbox';

const usersData = [
    { id: 0, product_name: 'Sunglasses', PO_Number: '12334', Ship_Date: '10/12/2020', Return_Date: '15/12/2020', Customer_Name: 'Nikhil', Seller_Name: 'Yogesh', Quantity: '1', UOM: 'gm', Cost: '100$', Total_Price: '120$' },
    { id: 1, product_name: 'Casing', PO_Number: '4698465', Ship_Date: '11/12/2020', Return_Date: '16/12/2020', Customer_Name: 'Harsh', Seller_Name: 'Yogesh', Quantity: '1', UOM: 'gm', Cost: '200$', Total_Price: '220$' },

]
const fields = [
    { key: 'Check_me', label: "", filter: false },
    { key: 'product_name' },
    { key: 'PO_Number' },
    { key: 'Ship_Date' },
    { key: 'Return_Date' },
    { key: 'Customer_Name' },
    { key: 'Seller_Name' },
    { key: 'Quantity' },
    { key: 'UOM' },
    { key: 'Cost' },
    { key: 'Total_Price' },

]




const MultipleReturns = () => {
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped                                
                                tableFilter
                                itemsPerPageSelect
                                itemsPerPage={5}
                                hover
                                sorter
                                pagination
                                scopedSlots={{

                                    'Check_me':
                                        () => {
                                            return (
                                                <td className="py-2">
                                                    <Checkbox className="p-0" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                                    />
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

export default MultipleReturns
