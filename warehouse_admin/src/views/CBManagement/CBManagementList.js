import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import {
  CButton,
  CCard,
  CCardBody, CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import Button from '@material-ui/core/Button'

const usersData = [
  { id: 0, CB_Owner_ID: '12345455', CB_Owner_name: 'Book Shelves', User_name: 'JohnPeter6644@gmail.com' }
]

const fields = [
  { key: 'CB_Owner_ID' },
  { key: 'CB_Owner_name' },
  { key: 'User_name' },  
  { key: 'Status' },
  {
    key: 'show_details',
    label: 'Action',
    _style: { width: '1%' },
    filter: false
  }
]
const personData = [
  { id: 0, CB_ID: '12345455', CB_name: 'Book Shelves', User_name: 'JohnPeter6644@gmail.com' }
]

const personfields = [
  { key: 'CB_ID' },
  { key: 'CB_name' },
  { key: 'User_name' },  
  { key: 'Status' },
  {
    key: 'show_details',
    label: 'Action',
    _style: { width: '1%' },
    filter: false
  }
]

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
  splitterStyle: {
    backgroundColor: theme.palette.background.paper,
    width: 100,
  },
}));

const CBManagementList = () => {
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
    <div className={classes.root}>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>CB Management</h4>
              <Link to="/cb-form">
                <CButton size="" color="info" className="mr-2">+ Add CB </CButton>
              </Link>
            </CCardHeader>
            <CCardBody>

              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="CB Owner List" {...a11yProps(0)} />
                  <Tab label="CB List" {...a11yProps(1)} />
                </Tabs>
              </AppBar>


              <CCard>
                {/* <CCardBody> */}
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >

                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <CDataTable
                      items={usersData}
                      fields={fields}
                      striped
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
                                {/* <CButton size="sm" color="dark" className="ml-1 view-btn" >
                                  <VisibilityOutlinedIcon color="white" />
                                </CButton> */}
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
                          'CB_Owner_name':()=>{
                            return (
                            <Link to="/cb-management/cb-list">
                              <td className="py-2">
                              Book Shelves
                              </td>
                            </Link>
                            )
                          }
                      }}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <CDataTable
                      items={personData}
                      fields={personfields}
                      striped
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
                                {/* <CButton size="sm" color="dark" className="ml-1 view-btn" >
                                  <VisibilityOutlinedIcon color="white" />
                                </CButton> */}
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
                          'Status':()=>{
                            return (
                              <td className="py-2">
                                <CSelect custom name="select" id="select" className="fontnsize">
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>                          
                                </CSelect>
                              </td>
                            )

                          }
                      }}
                    />
                  </TabPanel>

                </SwipeableViews>
              </CCard>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}
export default CBManagementList;
