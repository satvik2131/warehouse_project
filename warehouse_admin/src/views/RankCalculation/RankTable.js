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
    {Categories: 'Admin Close', Percentage: '03%'},
    {Categories: 'Wineries presentation', Percentage: '03%'},
    {Categories: 'Web Page', Percentage: '03%'},
    {Categories: 'Security', Percentage: '03%'},
    {Categories: 'Flexibility', Percentage: '03%'},
    {Categories: 'Services', Percentage: '03%'},
    {Categories: 'Logistics Services', Percentage: '03%'},
    {Categories: 'Staff Services', Percentage: '03%'},
    {Categories: 'Description and Comments', Percentage: '03%'}, 
   
   
 ]

const fields = [
    { key: 'Categories'},    
    { key: 'Percentage'},  
    
]



const RankTable = () => {    
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>                        
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped                                                     
                                hover                            
                            />
                          <CRow>                             
                              <CCol md="4" className="offset-md-8 offest-8 pl-0">
                                  <p className="" style={{fontWeight:"600"}}>Total :- 100%</p>
                              </CCol>
                          </CRow>

                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default RankTable;
