import React from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CWidgetIcon
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const usersData = [
    {id: 0, Name:'Nikhil', Email: 'Nikhil@gmail.com', Phone_Number: '7896544123',  Company: 'New Comapany pvt ltd',User_Group: 'Supplier',Status: 'Supplier'},
    {id: 1, Name:'Rohit', Email: 'rohit@gmail.com',  Phone_Number: '4748586912',Company: '-', User_Group: 'Purchase Manager',Status: 'User'}
  ]

const fields = [
    { key: 'Name' },
    { key: 'Email'},
    { key: 'Phone_Number'},
    { key: 'Company'},    
    { key: 'User_Group'}, 
    { key: 'Status'},  
    // { key: 'Store'},    
    {
        key: 'show_details',
        label: 'Action',        
        filter: false
    }
]


const UserList = () => {
    //const  = useState([])

    return (
        <>
        <CRow> 
        <CCol xs="12" sm="6" lg="3">        
          <CWidgetIcon text="Total Customers " header="10" color="primary" iconPadding={false}>
            <CIcon width={24} name="cil-user" className="mx-3"/>
          </CWidgetIcon>          
        </CCol>
        <CCol xs="12" sm="6" lg="3">        
          <CWidgetIcon text="Total Users" header="22" color="success" iconPadding={false}>
            <CIcon width={24} name="cil-user" className="mx-3"/>
          </CWidgetIcon>          
        </CCol>
        <CCol xs="12" sm="6" lg="3">        
          <CWidgetIcon text="Total Suppliers" header="5" color="info" iconPadding={false}>
            <CIcon width={24} name="cil-user" className="mx-3"/>            
          </CWidgetIcon>          
        </CCol>         
        <CCol xs="12" sm="6" lg="3">        
          <CWidgetIcon text="Total Transporters" header="2" color="warning" iconPadding={false}>
            <CIcon width={24} name="cil-user" className="mx-3"/>
          </CWidgetIcon>          
        </CCol>     
       
      </CRow>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>User List </h4> 
                            <Link to="/people/add-user">
                                <CButton size="md"  color="success" className="ml-auto">+ Add User</CButton>
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
                                                    <Link to="/people/add-user">
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

export default UserList;
