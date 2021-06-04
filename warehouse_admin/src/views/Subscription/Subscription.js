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
    {id: 0,Plan_ID:'P123', Plan_Type: 'Gold', Plan_Discription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {id: 1,Plan_ID:'P234', Plan_Type: 'Silver', Plan_Discription: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
  ]

const fields = [
    { key: 'Plan_ID'},
    { key: 'Plan_Type'},    
    { key: 'Plan_Discription',_style: { width: '60%' }},
    { key: 'Status'},      
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]




const Subscription = () => {  
   
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Plan Details </h4>
                            <Link to="/Subscription/add-Subscription">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Plan Details</CButton>
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
                                                <Link to="/Subscription/edit-Subscription">                                                 
                                                    <CButton size="sm"  color="success" className="ml-1" >
                                                        <CIcon name="cil-pencil" color="primary"/>
                                                    </CButton> 
                                                    </Link>                                                    
                                                    <CButton size="sm"  color="danger" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary"/>
                                                    </CButton>
                                                </td>
                                            )
                                        },
                                        'Status':()=>{
                                            return(
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

export default Subscription;
