import React,{useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {
CButton,   
CCard,
CCardBody,   
CCol,  
CForm,
CFormGroup,     
CLabel,
CInput,
CSelect,
CRow,
CCardFooter,
CTextarea,
CInputFile,
CCardHeader,
CDataTable,
CCollapse
}from '@coreui/react'
import CIcon from '@coreui/icons-react';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
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
const initialState = { alt: "default", src: "avatars/default.png" };
const usersData = [
  {id: 0, Family: 'Company Data',Sub_Family:"-",Tital:"Name"},
]

const fields = [
  { key: 'Family',},    
  { key: 'Sub_Family'},       
  { key: 'Tital'},  
  {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },        
      filter: false
  }
]
const AddProducts=()=> { 
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [security, setsecurity] = React.useState(false);

  const securityClick = () => {
    setsecurity(!security);
  };
  const [DangerousWarehouse, setDangerousWarehouse] = React.useState(false);

  const DangerousWarehouseClick = () => {
    setDangerousWarehouse(!DangerousWarehouse);
  };
  const [OtherInfo, setOtherInfo] = React.useState(false);

  const OtherInfoClick = () => {
    setOtherInfo(!OtherInfo);
  };
const [country, setcountry] =useState("Chile");
const [Region,Setregion]=useState(country)
const classes = useStyles();
const theme = useTheme();
const [value, setValue] = React.useState(0);
const [{ alt, src }, setPreview] = useState(initialState); 
const [selectedValue, setSelectedValue] = React.useState('');
const [selectedValueofmeeting, setSelectedValueofmeeting] = React.useState('');
const [selectedValueofclean, setSelectedValueofclean] = React.useState('')
const [selectedValueofcowork, setSelectedValueofcowork] = React.useState('')
const [selectedValueofcctv, setSelectedValueofcctv] = React.useState('')
const [selectedueofValhrsOfOperation, SelectedValueobasbxcjbs] = React.useState('')
const [selectincludbathroom, SelectedValueincludbathroom] = React.useState('')
const [selectincludOffice, SelectedValueincludOffice] = React.useState('')
const [selectincludthreephase, SelectedValueincludthreephase] = React.useState('')
const [selectincludplateforms, SelectedValueincludplateforms] = React.useState('')
const [selectedueofValrentcrane, SelectedValueincludrentcrane] = React.useState('')
const [selectedvalueofloadingDorR, SelectedValueinloadingDorR] = React.useState('')
const [selectedEstvisits, SelectedValueinEstvisits] = React.useState('')
const [selectedvalueofcustomconstruction, SelectedValueincustomconstruction] = React.useState('')
const [selectedvalueofInsurance, SelectedValueinInsurance] = React.useState('')
const Radiochange = (event) => {
setSelectedValue(event.target.value);
};
const RadiochangeMeetingRoom = (event)=>{
setSelectedValueofmeeting(event.target.value);
}
const RadiochangecleanRoom = (event)=>{
setSelectedValueofclean(event.target.value);
}
const Radiochangecowork = (event)=>{
setSelectedValueofcowork(event.target.value);
}
const Radiochangecctv = (event)=>{
setSelectedValueofcctv(event.target.value);
}
const RadiochangehrsOfOperation = (event)=>{
SelectedValueobasbxcjbs(event.target.value);
}
const Radiochangeincludbathroom = (event)=>{
SelectedValueincludbathroom(event.target.value);
}
const RadiochangeincludOffice = (event)=>{
SelectedValueincludOffice(event.target.value);
}
const Radiochangeincludofthreephase = (event)=>{
SelectedValueincludthreephase(event.target.value);
}
const Radiochangeincludofplateforms = (event)=>{
SelectedValueincludplateforms(event.target.value);
}
const Radiochangerentcrane = (event)=>{
SelectedValueincludrentcrane(event.target.value);
}
const RadiochangeloadingDorR = (event)=>{
SelectedValueinloadingDorR(event.target.value);
}
const RadiochangeEstvisits = (event)=>{
SelectedValueinEstvisits(event.target.value);
}
const Radiochangecustomconstruction = (event)=>{
SelectedValueincustomconstruction(event.target.value);
}
const RadiochangeInsurance = (event)=>{
SelectedValueinInsurance(event.target.value);
}
const handleChange = (event, newValue) => {
setValue(newValue);
};
const handleChangeIndex = (index) => {
setValue(index);
};
      const fileHandler = event => {
      const { files } = event.target;
      setPreview(
      files.length
      ? {
      src: URL.createObjectURL(files[0]),
      alt: files[0].name
      }
      : initialState
      );
      };
const [collapse, setCollapse] = useState(false)
const [accordion, setAccordion] = useState()

const toggle = (e) => {
  setCollapse(!collapse)
  e.preventDefault()
}

const [file, setFile] = useState([]);
const [file1, setFile1] = useState([]);
const [file2, setFile2] = useState([]);
const [file4, setFile4] = useState([]);
function uploadSingleFile(e) {
  setFile([...file, URL.createObjectURL(e.target.files[0])]);
}
function deleteFile(e) {
  const s = file.filter((item, index) => index !== e);
  setFile(s);
}
function uploadSingleFile1(e) {
  setFile1([...file1, URL.createObjectURL(e.target.files[0])]);
}

function deleteFile1(e) {
  const s1 = file1.filter((item, index1) => index1 !== e);
  setFile1(s1);
  //   console.log(s);
}
function uploadSingleFile2(e) {
  setFile2([...file2, URL.createObjectURL(e.target.files[0])]);
}

function deleteFile2(e) {
  const s2 = file2.filter((item, index2) => index2 !== e);
  setFile2(s2);
}

function uploadSingleFile4(e) {
  setFile4([...file4, URL.createObjectURL(e.target.files[0])]);
}
const deleteFile4 =()=>{ ;
  setPreview(initialState);   
}

return (
<div className={classes.root}>
   <AppBar position="static" color="default">
      <Tabs
         value={value}
         onChange={handleChange}
         indicatorColor="primary"
         textColor="primary"
         variant="fullWidth"
         aria-label="full width tabs example"
         >
         <Tab label="CB Form" {...a11yProps(0)} />
         <Tab label="Family" {...a11yProps(1)} />         
      </Tabs>
   </AppBar>
   <CCard>
      {/* 
      <CCardBody>
      */}
      <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={value}
      onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0} dir={theme.direction}>
         <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <h5>Warehouse Details</h5>
            <CFormGroup className="row">
            <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Warehouse Name</CLabel>
                  <CInput className="fontnsize" id="text-input" name="text-input" placeholder="" className="text-left" />
                </CCol>

                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Branch Office</CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="textarea-input">Direction</CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="2"
                    placeholder="Enter Here..."
                  />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="select" className="fontnsize">Select Commune </CLabel>
                  <CSelect custom name="select" id="select" className="fontnsize">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CSelect>
                </CCol>
                <CCol xs="12" md="3" className="mt-2 mb-2">
                  <CLabel htmlFor="select" className="fontnsize">Select Region </CLabel>
                  <RegionDropdown
                    country={country}
                    value={Region}
                    onChange={(val) => Setregion(val)}
                    className="fontnsize form-control" />
                </CCol>

                <CCol xs="12" md="3" className="mt-2 mb-2">
                  <CLabel htmlFor="select" className="fontnsize">Select Country </CLabel>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => setcountry(val)}
                    className="fontnsize form-control" disabled />
                </CCol>

                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Cellular</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Phone</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">WWW</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="email-input" className="fontnsize">Mail</CLabel>
                  <CInput className="fontnsize" type="email" id="email-input" name="email-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Chat</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                
                <CCol xs="12" md="6" className="mt-2 mb-2 d-flex align-items-center">
                <div>
                    <CLabel htmlFor="file-input">Logo</CLabel>
                    {/* <CInputFile id="file-input" name="file-input" onChange={uploadSingleFile4} /> */}                  
                    <CInputFile id="file-input" name="file-input" accept="image/*"  onChange={fileHandler}/>
                    
                  </div>

                    <div className="cat_img_preview_div1 my-2" >
                      <img src={src} alt={alt} id="" className="newImg1" />
                      <Button className="multiImg_in_banner_btn1" variant="contained" size="small" onClick={deleteFile4}>
                        <CloseIcon size="small" style={{ fontSize: "14px" }} />
                     </Button>
                      {/* {file4.length > 0 &&
                        file4.map((item, index4) => {
                          return (
                           
                              <img src={src} alt={alt} id="" className="newImg" />
                              <Button className="multiImg_in_banner_btn" variant="contained" size="small" onClick={() =>
                                deleteFile4(index4)}>
                                <CloseIcon size="small" style={{ fontSize: "14px" }} />
                              </Button>
                           
                          );
                        })} */}
                    </div>                  
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2 d-flex justify-content-between">
                  <div className="w-91">
                    <CLabel htmlFor="select" className="fontnsize">Business </CLabel>
                    <CSelect custom name="select" id="select" className="fontnsize">
                      <option value="0">Please select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </CSelect>
                  </div>
                  <div className="rounded_btn">
                    <Link to="/company-and-contact/edit-company-details">
                      <Button variant="contained" size="" color="primary" className="mr-2 btn"><AddIcon /> </Button>
                    </Link>
                  </div>
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2 d-flex justify-content-between">
                  <div className="w-91">
                    <CLabel htmlFor="select" className="fontnsize">Contact </CLabel>
                    <CSelect custom name="select" id="select" className="fontnsize">
                      <option value="0">Please select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </CSelect>
                  </div>
                  <div className="rounded_btn">
                    <Link to="/company-and-contact/edit-personal-details">
                      <Button variant="contained" size="" color="primary" className="mr-2 btn"><AddIcon /> </Button>
                    </Link>
                  </div>
                </CCol>
              </CFormGroup>
              <h5 className="mt-2">Warehouse Management Type</h5>
              <CFormGroup className="row">
                <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Admin Type </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 mb-2">
                  <Checkbox
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">LLM </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 mb-2">
                  <Checkbox
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">3PL </CLabel>
                </CCol>
              </CFormGroup>
              <h5 className="mt-2 d-inline" onClick={toggle}>Resolution And Type Of Products { collapse === false ? <ExpandMoreIcon color="dark" /> : <ExpandLessIcon color="dark"/>}</h5>
              <CCollapse show={collapse}>
                <CFormGroup className="row">
                  <ul className="resolution_n_products">
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Food </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Cold Refrigerator </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Frozen Refrigerator </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Cosmetics </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Dangerous </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Medical Supplies and Remedies </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Mini Wineries </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Distribution Center 1000+ m2 </CLabel> </div>
                    </li>
                    <li>
                      <div><Checkbox
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                        <CLabel htmlFor="select" className="fontnsize">Documents </CLabel> </div>
                    </li>
                  </ul>
                </CFormGroup>
              </CCollapse>
              <h5 className="mt-3">Sizes and Operation Type</h5>
              <CFormGroup className="row">
                <CCol xs="12" md="4" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Size From</CLabel>
                  <CInput className="fontnsize" type="text" id="text-input" name="text-input" placeholder="" required />
                </CCol>
                <CCol xs="12" md="4" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Size Up</CLabel>
                  <CInput className="fontnsize" id="text-input" name="text-input" placeholder="" className="text-left" />
                </CCol>

                <CCol xs="12" md="4" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Total Space</CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">resolution</CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>


                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="select" className="fontnsize">Warehouse Type </CLabel>
                  <CSelect custom name="select" id="select" className="fontnsize">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <h5 className="mt-2">Other Spaces For Rent</h5>
              <CFormGroup className="row">
                <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Offices </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValue === 'd'}
                    onChange={Radiochange}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                </CCol>
                <CCol xs="8" md="8" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValue === 'e'}
                    onChange={Radiochange}
                    value="e"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">max size </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">min size </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="2"
                    placeholder="Enter Description Here..."
                  />
                </CCol>

                <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Meeting Room </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValueofmeeting === 'a'}
                    onChange={RadiochangeMeetingRoom}
                    value="a"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                </CCol>
                <CCol xs="8" md="8" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValueofmeeting === 'b'}
                    onChange={RadiochangeMeetingRoom}
                    value="b"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="2"
                    placeholder="Enter Description Here..."
                  />
                </CCol>

                <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Clean Room </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValueofclean === 'c'}
                    onChange={RadiochangecleanRoom}
                    value="c"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                </CCol>
                <CCol xs="8" md="8" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValueofclean === 'f'}
                    onChange={RadiochangecleanRoom}
                    value="f"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'F' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="2"
                    placeholder="Enter Description Here..."
                  />
                </CCol>

                <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Clean Room </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValueofcowork === 'g'}
                    onChange={Radiochangecowork}
                    value="g"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'G' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValueofcowork === 'h'}
                    onChange={Radiochangecowork}
                    value="h"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'H' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 mb-2">
                  <Radio
                    checked={selectedValueofcowork === 'i'}
                    onChange={Radiochangecowork}
                    value="i"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'I' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Null </CLabel>
                </CCol>

              </CFormGroup>
              <h5 className="mt-2">Patios</h5>
              <CFormGroup className="row">
                <ul className="resolution_n_products">
                  <li>
                    <div><Checkbox
                      color="default"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                      <CLabel htmlFor="select" className="fontnsize">Est Trucks </CLabel> </div>
                  </li>
                  <li>
                    <div><Checkbox
                      color="default"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                      <CLabel htmlFor="select" className="fontnsize">Motorhomes</CLabel> </div>
                  </li>
                  <li>
                    <div><Checkbox
                      color="default"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                      <CLabel htmlFor="select" className="fontnsize">Exclusive parking </CLabel> </div>
                  </li>

                </ul>
              </CFormGroup>
              <h4 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 0 ? null : 0)}>Security { accordion === 0 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" /> }</h4>
              <div className="mt-2">
                <CCollapse show={accordion === 0}>
                  <h5 className="mt-2">Robberies Assaults</h5>
                  <CFormGroup className="row">
                    <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                      <CLabel htmlFor="select" className="fontnsize">CCTV </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2 mb-2">
                      <Radio
                        checked={selectedValueofcctv === 'j'}
                        onChange={Radiochangecctv}
                        value="j"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'J' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                    </CCol>
                    <CCol xs="8" md="8" className="mt-2 mb-2">
                      <Radio
                        checked={selectedValueofcctv === 'k'}
                        onChange={Radiochangecctv}
                        value="k"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'K' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                    </CCol>
                    <CCol xs="12" md="2" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">CCTV Qty</CLabel>
                      <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                    </CCol>
                    <CCol xs="12" md="10" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">CCTV Description </CLabel>
                      <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                    </CCol>
                    <div>
                      <ul className="resolution_n_products">
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">24/7 guard </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Controlled access </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Alarms </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Access Control System </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Security Trucks </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Electric fence </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Dogs </CLabel> </div>
                        </li>
                      </ul>
                    </div>
                    <CCol xs="12" md="12" className="mt-2 mb-2">
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="2"
                        placeholder="Enter Description Here..."
                      />
                    </CCol>
                  </CFormGroup>
                  <h5 className="mt-2">Fire</h5>
                  <CFormGroup className="row">
                    <div>
                      <ul className="resolution_n_products">
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Fire Alarm </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Smoke Sensors </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Wet Network </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Automatic extinction</CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Fire extinguishers </CLabel> </div>
                        </li>
                      </ul>
                    </div>

                  </CFormGroup>
                  <h5 className="mt-2">Other Safety</h5>
                  <CFormGroup className="row">
                    <CCol xs="12" md="12" className="mt-2 mb-2">
                      <div>
                        <ul className="resolution_n_products pl-4">
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Pest Control </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Backup Generator </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Emergency Lighting </CLabel> </div>
                          </li>
                        </ul>
                      </div>
                    </CCol>
                    <CCol xs="12" md="6" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">Other Safety</CLabel>
                      <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                    </CCol>
                    <CCol xs="12" md="6" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">Comments Security</CLabel>
                      <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                    </CCol>

                  </CFormGroup>
                </CCollapse>
              </div>

              <h4 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 1 ? null : 1)}>Customer Services { accordion === 1 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h4>
              <div className="mt-2">
                <CCollapse show={accordion === 1}>
                  <CFormGroup className="row">
                    <CCol xs="2" md="2" className="mt-2 d-flex align-items-center">
                      <CLabel htmlFor="select" className="fontnsize">I rent cranes </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedueofValrentcrane === 'j'}
                        onChange={Radiochangerentcrane}
                        value="j"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'J' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedueofValrentcrane === 'i'}
                        onChange={Radiochangerentcrane}
                        value="i"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'I' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                    </CCol>
                    <CCol xs="8" md="8" className="mt-2">
                      <Radio
                        checked={selectedueofValrentcrane === 'h'}
                        onChange={Radiochangerentcrane}
                        value="h"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'H' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Null </CLabel>
                    </CCol>

                    <CCol xs="2" md="2" className="mt-2  d-flex align-items-center">
                      <CLabel htmlFor="select" className="fontnsize">Loading Dock or Ramp </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedvalueofloadingDorR === 'g'}
                        onChange={RadiochangeloadingDorR}
                        value="g"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'G' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedvalueofloadingDorR === 'f'}
                        onChange={RadiochangeloadingDorR}
                        value="f"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'F' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                    </CCol>
                    <CCol xs="8" md="8" className="mt-2 mb-2">
                      <Radio
                        checked={selectedvalueofloadingDorR === 'e'}
                        onChange={RadiochangeloadingDorR}
                        value="e"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Null </CLabel>
                    </CCol>

                    <CCol xs="12" md="12" className="mt-2 mb-2">
                      <div>
                        <h5 className="mb-3 pl-3">Common spaces</h5>
                        <ul className="resolution_n_products">
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Bathrooms</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Dressing rooms </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Casino </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Dinning room </CLabel> </div>
                          </li>
                        </ul>
                      </div>
                    </CCol>

                    <CCol xs="2" md="2" className="mt-2 d-flex align-items-center">
                      <CLabel htmlFor="select" className="fontnsize">Est Visits </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedEstvisits === 'ab'}
                        onChange={RadiochangeEstvisits}
                        value="ab"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'AB' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedEstvisits === 'bc'}
                        onChange={RadiochangeEstvisits}
                        value="bc"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'BC' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                    </CCol>
                    <CCol xs="8" md="8" className="mt-2">
                      <Radio
                        checked={selectedEstvisits === 'cd'}
                        onChange={RadiochangeEstvisits}
                        value="cd"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'CD' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Null </CLabel>
                    </CCol>

                    <CCol xs="2" md="2" className="mt-2 d-flex align-items-center">
                      <CLabel htmlFor="select" className="fontnsize">custom construction </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedvalueofcustomconstruction === 'ef'}
                        onChange={Radiochangecustomconstruction}
                        value="ef"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'EF' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                    </CCol>
                    <CCol xs="2" md="1" className="mt-2">
                      <Radio
                        checked={selectedvalueofcustomconstruction === 'fg'}
                        onChange={Radiochangecustomconstruction}
                        value="fg"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'FG' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                    </CCol>
                    <CCol xs="8" md="8" className="mt-2">
                      <Radio
                        checked={selectedvalueofcustomconstruction === 'gh'}
                        onChange={Radiochangecustomconstruction}
                        value="gh"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'GH' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Null </CLabel>
                    </CCol>
                  </CFormGroup>
                  <h5 className="mt-2 pl-2">Energy and Fuels</h5>
                  <CFormGroup className="row">
                    <CCol xs="12" md="12">
                      <div>
                        <ul className="resolution_n_products">
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Fule </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Gas </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Car charging point</CLabel> </div>
                          </li>
                        </ul>
                      </div>
                    </CCol>
                    <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                      <CLabel htmlFor="select" className="fontnsize">Insurance </CLabel>
                    </CCol>
                    <CCol xs="2" md="2" className="mt-2 mb-2">
                      <Radio
                        checked={selectedvalueofInsurance === 'gh'}
                        onChange={RadiochangeInsurance}
                        value="gh"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'GH' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Included </CLabel>
                    </CCol>
                    <CCol xs="2" md="2" className="mt-2 mb-2">
                      <Radio
                        checked={selectedvalueofInsurance === 'hi'}
                        onChange={RadiochangeInsurance}
                        value="hi"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'HI' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">Apart </CLabel>
                    </CCol>
                    <CCol xs="5" md="5" className="mt-2 mb-2">
                      <Radio
                        checked={selectedvalueofInsurance === 'ij'}
                        onChange={RadiochangeInsurance}
                        value="ij"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'IJ' }}
                      />
                      <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                    </CCol>
                    <CCol xs="12" md="12" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">Sale Products</CLabel>
                      <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                    </CCol>
                    <CCol xs="12" md="12">
                      <div>
                        <ul className="resolution_n_products">
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Financing Equipment </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Truck Weighing </CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Racks</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">garbage removal</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">trash compactor</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">recycling garbage</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Pallet trucks</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Cars</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Mares</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Packaging</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">Moving</CLabel> </div>
                          </li>
                          <li>
                            <div><Checkbox
                              color="default"
                              inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                              <CLabel htmlFor="select" className="fontnsize">WIFI</CLabel> </div>
                          </li>
                        </ul>
                      </div>
                    </CCol>
                    <CCol xs="12" md="6" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">Other services</CLabel>
                      <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                    </CCol>
                    <CCol xs="12" md="6" className="mt-2 mb-2">
                      <CLabel htmlFor="text-input" className="fontnsize">Staff Services </CLabel>
                      <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                    </CCol>

                  </CFormGroup>
                </CCollapse>
              </div>
              <h4 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 2 ? null : 2)}>Logistics Services { accordion === 2 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h4>
              <div className="mt-2">
                <CCollapse show={accordion === 2}>
                  <CFormGroup className="row">
                    <div>
                      <ul className="resolution_n_products">
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">load</CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Download </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Palletized </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Deconsolidation </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Labelled </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Assembly </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Packing </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Kits </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">sensed </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Packaging </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Take inventory </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Cross docking </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Online inventory </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">WMS </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">distribution </CLabel> </div>
                        </li>
                      </ul>
                    </div>
                  </CFormGroup>
                </CCollapse>
              </div>
              <h4 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 3 ? null : 3)}>Services to people { accordion === 3 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h4>
              <div className="mt-2">
                <CCollapse show={accordion === 3}>
                  <CFormGroup className="row">
                    <div>
                      <ul className="resolution_n_products">
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">car wash</CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Kinesiologist </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Service station </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Servipag </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Vending machines </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Kiosk </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Green areas </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Sport Center </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">dental clinic </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Radio taxi </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">ATM </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Approach buses </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Mechanical workshop </CLabel> </div>
                        </li>
                        <li>
                          <div><Checkbox
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                          />
                            <CLabel htmlFor="select" className="fontnsize">Internal Transportation </CLabel> </div>
                        </li>
                      </ul>
                    </div>
                  </CFormGroup>
                </CCollapse>
              </div>
              <h4 className="mb-3">Operating and commercial conditions</h4>
              <h5 className="mt-2">Schedules</h5>
              <CFormGroup className="row">
                <CCol xs="2" md="2" className="mt-2 mb-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Hours of Operation </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 mb-2">
                  <Radio
                    checked={selectedueofValhrsOfOperation === 'z'}
                    onChange={RadiochangehrsOfOperation}
                    value="z"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'Z' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Mon-Fri day </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 mb-2">
                  <Radio
                    checked={selectedueofValhrsOfOperation === 'y'}
                    onChange={RadiochangehrsOfOperation}
                    value="y"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'Y' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Mon-Sat day </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 mb-2">
                  <Radio
                    checked={selectedueofValhrsOfOperation === 'x'}
                    onChange={RadiochangehrsOfOperation}
                    value="x"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'X' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Mon-Sun day </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 mb-2">
                  <Radio
                    checked={selectedueofValhrsOfOperation === 'w'}
                    onChange={RadiochangehrsOfOperation}
                    value="w"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'W' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">24/7 </CLabel>
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Comment Schedule</CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Payment methods </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Common expenses </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Time Renting </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Certifications </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Price from </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Price description </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
              </CFormGroup>
              <h4 className="mb-3">Warehouse Technical Specifications</h4>
              <CFormGroup className="row">
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Radier</CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">The ceiling </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Structure </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Closures </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>


                <CCol xs="2" md="2" className="mt-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Platforms </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludplateforms === 'l'}
                    onChange={Radiochangeincludofplateforms}
                    value="l"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'L' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2">
                  <Radio
                    checked={selectincludplateforms === 'k'}
                    onChange={Radiochangeincludofplateforms}
                    value="k"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'K' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                </CCol>
                <CCol xs="12" md="12" className="mt-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Shoulder Height </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>

                <CCol xs="2" md="2" className="mt-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Three phase </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludthreephase === 'o'}
                    onChange={Radiochangeincludofthreephase}
                    value="o"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'O' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludthreephase === 'n'}
                    onChange={Radiochangeincludofthreephase}
                    value="n"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'n' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                </CCol>
                <CCol xs="6" md="6" className="mt-2">
                  <Radio
                    checked={selectincludthreephase === 'm'}
                    onChange={Radiochangeincludofthreephase}
                    value="m"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'M' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Null </CLabel>
                </CCol>


                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Three phase Amperage </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="6" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Hight Gates </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>

                <CCol xs="2" md="2" className="mt-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Includes Office </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludOffice === 'r'}
                    onChange={RadiochangeincludOffice}
                    value="r"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'R' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Yes </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludOffice === 'q'}
                    onChange={RadiochangeincludOffice}
                    value="q"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'Q' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">No </CLabel>
                </CCol>
                <CCol xs="8" md="8" className="mt-2">
                  <Radio
                    checked={selectincludOffice === 'p'}
                    onChange={RadiochangeincludOffice}
                    value="p"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'P' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">Null </CLabel>
                </CCol>
                <CCol xs="2" md="2" className="mt-2 d-flex align-items-center">
                  <CLabel htmlFor="select" className="fontnsize">Includes bathrooms </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludbathroom === 'v'}
                    onChange={Radiochangeincludbathroom}
                    value="v"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'V' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">0 </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludbathroom === 'u'}
                    onChange={Radiochangeincludbathroom}
                    value="u"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'U' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">1 </CLabel>
                </CCol>
                <CCol xs="2" md="1" className="mt-2">
                  <Radio
                    checked={selectincludbathroom === 't'}
                    onChange={Radiochangeincludbathroom}
                    value="t"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'T' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">2 </CLabel>
                </CCol>
                <CCol xs="7" md="7" className="mt-2">
                  <Radio
                    checked={selectincludbathroom === 's'}
                    onChange={Radiochangeincludbathroom}
                    value="s"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'S' }}
                  />
                  <CLabel htmlFor="select" className="fontnsize">3 </CLabel>
                </CCol>

                <div>
                  <h4 className="mb-3 mt-2 pl-3" onClick={() => setAccordion(accordion === 4 ? null : 4)}>Dangerous Warehouse { accordion === 4 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h4>
                  <CCollapse show={accordion === 4}>
                    <ul className="resolution_n_products">
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Explosives </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Flammable Gases </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Harmless gases </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Toxic gases </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Flammable Liquids </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Solids with risk of Spontaneous Combustion </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Oxidizers </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Peroxides </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Toxic </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Infectious Substances </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Radioactive </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Corrosive </CLabel> </div>
                      </li>
                      <li>
                        <div><Checkbox
                          color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                          <CLabel htmlFor="select" className="fontnsize">Miscellaneous Dangerous </CLabel> </div>
                      </li>
                    </ul>
                  </CCollapse>
                </div>
              </CFormGroup>
              <CCardFooter className="text-center">
                <CButton type="submit" size="" className="ml-auto y_bg mr-2"> Submit</CButton>
                <CButton type="reset" size="" color="secondary" className="ml-2"> Reset</CButton>
              </CCardFooter>
            </CForm>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal mt-3">
              <h4>Other info Centro Bodegas</h4>
              <h5>Paid</h5>
              <CFormGroup className="row">
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">Bodegas Center </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="4" className="mt-2 mb-2 d-flex ">
                  <div>
                    <CLabel htmlFor="file-input">Photos</CLabel>
                    <CInputFile id="file-input" name="file-input" onChange={uploadSingleFile} disabled={file.length === 50} />
                  </div>                  
                </CCol>
                <CCol xs="12" md="8" className="mt-2 mb-2 d-flex ">
                <div className="cat_img_preview_div my-2 d-flex w-100" >
                    {/* <img src={src} alt={alt} id="" className="newImg" /> */}
                    {file.length > 0 &&
                      file.map((item, index) => {
                        return (
                          <div className="multibanner_div " key={item} >
                            <img src={item} alt="" className="multiImg_in_banner" />
                            <Button className="multiImg_in_banner_btn" variant="contained" size="small" onClick={() =>
                              deleteFile(index)}>
                              <CloseIcon size="small" style={{ fontSize: "14px" }} />
                            </Button>
                          </div>
                        );
                      })}
                  </div>
                </CCol>
                <CCol xs="12" md="4" className="mt-2 mb-2 d-flex">
                  <div>
                    <CLabel htmlFor="file-input">3d photos</CLabel>
                    <CInputFile id="file-input" name="file-input" onChange={uploadSingleFile1} disabled={file1.length === 50} />
                  </div>                  
                </CCol>
                <CCol xs="12" md="8" className="mt-2 mb-2 d-flex">
                <div className="cat_img_preview_div my-2 d-flex w-100" >
                    {/* <img src={src} alt={alt} id="" className="newImg" /> */}
                    {file1.length > 0 &&
                      file1.map((item, index1) => {
                        return (
                          <div className="multibanner_div " key={item} >
                            <img src={item} alt="" className="multiImg_in_banner" />
                            <Button className="multiImg_in_banner_btn" variant="contained" size="small" onClick={() =>
                              deleteFile1(index1)}>
                              <CloseIcon size="small" style={{ fontSize: "14px" }} />
                            </Button>
                          </div>
                        );
                      })}
                  </div>
                </CCol>
                <CCol xs="12" md="4" className="mt-2 mb-2 d-flex">
                  <div>
                    <CLabel htmlFor="file-input">videos</CLabel>
                    <CInputFile id="file-input" name="file-input" onChange={uploadSingleFile2} disabled={file2.length === 50} />
                  </div>
                  
                </CCol>
                <CCol xs="12" md="4" className="mt-2 mb-2 d-flex">
                <div>
                    <div className="cat_img_preview_div my-2 d-flex w-100" >
                      {/* <img src={src} alt={alt} id="" className="newImg" /> */}
                      {file2.length > 0 &&
                        file2.map((item, index2) => {
                          return (
                            <div className="multibanner_div " key={item} >
                              <img src={item} alt="" className="multiImg_in_banner" />
                              <Button className="multiImg_in_banner_btn" variant="contained" size="small" onClick={() =>
                                deleteFile2(index2)}>
                                <CloseIcon size="small" style={{ fontSize: "14px" }} />
                              </Button>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="textarea-input"> </CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="2"
                    placeholder="Enter Here..."
                  />
                </CCol>
                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="textarea-input">Custom texts</CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="2"
                    placeholder="Enter Here..."
                  />
                </CCol>
               <CCol xs="12" md="12" className="text-center">
                  <CButton size="md" className="ml-auto y_bg m-2" type="submit">Upload</CButton>
                  <CButton size="md" color="secondary" className="ml-auto m-2" >Cancel</CButton>
               </CCol>
            </CFormGroup>
         </CForm>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
           <div className="row">
              <div className="col-lg-3 pl-0 familyList">
              <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                     Family And Sub-Family
                    </ListSubheader>
                  }
                  className={classes.root}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Company Data" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Personal Data" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Warehouse Center Data" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Warehouse management type" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resolution and type of products" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sizes and Operation Type" />
                  </ListItem>
                  <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Other spaces for rent" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button >
                        <ListItemIcon className="justify-content-center">
                          <FiberManualRecordIcon  className="ft-12 justify-content-center" />
                        </ListItemIcon>
                        <ListItemText primary="Patios" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={securityClick}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Security" />
                    {security ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={security} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button >
                        <ListItemIcon className="justify-content-center">
                          <FiberManualRecordIcon  className="ft-12 justify-content-center" />
                        </ListItemIcon>
                        <ListItemText primary="hjasbjb" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Customer Services" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logistics Services" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Services to people" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Operating and commercial conditions" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Warehouse Technical Specifications" />
                  </ListItem>
                  <ListItem button onClick={DangerousWarehouseClick}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dangerous Warehouses" />
                    {DangerousWarehouse ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={DangerousWarehouse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button >
                        <ListItemIcon className="justify-content-center">
                          <FiberManualRecordIcon  className="ft-12 justify-content-center" />
                        </ListItemIcon>
                        <ListItemText primary="Dangerous Classes" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Evaluations" />
                  </ListItem>
                  <ListItem button onClick={OtherInfoClick}>
                    <ListItemIcon>
                      <ArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Other info Centro Bodegas" />
                    {OtherInfo ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={OtherInfo} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button >
                        <ListItemIcon className="justify-content-center">
                          <FiberManualRecordIcon  className="ft-12 justify-content-center" />
                        </ListItemIcon>
                        <ListItemText primary="Paid" />
                      </ListItem>
                    </List>
                  </Collapse>

                </List>
              </div>
              <div className="col-lg-9 pl-0">
              <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Manage CB Form </h4>
                            <Link to="/add-field">
                                <CButton size="md"  color="info" className="ml-auto">+ Add Field</CButton>
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
                                                <td className="py-2 d-flex">                                                 
                                                <Link to="/edit-field">
                                                <CButton size="sm" color="success" className="ml-1" >
                                                    <CIcon name="cil-pencil" color="primary" />
                                                </CButton>
                                                 </Link>
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
              </div>
           </div>
      </TabPanel>
      </SwipeableViews>
   </CCard>
</div>
);
}
export default AddProducts;