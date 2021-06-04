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
    {id: 0, Heading: 'ASB01'},
 ]

const fields = [
    { key: 'Image'}, 
    { key: 'Heading',_style: { width: '20%' },}, 
    { key: 'Description',_style: { width: '50%' },},

    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]



const AboutUsContentList = () => {    
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Manage About Us </h4>
                            <Link to="/Page-Management/add-aboutus-content">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Content</CButton>
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
                                                <Link to="/Page-Management/edit-aboutus-content">                                                  
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
                                        'Image' :()=>{
                                            return (
                                                <td>
                                                 <img src='avatars/6.jpg' className="banner_img"/>
                                               </td>
                                            )

                                        } , 
                                        'Description':()=>{
                                            return (
                                                <td>
                                                    <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged.
                                                    </p>
                                                                                                    
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

export default AboutUsContentList;
