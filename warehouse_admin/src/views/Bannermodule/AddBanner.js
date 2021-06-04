import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CLabel,
    CSelect,
    CInput,
    CButton,CFormGroup
} from '@coreui/react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const AddBanner = (props)=>{
    // const [showdropdown,setshowdropdown] = useState(false)
    const [file, setFile] = useState([]);

    const history = useHistory();

    function uploadSingleFile(e) {
      setFile([...file, URL.createObjectURL(e.target.files[0])]);
    //   console.log("file", file);
    }
  
    function upload(e) {
      e.preventDefault();
    //   console.log(file);
    }
  
    function deleteFile(e) {
      const s = file.filter((item, index) => index !== e);
      setFile(s);
    //   console.log(s);
    }
 
    return(
       <> 
        <div className="card w-100">
        <div className="card-header align-items-center justify-content-between d-flex">
                  <h4>Add Banner</h4>                 
                  <CButton size="md" className="btn_orange" onClick={()=>history.goBack()}><KeyboardBackspaceIcon /></CButton>
               </div>
            <div className="card-body">
              
                <form>
                <CFormGroup className="row">

                <CCol xs="12" md="12" className="mt-2 mb-2">
                  <CLabel htmlFor="select" className="fontnsize">Select CB Owner</CLabel>
                  <CSelect custom name="select" id="select" className="fontnsize">
                    <option value="0">Please select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CSelect>
                </CCol>               
                </CFormGroup>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <div>
                            <h5>Select Alignment</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Horizontal</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">Vartical</label>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h5>Where you want to Publish ?</h5>
                            <ul className="resolution_n_products pl-1">
                                <li>
                                    <div>
                                    <Checkbox                            
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                    />  
                                    <CLabel htmlFor="select" className="fontnsize">On search page </CLabel>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <Checkbox                            
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                    />  
                                    <CLabel htmlFor="select" className="fontnsize">On detail tab</CLabel>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <Checkbox                            
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                    />  
                                    <CLabel htmlFor="select" className="fontnsize">On static page</CLabel>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <Checkbox                            
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                    // onChange={changefun}
                                    // checked={()=>setshowdropdown(!showdropdown)}
                                    />  
                                    <CLabel htmlFor="select" className="fontnsize">On blogs </CLabel>
                                    </div>
                                </li>
                                <li >                               
                                    <CSelect custom name="select" id="select" className="fontnsize">
                                        <option value="0">Please select</option>
                                        <option value="1">Warehouse security</option>
                                        <option value="2">Warehouse Management</option> 
                                        <option value="3">Warehouse Operation</option>
                                        <option value="4">Warehouse Services</option>                         
                                    </CSelect>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <h5>Choose start and end date of banner</h5>
                            <div className="d-flex">
                               <div className="mr-2">
                               <CLabel htmlFor="date-input" className="fontnsize">Start Date</CLabel>
                               <CInput className="fontnsize" type="date"  name="date-input" placeholder="" className="date-left"/>  
                               </div>
                               <div>
                               <CLabel htmlFor="date-input" className="fontnsize">End Date</CLabel>
                               <CInput className="fontnsize" type="date"  name="date-input" placeholder="" className="date-left"/>  
                               </div>
                                
                            </div>
                        <div className="form-group preview mt-2" style={{background: "#f3f3f3",minHeight:"148px"}}>
                            {file.length > 0 &&
                            file.map((item, index) => {
                            return (
                            <div className="multibanner_div " key={item} >
                                <img src={item} alt="" className="multiImg_in_banner"/>                
                                <Button className="multiImg_in_banner_btn" variant="contained" size="small"  onClick={() =>
                                    deleteFile(index)}>
                                    <CloseIcon size="small" style={{fontSize:"14px"}}/>
                                </Button>
                            </div>
                            );
                            })}
                        </div>
                        <div className="form-group">
                            <input
                            type="file"
                            disabled={file.length === 10}
                            className="form-control"
                            onChange={uploadSingleFile}
                            />
                        </div>
                        </div>
                        <div className="col-lg-12 col-12 text-center">
                        <Button
                            type="button"
                            className="y_bg mr-2"       
                            onClick={upload}
                            >
                        Upload
                        </Button>
                        <Button
                            type="button" 
                            className="ml-2"
                            variant="contained"                     
                                                         
                            >
                        Reset
                        </Button>
                        </div>
                    </div>
                </form>
            </div>
         </div>
   

</>
)
}
export default AddBanner;