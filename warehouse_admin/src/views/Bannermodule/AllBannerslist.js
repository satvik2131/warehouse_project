import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton
} from '@coreui/react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
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
import { green } from '@material-ui/core/colors';




const usersData = [
    {id: 0, CB_Owner_ID:'CBW12', CB_Owner_Name: 'John Michale',End_Date:"10/10/2020"},    
]

const fields = [
    { key: 'CB_Owner_ID'},
    { key: 'CB_Owner_Name'},
    { key: 'Banners'},       
    { key: 'End_Date'},
    { key: 'View', _style:{textAlign:"center"}},
    { key: 'Banner_status',_style: { width: '15%' },},
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '15%' },        
        filter: false
    }
]
const PurpleSwitch = withStyles({
    switchBase: {
      color: green[100],
      '&$checked': {
        color: green[700],
      },
      '&$checked + $track': {
        backgroundColor: green[700],
      },
    },
    checked: {},
    track: {},
  })(Switch);
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);



const AllBannerslist = () => {  
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('female');

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const [checked, setChecked] = React.useState(false);
    const[Approval,setapproval] = React.useState(false)
    const BannerAction = () => {
      setChecked((prev) => !prev);   
    (Approval===false? setapproval(true): setapproval(false) )
    };

    const [mychecked, setmyChecked] = React.useState(false);
    const[Active,setactive] = React.useState(false)
    const toggleChecked = () => {
        setmyChecked((prev) => !prev);
        (Active===false? setactive(true): setactive(false) )             
    };
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Banner Module </h4>
                            <Link to="/add-banner">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Banner</CButton>
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
                                                <td >                                                                                                   
                                                    <FormGroup>
                                                        <FormControlLabel
                                                            control={<PurpleSwitch  size="small" checked={checked} onChange={BannerAction} />}
                                                            label={Approval ? 'Approval' : 'disapproval'}                                                            
                                                        />
                                                    </FormGroup>
                                                </td>
                                            )
                                        },
                                       'Banners':
                                       () => {
                                           return(
                                               <td>
                                                 <img src='avatars/6.jpg' className="banner_img"/>
                                               </td>
                                           )
                                       },
                                       'Banner_status':
                                       ()=>{
                                        return(
                                               <td>
                                                    <FormGroup>
                                                        <FormControlLabel
                                                            control={<PurpleSwitch  size="small" checked={mychecked} onChange={toggleChecked} />}
                                                            label={Active ? 'Active' : 'Inactive'}                                                         
                                                        />
                                                    </FormGroup>
                                                    
                                               </td>
                                           )

                                       },
                                       'View':
                                       ()=>{
                                        return(
                                            <td style={{textAlign:"center"}}>
                                                <Link to="/post-banner"><VisibilityOutlinedIcon/></Link>                                                   
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

export default AllBannerslist;
