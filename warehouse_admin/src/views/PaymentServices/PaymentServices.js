import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CBadge
} from '@coreui/react'

const usersData = [
    {id: 0, CB_ID: 'ASB01', CB_name: 'John Michale', Paid_Services: '$ 20000.00',Plan_ID:"P01",Plan_Type:"Gold",End_Date:'12/12/2020'},
 ]

const fields = [
    { key: 'CB_ID'},    
    { key: 'CB_name'},       
    { key: 'Paid_Services'},
    { key: 'Plan_ID'},
    { key: 'Plan_Type'},
    { key: 'End_Date'},
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]



const PaymentServices = () => {    
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Payment Services </h4>
                            <Link to="/payment-services/Add-payment-services">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Payment Service</CButton>
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
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                    <label class="form-check-label" for="inlineRadio1">Enable</label>
                                                 </div>
                                                 <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                    <label class="form-check-label" for="inlineRadio2">Disable</label>
                                                 </div>
                                                  
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

export default PaymentServices;
