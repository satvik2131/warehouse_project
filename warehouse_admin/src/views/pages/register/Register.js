import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow, CCardFooter, CImg,
  CCardGroup
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    borderRadius: 10,
  },
}));

const Register = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="c-default-layout align-items-center height100" style={{ background: "url(avatars/design.jpg) no-repeat center center", backgroundSize:"cover" }}>
      <CContainer>
        <header className="log-header"> 
            <div className="container d-flex justify-content-between align-items-center" style={{ height:'80px'}}>
            <h1 className="login-logohead">CB Admin<h6>Warehouse</h6></h1>
              <Link to="/login">
                  <CButton color="light" >Login</CButton>
              </Link>
            </div>
          </header>
       </CContainer>
       <CRow className="justify-content-center align-items-center pt-100" style={{marginRight:"unset",marginLeft:"unset"}}> 
       
          <div className={classes.root}>
          <AppBar position="static" color="default" className="border10">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
              
            >
              <Tab label="CB Owner" {...a11yProps(0)} />
              <Tab label="CB User" {...a11yProps(1)} />
             
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
            <CForm>
                  <h1>Register</h1>
                  <p className="text-muted mb-3">Create your account</p>
                  <CRow>
                  <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="First Name" autoComplete="name" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Last  Name" autoComplete="name" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Email" autoComplete="email" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-phone" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Mobile Number" autoComplete="name" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                    
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="new-password" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Confirm password" autoComplete="new-password" />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CButton color="success" block>Create Account</CButton>
                </CForm>
                <CRow>
                  <CCol xs="12" className="text-center">
                    <strong>Already have an account! Please <Link to="/login">Login</Link></strong>
                  </CCol>
                </CRow>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <CForm>
                  <h1>Register</h1>
                  <p className="text-muted mb-3">Create your account</p>
                  <CRow>
                  <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="First Name" autoComplete="name" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Last  Name" autoComplete="name" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Email" autoComplete="email" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-phone" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Mobile Number" autoComplete="name" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                    
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="new-password" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Confirm password" autoComplete="new-password" />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CButton color="success" block>Create Account</CButton>
                </CForm>
                <CRow>
                  <CCol xs="12" className="text-center">
                    <strong>Already have an account! Please <Link to="/login">Login</Link></strong>
                  </CCol>
                </CRow>
            </TabPanel>
            
          </SwipeableViews>
        </div> 
        
       </CRow>
       
    </div>
  )
}

export default Register
