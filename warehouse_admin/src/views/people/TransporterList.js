import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const usersData = [
    {id: 0, Company_Name:'abc pvt ltd', Email: 'Nikhil@gmail.com', Phone_Number: '7896544123',  Country: 'UK',City: 'Mayami',GST: 'BDBDN7411555'},
    {id: 1, Country_Name:'xyz pvt ltd', Email: 'rohit@gmail.com',  Phone_Number: '4748586912',Country: 'UK', City: 'Mayami',GST: 'KHSRH12457963'}
  ]

const fields = [
    { key: 'Company_Name' },
    { key: 'Email'},
    { key: 'Phone_Number'},
    { key: 'Country'},    
    { key: 'City'},
    { key: 'GST'},
     
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const TransporterList = () => {
    //const  = useState([])

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Transporter List </h4> 
                            <Link to="/people/add-transporter">
                                <CButton size="md"  color="success" className="ml-auto">+ Add Transporter</CButton>
                            </Link>                           
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
                                scopedSlots={{
                                    
                                    'show_details':
                                        () => {
                                            return (
                                                <td className="py-2 d-flex">
                                                  <Link to="/people/add-transporter" >
                                                    <CButton size="sm"  color="success" className="ml-1">
                                                        <CIcon name="cil-pencil" color="primary"/>
                                                    </CButton>
                                                    </Link>
                                                    <CButton size="sm"  color="danger" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary"/>
                                                    </CButton>
                                                </td>
                                            )
                                        }
                                    
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default TransporterList
