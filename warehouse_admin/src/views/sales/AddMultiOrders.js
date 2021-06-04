import React, { useState,useEffect } from 'react'
import {
    CCard,
    CCardBody,   
    CCol,
    CDataTable,
    CRow,    
} from '@coreui/react'
import Checkbox from '@material-ui/core/Checkbox';

const usersData = [
    {id: 0,P_name: 'Sung', UOM: '12334', SO_Qty: '10', SO_App_Qty: '8',SO_Rem_Qty:'2', Rate: '$28', Amount: '$280'}
   
  ]
const fields = [
    // { key: 'Check_me',label: "" ,filter:false},
    { key: 'P_name'},
    { key :'UOM'},
    { key: 'SO_Qty'},
    { key: 'SO_App_Qty'},
    { key: 'SO_Rem_Qty'},
    { key: 'Rate'},
    { key: 'Amount'}
    // { key: 'SO_date'},
    // { key: 'SO_code'},
    // { key: 'customer_name'},
    // { key: 'Store_name'},
    // { key: 'Pay_mode'},
    // { key: 'Note'},
    // { key: 'SO_status'},
    // { key: 'T_amount'},
    
]
const AddMultiOrders = () => {   
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
                                
                               
                                // scopedSlots={{                                    
                                //     'Check_me':
                                //         () => {
                                //             return (
                                //                 <td className="py-2">
                                //                     <Checkbox className="p-0" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                //                      />
                                //                 </td>
                                //             )
                                //         }
                                    
                                // }}                               
                            />
                      
                </CCol>
            </CRow>
        </>
    )
}

export default AddMultiOrders
