import React from 'react';
import { Link } from 'react-router-dom'
import { 
  CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CBadge  
} from '@coreui/react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import BlogInfo from "./BlogInfo"
import BlogData from "./BlogData"
import BlogReviewData from "./BlogReviewData"
import BlogReviewInfo from "./BlogReviewInfo"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CIcon from '@coreui/icons-react'

var Reviewcount = [...BlogReviewData]
// console.log(WarehouseData.key)
console.log(BlogData)

const BlogAndReview = ()=>{   
    return(      
        <>
        <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Blog Reviews </h4>
                            <Link to="/blogs">
                                  <CButton size="md" className="ml-auto btn_orange"><KeyboardBackspaceIcon /> </CButton>
                          </Link>
                        </CCardHeader>
                        <CCardBody>
        {BlogData.map((val)=>{           
            return(
          <BlogInfo
            key={val.key}
            WSrc={val.WSrc}
            Wtital= {val.Wtital}                    
            Wdiscription= {val.Wdiscription}         
           />
           );
        })}
        
        <CRow>
            <CCol lg="12" sm="12" className="d-flex align-items-center justify-content-between mb-2">
               <h4>Reviews ({Reviewcount.length})</h4>
               <CButton size="sm" color="danger" className="mr-4"><CIcon name="cil-trash" color="primary" /></CButton> 
            </CCol>
        </CRow>  
        {BlogReviewData.map((val)=>{            
        return(
            <BlogReviewInfo
              Rusername={val.Rusername}
              Rrating={val.Rrating}
              Rdiscription={val.Rdiscription}
             />
        );
        })}
        </CCardBody>
        </CCard>
        </CCol>
      </CRow>
        </>
    ); 
}
export default BlogAndReview;