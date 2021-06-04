import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link ,useHistory } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
  CButton,
  CCard, CCardHeader,
  CCardBody, CCardFooter,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CTextarea,
  CInputFile, CCollapse
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  splitterStyle: {
    backgroundColor: theme.palette.background.paper,
    width: 100,
  },
}));
const initialState = { alt: "default", src: "avatars/default.png" };
const Edit_form = () => {
  const [country, setcountry] = useState("Chile");
  const [Region, Setregion] = useState(country)
  const classes = useStyles();

  const history = useHistory();
  console.log(history)

  const [{ alt, src }, setPreview] = useState(initialState);
  const [selectedValue, SelectedValue] = React.useState('');
  const [selectedValueofmeeting, setSelectedValueofmeeting] = React.useState('');
  const [selectedValueofclean, setSelectedValueofclean] = React.useState('')
  const [selectedValueofcowork, SelectedValueofcowork] = React.useState('')
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
    SelectedValue(event.target.value);
  };
  const RadiochangeMeetingRoom = (event) => {
    setSelectedValueofmeeting(event.target.value);
  }
  const RadiochangecleanRoom = (event) => {
    setSelectedValueofclean(event.target.value);
  }
  const Radiochangecowork = (event) => {
    SelectedValueofcowork(event.target.value);
  }
  const Radiochangecctv = (event) => {
    setSelectedValueofcctv(event.target.value);
  }
  const RadiochangehrsOfOperation = (event) => {
    SelectedValueobasbxcjbs(event.target.value);
  }
  const Radiochangeincludbathroom = (event) => {
    SelectedValueincludbathroom(event.target.value);
  }
  const RadiochangeincludOffice = (event) => {
    SelectedValueincludOffice(event.target.value);
  }
  const Radiochangeincludofthreephase = (event) => {
    SelectedValueincludthreephase(event.target.value);
  }
  const Radiochangeincludofplateforms = (event) => {
    SelectedValueincludplateforms(event.target.value);
  }
  const Radiochangerentcrane = (event) => {
    SelectedValueincludrentcrane(event.target.value);
  }
  const RadiochangeloadingDorR = (event) => {
    SelectedValueinloadingDorR(event.target.value);
  }
  const RadiochangeEstvisits = (event) => {
    SelectedValueinEstvisits(event.target.value);
  }
  const Radiochangecustomconstruction = (event) => {
    SelectedValueincustomconstruction(event.target.value);
  }
  const RadiochangeInsurance = (event) => {
    SelectedValueinInsurance(event.target.value);
  }
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
  function deleteFile4(e) {
    setPreview(initialState);   
  }

  return (
    <CRow>
      <CCol xs="12" md="12" >
        <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Edit CB Form </h4>            
                <CButton size="md" className="ml-auto btn_orange" onClick={()=>history.goBack()}><KeyboardBackspaceIcon /></CButton>
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
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
                    {/* <CInputFile id="file-input" name="file-input" onChange={uploadSingleFile4} disabled={file4.length === 1} /> */}
                    <CInputFile id="file-input" name="file-input" accept="image/*"  onChange={fileHandler}/>
                  </div>
                  <div>
                    <div className="cat_img_preview_div1 my -2" >
                      {/* <img src={src} alt={alt} id="" className="newImg" /> */}
                      <img src={src} alt={alt} id="" className="newImg1" />
                      <Button className="multiImg_in_banner_btn1" variant="contained" size="small" onClick={deleteFile4}>
                        <CloseIcon size="small" style={{ fontSize: "14px" }} />
                     </Button>
                    </div>
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
                    style={{padding:"4"}}
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
                <CCol xs="12" md="4" className="mt-2 mb-2">
                  <CLabel htmlFor="text-input" className="fontnsize">max size </CLabel>
                  <CInput className="fontnsize" type="text" name="text-input" placeholder="" className="text-left" />
                </CCol>
                <CCol xs="12" md="4" className="mt-2 mb-2">
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
                <CCol xs="2" md="3" className="mt-2 mb-2">
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
              <h3 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 0 ? null : 0)}>Security { accordion === 0 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h3>
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
                    <CCol xs="8" md="9" className="mt-2 mb-2">
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

              <h3 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 1 ? null : 1)}>Customer Services { accordion === 1 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h3>
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
                    <CCol xs="6" md="8" className="mt-2">
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
                    <CCol xs="5" md="5" className="mt-2 mb-2">
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
                    <CCol xs="6" md="8" className="mt-2">
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
                    <CCol xs="5" md="5" className="mt-2">
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
                    <CCol xs="12" md="6" className="mt-2 mb-2">
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
              <h3 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 2 ? null : 2)}>Logistics Services { accordion === 2 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h3>
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
              <h3 className="mb-3 d-inline" onClick={() => setAccordion(accordion === 3 ? null : 3)}>Services to people { accordion === 3 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h3>
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
              <h3 className="mb-3">Operating and commercial conditions</h3>
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
              <h3 className="mb-3">Warehouse Technical Specifications</h3>
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
                <CCol xs="2" md="1" className="mt-2">
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
                <CCol xs="4" md="4" className="mt-2">
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
                  <h3 className="mb-3 mt-2 pl-3" onClick={() => setAccordion(accordion === 4 ? null : 4)}>Dangerous Warehouse { accordion === 4 ? <ExpandLessIcon color="dark"/> : <ExpandMoreIcon color="dark" />}</h3>
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
                <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
              </CCardFooter>
            </CForm>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal mt-3">
              <h3>Other info Centro Bodegas</h3>
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
                  <CLabel htmlFor="textarea-input">Prices and Promotions</CLabel>
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
              </CFormGroup>
            </CForm>

          </CCardBody>
          <CCardFooter className="text-center">
            <CButton type="submit" size="" color="success" className="mr-2"><CIcon name="cil-scrubber" /> Upload</CButton>
            <CButton type="reset" size="" color="danger" className="ml-2"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>

        </CCard>
      </CCol>
    </CRow>
  );
}
export default Edit_form;
