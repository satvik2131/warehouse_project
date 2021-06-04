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
    CSelect
} from '@coreui/react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CIcon from '@coreui/icons-react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';     
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';




const usersData = [
    {id: 0, CB_ID:'CBW12', CB_Name: 'John Michale',User_Name:"JohnMichale@gmail.com"},    
]

const fields = [
    { key: 'CB_ID'},
    { key: 'CB_Name'},
    { key: 'User_Name'}, 
    { key: 'Status'},     
 
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]




const CBList = () => {  

  
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>CB List</h4>
                            <h4>CB Owner : Book Shelves</h4>
                            <Link to="/cb-management">
                                <CButton size="md" className="ml-auto btn_orange"><KeyboardBackspaceIcon /></CButton>
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
                                    'Status':()=>{
                                    return (
                                    <td className="py-2">
                                        <CSelect custom name="select" id="select" className="fontnsize">
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>                          
                                        </CSelect>
                                    </td>
                                    )
                                 
                                },
                                
                                'show_details':
                                () => {
                                    return (
                                    <td className="py-2 d-flex">                                        
                                        <Link to="/cb-management/edit-form">
                                        <CButton size="sm" color="success" className="ml-1" >
                                            <CIcon name="cil-pencil" color="primary" />
                                        </CButton>
                                        </Link>
                                        <CButton size="sm" color="danger" className="ml-1" disabled>
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

export default CBList;
