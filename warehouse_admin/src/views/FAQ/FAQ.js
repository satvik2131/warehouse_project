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
    {id: 0, Question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.?', Answer: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'},
    {id: 1, Question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.?', Answer: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'}
  ]

const fields = [
    { key: 'Question',_style: { width: '30%' }},
    { key: 'Answer',_style: { width: '60%' }},   
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]




const FAQ = () => {  
   
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>FAQ </h4>
                            <Link to="/faq/add-faq">
                                <CButton size="md"  color="info" className="ml-auto">+ Add FAQ</CButton>
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
                                                   <Link to="/faq/edit-faq">                                               
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
                                      
                                    
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default FAQ;
