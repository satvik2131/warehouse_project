import React, { useState,createContext } from 'react';
import { 
  CCol,
  CRow, 
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import WareHouseInfo from "./WareHouseInfo";
import WarehouseData from "./WarehouseData";



const Myid = createContext();

const ChatAndReview = ()=>{
  const [id ,newid] =useState() 

  const showcard =(selectid)=>{  
    console.log(selectid) 
    newid(selectid)  
  
  }
  
    return(  
           
        <>   
      {/* <Myid.provider value={id} ><ChatAndReview /> </Myid.provider> */}
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Chat and Reviews</h4>
            </CCardHeader>
            <CCardBody>
       {WarehouseData.map((val,index)=>{           
        return(
        <WareHouseInfo  
        key={index}       
        id={index}
        Wtital= {val.Wtital}
        Wrank= {val.Wrank}
        Wrating= {val.Wrating}
        Wreview= {val.Wreview}
        Wpendingreview= {val.Wpendingreview}
        Wdiscription= {val.Wdiscription}
        Wregion= {val.Wregion}
        Wcommune= {val.Wcommune}
        Waddress= {val.Waddress}
        Wfeatureservices= {val.Wfeatureservices}
        Wlink= {val.Wlink}
        Wpromotionaltax= {val.Wpromotionaltax}
        onSelect={showcard}        
        />
    );

       })} 
       </CCardBody>
          </CCard>
        </CCol>
      </CRow>
       </>   
    )

}
export default ChatAndReview;