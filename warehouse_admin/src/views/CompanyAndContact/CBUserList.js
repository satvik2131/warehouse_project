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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

const usersData = [
  { id: 0, Company_ID: '12345455', Company_name: 'Book Shelves', Owner_name: 'JohnPeter' }
]

const fields = [
  { key: 'Company_ID' },
  { key: 'Company_name' },
  { key: 'Owner_name' },  
  {
    key: 'show_details',
    label: 'Action',
    _style: { width: '1%' },
    filter: false
  }
]
const personData = [
  { id: 0, Fisrt_Name: 'Book Shelves', Last_Name: 'Book Shelves',RUT: "Lorem Ipsum is simply dummy text for industry.",Phone:"020-123654",Cellular:"78965412122",Mail:"dummyperson@gmail.com" }
]

const personfields = [
  { key: 'Fisrt_Name',_style: { width: '12%' }, },
  { key: 'Last_Name' ,_style: { width: '12%' },},
  { key: 'RUT' }, 
  { key: 'Phone' ,_style: { width: '11%' },},
  { key: 'Cellular' ,_style: { width: '5%' },},
  { key: 'Mail' }, 
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

const CBUserList = () => {
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
              <h4>Company And Contact</h4>
              <Link to="/product/product-list">
                {/* <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button> */}
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
                  <Tab label="Company List" {...a11yProps(0)} />
                  <Tab label="Person List" {...a11yProps(1)} />
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
                  <div className="text-right">
                    {/* <h4>Company And Contact</h4>  */}
                    <Link to="/company-and-contact/edit-company-details">
                      <CButton  color="info" className="">+ Add Company </CButton>
                    </Link>
                  </div>
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
                                <Link to="/company-and-contact/edit-company-details">
                                  <CButton size="sm" color="success" className="ml-1" >
                                    <CIcon name="cil-pencil" color="primary" />
                                  </CButton>
                                </Link>
                                <CButton size="sm" color="danger" className="ml-1">
                                  <CIcon name="cil-trash" color="primary" />
                                </CButton>
                              </td>
                            )
                          }
                      }}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                  <div className="text-right">
                    {/* <h4>Company And Contact</h4>  */}
                    <Link to="/company-and-contact/edit-personal-details">
                      <CButton  color="info" className="">+ Add Person </CButton>
                    </Link>
                  </div>
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
                                {/* <CButton size="sm" color="dark" className="ml-1 view-btn">
                                  <VisibilityOutlinedIcon color="white" />
                                </CButton> */}
                                <Link to="/company-and-contact/edit-personal-details">
                                  <CButton size="sm" color="success" className="ml-1" >
                                    <CIcon name="cil-pencil" color="primary" />
                                  </CButton>
                                </Link>
                                <CButton size="sm" color="danger" className="ml-1">
                                  <CIcon name="cil-trash" color="primary" />
                                </CButton>
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
export default CBUserList;
