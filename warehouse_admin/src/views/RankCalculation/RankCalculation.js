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
    {id: 0, CB_ID: 'ASB01', CB_name: 'John Michale'},
 ]

const fields = [
    { key: 'CB_ID'},    
    { key: 'CB_name'},       
    { key: 'Rank'},
    { key: 'Rating'}   
    
]



const RankCalculation = () => {    
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Rank Calculation </h4>
                            {/* <Link to="/payment-services/Add-payment-services">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Payment Service</CButton>
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
                                    
                                    'Rank':
                                        () => {
                                            return (
                                                <td className="">
                                                 <Link to="/rank">3</Link>                                              
                                                </td>
                                            )
                                        },   
                                        'Rating':
                                        () => {
                                            return (
                                                <td className="">
                                                 <Link to="/rating">4.3</Link>                                              
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

export default RankCalculation;
