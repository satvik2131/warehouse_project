import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CWidgetIcon,
} from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import PaymentIcon from '@material-ui/icons/Payment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 


const Dashboard = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <>     
      <CRow>
       <CCol xs="12" sm="12" >
       <CRow>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Sales Income" header="$1.999,50" color="success" iconPadding={false} className="pp">
            <MonetizationOnIcon width={24} />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Receipts Amount" header="$1.999,50" color="dark" iconPadding={false} className="pp">
            <ReceiptIcon width={24} />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Purchase Amount" header="$1.999,50" color="warning" iconPadding={false} className="pp">
            <CIcon width={24} name="cil-basket" />
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Payments Amount" header="$1.999,50" color="danger" iconPadding={false} className="pp">
            <PaymentIcon width={24} />
          </CWidgetIcon>
        </CCol>   
        </CRow>
        </CCol>           
             
      </CRow>
    </>
  )
}

export default Dashboard;
