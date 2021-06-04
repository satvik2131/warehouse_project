import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CWidgetIcon
   
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const usersData = [
    {id: 0, date_time:'2021-03-11 13:59:56', Invoice_ID: '86551556', Product_Tax: '22.50',Order_Tax: '0.00', Total_Amount: '22.50',},
    {id: 1, date_time:'2021-05-21 18:48:02', Invoice_ID: '59161551',Product_Tax: '92.00',Order_Tax: '0.00', Total_Amount: '92.50',}
  ]

const fields = [
    { key: 'Invoice_ID'},
    { key: 'date_time' },    
    { key: 'Product_Tax'},
    { key: 'Order_Tax'}, 
    { key: 'Total_Amount'},       
]


const PurchaseTaxReport = () => {  
    return (
        <>
        <CRow> 
        <CCol xs="12" sm="6" lg="4">        
          <CWidgetIcon text="Sale Amount " header="$0.0" color="primary" iconPadding={false}>
            <CIcon width={24} name="cil-dollar" className="mx-5"/>
          </CWidgetIcon>          
        </CCol>
        <CCol xs="12" sm="6" lg="4">        
          <CWidgetIcon text="Product Tax" header="$0.0" color="info" iconPadding={false}>
            <CIcon width={24} name="cil-dollar" className="mx-5"/>            
          </CWidgetIcon>          
        </CCol>         
        <CCol xs="12" sm="6" lg="4">        
          <CWidgetIcon text="Order Tax" header="$0.0" color="warning" iconPadding={false}>
            <CIcon width={24} name="cil-dollar" className="mx-5"/>
          </CWidgetIcon>          
        </CCol>     
      </CRow>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Sale Tax Report </h4>                                                       
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
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default PurchaseTaxReport;
