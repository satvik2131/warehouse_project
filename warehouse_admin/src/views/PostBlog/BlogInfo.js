import React from 'react';
import { 
  CCol,
  CRow,  
} from '@coreui/react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';






const BlogInfo = (props)=>{
 
    return(
       <> 
       <div className="card_bg" >
         <CRow>
            <CCol lg="3" md="3" sm="12">
               <img src={props.WSrc} alt="Blog Image" className="w-100 blog_img_height"/>
            </CCol>
            <CCol lg="9" md="9" sm="12" className="pl-0 warehouseDetails">   
               <h4>{props.Wtital}</h4> 
                          
               <p className="mb-1">{props.Wdiscription}</p> 
            </CCol>
         </CRow>
      </div>
      </>
    )

}
export default BlogInfo;
// onClick={()=>{props.onSelect(props.id)}}