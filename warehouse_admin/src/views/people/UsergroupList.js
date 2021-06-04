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
import CIcon from '@coreui/icons-react'

const usersData = [
    {id: 1, Usergroup_Name:"xyz",Group_ID:'1255', User_Group: 'Supplier',User_Type: 'Supplier',Total_User: '12'}    
  ]

const fields = [
    { key:'id', label: '#', filter:false}, 
    { key: 'Usergroup_Name' },   
    { key: 'User_Type' },
    { key: 'Total_User'},
    { key: 'User_Group' },   
    { key: 'Status'},
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const UsergroupList = () => {    

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Usergroup List </h4> 
                            <Link to="/people/add-usergroup">
                                <CButton size="md"  color="success" className="ml-auto">+ Add Usergroup</CButton>
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
                                        },                                      
                                    
                                    'Status':
                                        () => {
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

export default UsergroupList
