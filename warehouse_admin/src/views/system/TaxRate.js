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
// import ReactHTMLTableToExcel from "react-html-table-to-excel";

const usersData = [
    {id: 0, Taxrate_Name:'VAT', Code_name: 'vatd', Taxrate: '15.25', Status: 'John Michale'},
    {id: 1, Taxrate_Name:'GST', Code_name: 'gst', Taxrate: '3.00', Status: 'Michale'}
  ]

const fields = [
    { key: 'Taxrate_Name'},
    { key: 'Code_name'},
    { key: 'Taxrate'},
    { key: 'Status'},    
    {
        key: 'show_details',
        label: 'Action',               
        filter: false
    }
]


const TaxRate = () => {   

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Tax Rate </h4>
                            {/* <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="my_tabel"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="Download as XLS"
                            /> */}
                            <Link to="/system/add-new-tax-rate">
                                <CButton size="md"  color="success" className="ml-auto">+ Add New Tax Rate </CButton>
                            </Link>
                        </CCardHeader>
                        <CCardBody id ="my_tabel">
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
                                        },
                                        'Status':
                                        ()=>{
                                            return (
                                                <td className="py-2">
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

export default TaxRate;
