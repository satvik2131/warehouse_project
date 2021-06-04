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
import DescriptionIcon from '@material-ui/icons/Description';
import CIcon from '@coreui/icons-react'

const usersData = [
    {id: 0, Blog_Section: 'Warehouse Operation'},    
 ]

const fields = [
    { key: 'Blogs',filter: false},    
    { key: 'Reviews',filter: false},       
    { key: 'Blog_Section',filter: false},  
    
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]



const BlogList = () => {    
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Blog List </h4>
                            <Link to="/blogs/add-blogs">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Blog</CButton>
                            </Link>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped                               
                                tableFilter                                
                                itemsPerPageSelect
                                itemsPerPage={5}
                                hover                                
                                pagination
                                scopedSlots={{
                                    
                                    'show_details':
                                        () => {
                                            return (
                                                <td className="py-2 d-flex">                                                
                                                <Link to="/blogs/edit-blogs">
                                                <CButton size="sm" color="success" className="ml-1" >
                                                    <CIcon name="cil-pencil" color="primary" />
                                                </CButton>
                                                 </Link>
                                                <CButton size="sm" color="danger" className="ml-1">
                                                    <CIcon name="cil-trash" color="primary" />
                                                </CButton>
                                                  
                                                </td>
                                            )
                                        },  
                                        'Blogs' : () =>{
                                            
                                            return(
                                                <td className="py-2">                                              
                                                    <DescriptionIcon />                                                
                                                </td>
                                            )

                                        } ,
                                        'Reviews' : () =>{
                                            return(
                                                <td className="py-2">
                                                  <p className="tablePara">Reviews <Link to="/blogs-and-review"><span style={{color:"green"}}>( 10 )</span></Link></p>
                                                  <p className="tablePara">Pending Reviews<Link to="/blogs-and-review"> <span style={{color:"red"}}>( 2 )</span></Link> </p>
                                                </td>
                                            )

                                        } ,                                 
                                    
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default BlogList;
