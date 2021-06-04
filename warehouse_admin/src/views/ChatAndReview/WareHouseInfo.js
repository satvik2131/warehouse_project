import React from 'react';
import { 
  CCol,
  CRow,  
} from '@coreui/react'
import Chatcarousel from './Chatcarousel'
import { Link,useLocation } from 'react-router-dom'
import StarIcon from '@material-ui/icons/Star';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';



const WareHouseInfo = (props)=>{

   const location = useLocation();
   console.log(location); 
    return(
       <> 
       <Link to="/reviews" className="reviews">
       <div className="card_bg">
         <CRow>
            <CCol lg="4" md="4" sm="12">
               <Chatcarousel />
            </CCol>
            <CCol lg="8" md="8" sm="12" className="pl-0 warehouseDetails">
               <div className="d-flex align-items-center justify-content-between">
                 <div className="d-flex align-items-center"><h4>{props.Wtital}</h4>
                  <h6 className="mb-1 ml-2 rank">Rank <span>{props.Wrank}</span></h6></div>
                  {location.pathname === `/reviews` ? null:(<p className="mb-0 ml-3 reviews">Pending Reviews <Link to="/reviews"><span><a style={{color:"red"}}  onClick={()=>{props.onSelect(props.id)}}>({props.Wpendingreview})</a></span></Link></p>) }
                  
               </div>
               <div className="align-items-center d-flex">
                  <div className="d-flex">
                     <p className="mb-0 mr-1 warehouserating">{props.Wrating} </p>
                     <StarIcon fontSize="small" style={{color:"#ff9800"}} />
                  </div>
                  <div className="ml-2 d-flex">
                     <p className="mb-0 reviews">Reviews <Link to="/reviews"><span><a href="#" style={{color:"#6699ff"}}>({props.Wreview})</a></span></Link></p>
                     
                  </div>
               </div>
               <p className="mb-1">{props.Wdiscription}</p> 
               <div className="d-flex align-items-center justify-content-between">              
               <p className="regionNcommune"><span>Region:</span> {props.Wregion}</p>                          
               <p className="regionNcommune"><span>Commune:</span> {props.Wcommune}</p>  </div>    
               <p className="regionNcommune"><span>Direction:</span> {props.Waddress}</p>   
               <p className="regionNcommune"><span>Featured Services:</span> {props.Wfeatureservices}</p> 
               {/* <div className="d-flex align-items-center justify-content-between">
                  <p className="regionNcommune"><span>Promotional text:</span> <span style={{color:"green"}}>{props.Wpromotionaltax}</span></p>    
                  <a href="#">{props.Wlink}</a> 
               </div> */}
            </CCol>
         </CRow>
      </div>
      </Link>
      </>
    )

}
export default WareHouseInfo;