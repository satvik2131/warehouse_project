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
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const usersData = [
    {id: 0, Fisrt_Name: 'Harry',Last_Name: 'Potter',Email: 'harrypotter6644@gmail.com',Access: 'Admin',Password:"******"},
 ]

const fields = [
    { key: 'Fisrt_Name', style:{}},    
    { key: 'Last_Name'},       
    { key: 'Email'},
    {key: 'Password'},
    { key: 'Access'},  
    
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]



const UserList = () => {    
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>User Access </h4>
                            {/* <Link to="/blogs/add-blogs">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Blog</CButton>
                            </Link> */}
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
                                                
                                                <CButton size="sm" color="success" className="ml-1" >
                                                    <CIcon name="cil-pencil" color="primary" />
                                                </CButton>
                                                
                                                <CButton size="sm" color="danger" className="ml-1">
                                                    <CIcon name="cil-trash" color="primary" />
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

export default UserList;
