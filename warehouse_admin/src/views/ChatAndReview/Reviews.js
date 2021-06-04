import React from 'react';
import { 
  CButton,
  CCol,
  CRow,  
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { Link, useHistory,useLocation } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import WareHouseInfo from "./WareHouseInfo"
import WarehouseData from "./WarehouseData"
import Reviewinfo from "./BlogInfo"
import Reviewdata from "./Reviewdata"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CIcon from '@coreui/icons-react'
import Chatcarousel from './Chatcarousel'
import StarIcon from '@material-ui/icons/Star';

var Reviewcount = [...Reviewdata]
console.log(WarehouseData.key)

const Reviews = ()=>{   
  const history = useHistory();
  console.log(history)
  const location =useLocation();
   console.log(location)
    return(
        <>
        <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Warehouse Details</h4>
              <CButton size="md" className="ml-auto btn_orange" onClick={()=>history.goBack()}><KeyboardBackspaceIcon /></CButton>
            </CCardHeader>
            <CCardBody>
        {/* {WarehouseData.map((val)=>{           
            return(
          <WareHouseInfo
            key={val.key}
            Wtital= {val.Wtital}
            Wrank= {val.Wrank}
            Wrating= {val.Wrating}
            Wreview= {val.Wreview}            
            Wdiscription= {val.Wdiscription}
            Wregion= {val.Wregion}
            Wcommune= {val.Wcommune}
            Waddress= {val.Waddress}
            Wfeatureservices= {val.Wfeatureservices}
            Wlink= {val.Wlink}
            Wpromotionaltax= {val.Wpromotionaltax} 

           />
           );
        })} */}

        <div className="card_bg">
            <CRow>
              <CCol lg="4" md="4" sm="12">
                <Chatcarousel />
              </CCol>
              <CCol lg="8" md="8" sm="12" className="pl-0 warehouseDetails">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <h4>Sugar Warehouse</h4>
                    <Link to="/rank"><h6 className="mb-1 ml-2 rank">Rank <span> 3</span></h6></Link>
                  </div>
                  {location.pathname=== "/reviews"? null:<p className="mb-0 ml-3 reviews">Pending Reviews <span style={{ color: "red" }}>()</span></p>}
                </div>
                <div className="align-items-center d-flex">
                  <div className="d-flex">
                    <p className="mb-0 mr-1 warehouserating">4.3 </p>
                    <StarIcon fontSize="small" style={{ color: "#ff9800" }} />
                  </div>
                  <div className="ml-2 d-flex">
                    <p className="mb-0 reviews">Reviews <span><a style={{ color: "#6699ff" }}>(4)</a></span></p>

                  </div>
                </div>
                <p className="mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="regionNcommune"><span>Region: </span> United Kingdom</p>
                  <p className="regionNcommune"><span>Commune: </span>sugar work Society </p>
                </div>
                <p className="regionNcommune"><span>Direction: </span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="regionNcommune"><span>Featured Services: </span> gacacubc,yucsbubacb,ubasb</p>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="regionNcommune"><span>Promotional text: </span> <span style={{ color: "green" }}>Paid </span></p>
                  {/* <a href="#">www.warehouse.com</a> */}
                </div>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
        </CCard>
        </CCol>
      </CRow>
        
        <CRow>
            <CCol lg="12" sm="12" className="d-flex align-items-center justify-content-between mb-2">
               <h4 className="ml-3">Reviews ({Reviewcount.length})</h4> 
               <CButton size="sm" color="danger" className="mr-4"><CIcon name="cil-trash" color="primary" /></CButton>
            </CCol>
        </CRow>  
        {Reviewdata.map((val)=>{            
        return(
            <Reviewinfo
              Rusername={val.Rusername}
              Rrating={val.Rrating}
              Rdiscription={val.Rdiscription}
             />
        );
        })}
        </>
    ); 
}
export default Reviews;