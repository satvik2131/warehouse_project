import React ,{useState} from "react"
import { 
    CCard,
    CCardBody,
    CCardHeader,
    CCarousel,
    CCarouselCaption,
    CCarouselControl,
    CCarouselIndicators,
    CCarouselInner,
    CCarouselItem,
    CCol,
    CRow, CInput, CButton
  } from '@coreui/react'
import Rating from '@material-ui/lab/Rating';
import CIcon from '@coreui/icons-react'

const BlogReviewInfo =(props)=>{
    const [value, setValue] = useState(props.Rrating);
       
    return(
        <>
        <CRow>
          <CCol sm="12">
            <CCard className="review-star">
            <CCardBody>
              <div className="d-flex">
                <img src='avatars/6.jpg' className="review_img"/>
                <div className="w-100">
                <div className="d-flex justify-content-between align-items-center"> 
                  <h5>{props.Rusername}</h5>
                  <input type="checkbox"  className="custom_checkbox"/>   
                  </div>                               
                    <Rating name="size-large" value={value} readOnly />                 
                  <p className="regionNcommune mb-0" style={{ color:'#8a93a2' }}>{props.Rdiscription} </p>                 
                </div>
              </div>
              <div className="d-flex mt-2 align-items-center reply-wrap">
                <img src='avatars/user.png' className="reply_img"/>
                <CInput id="text-input" name="text-input" placeholder="Reply " />
                <CButton type="submit" size="" color="success"><CIcon name="cil-paper-plane" /></CButton>
              </div>
            </CCardBody>
            </CCard>           
          </CCol>
        </CRow>
        
       </>
    );

}
export default BlogReviewInfo;