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
    CBadge,
    CInput,   
    CLabel,
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
    {Categories: 'Admin Close',},
    {Categories: 'Wineries presentation'},
    {Categories: 'Web Page'},
    {Categories: 'Security'},
    {Categories: 'Flexibility'},
    {Categories: 'Services'},
    {Categories: 'Logistics Services'},
    {Categories: 'Staff Services'},
    {Categories: 'Description and Comments'}, 
   
   
 ]

const fields = [
    { key: 'Categories'},    
    { key: 'Average_Rating'},  
    
]



const RatingTable = () => {    
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
                                scopedSlots={{
                                    
                                    'Average_Rating':
                                        () => {
                                            return (
                                                <td className="py-2 d-flex">                                                     
                                                                                                       
                                                        <CInput className="fontnsize" id="text-input" name="text-input" placeholder="" className="text-left " value="0"/>                    
                                                   
                                                </td>
                                            )
                                        },
                                      
                                    
                                }}                          
                            />
                          <CRow>                             
                              <CCol lg="12" sm="12" className="offset-lg-7">
                                  <p className="ml-5" style={{fontWeight:"600"}}>Average Rating :- 4.3</p>
                              </CCol>
                          </CRow>

                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default RatingTable;
