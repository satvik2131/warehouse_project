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
    {id: 0, CB_Owner_ID: 'ASB01', CB_Owner_name: 'John Michale', Type_Of_Request: '01'},
 ]

const fields = [
    { key: 'CB_Owner_ID'},    
    { key: 'CB_Owner_name'},          
    { key: 'Type_Of_Request'},  
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },        
        filter: false
    }
]



const PendingApprovals = () => {    
    return (
        <>
            <CRow>
            <CCol lg="12">
              <CCard>
                  <CCardBody>
                  <h5>Description:  </h5>
                  <div className="row">
                      <div className="col-lg-4 offset-lg-2">
                        <p className="regionNcommune"><span>01:-</span>  New CB Owner Approval</p>   
                        <p className="regionNcommune"><span>02:-</span>  New CB Approval</p> 
                      </div>
                      <div className="col-lg-4 offset-lg-2">
                        <p className="regionNcommune"><span>03:-</span>  Existing CB Edit Approval</p>   
                        <p className="regionNcommune"><span>04:-</span>  Payment Service Approval</p> 
                      </div>
                    </div>
                  </CCardBody>  
              </CCard>

            </CCol>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Pending Approvals </h4>
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
                                    
                                    'show_details':
                                        () => {
                                            return (
                                                <td className="py-2 d-flex">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                                    <label class="form-check-label" for="inlineRadio1">Approve</label>
                                                 </div>
                                                 <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                    <label class="form-check-label" for="inlineRadio2">Disapprove</label>
                                                 </div>
                                                  
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

export default PendingApprovals;
