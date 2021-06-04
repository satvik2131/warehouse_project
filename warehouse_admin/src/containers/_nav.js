import React from 'react'
import CIcon from '@coreui/icons-react'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BrokenImageOutlinedIcon from '@material-ui/icons/BrokenImageOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
  },
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
 

  {
    _tag: 'CSidebarNavItem',
    name: 'CB form',   
    icon: <ListAltOutlinedIcon className="mr-3" />,
    to: '/cb-form'   
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'CB Management',   
    icon: <ListOutlinedIcon className="mr-3"/>,
    to: '/cb-management'   
  },
  {
    _tag: 'CSidebarNavItem',  
    name: 'Chat And Review',   
    icon: <ForumOutlinedIcon  className="mr-3" />,
    to: '/chat-and-review'  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Blog Management',   
    icon: <EmailOutlinedIcon className="mr-3" />,
    to: '/blogs'  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Banner Module',   
    icon: <BrokenImageOutlinedIcon className="mr-3" />,
    to: '/banner-module'  
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Payment Services',   
    icon: <PaymentOutlinedIcon className="mr-3" />,
    to: '/payment-services'  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Pending Approvals',   
    icon: <ThumbUpAltOutlinedIcon className="mr-3"/>,
    to: '/pending-approvals'  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Company and Contact',   
    icon: <LocationCityOutlinedIcon  className="mr-3"/>,
    to: '/company-and-contact'   
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Rank Calculation',   
    icon: <StarBorderOutlinedIcon className="mr-3"/>,
    to: '/rank-calculation'  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Subscription',   
    icon: <SubscriptionsOutlinedIcon className="mr-3"/>,
    to: '/Subscription'  
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Page Management',
    route: '/Page-Management',
    icon:  <MenuBookIcon className="mr-3"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'About Us',
        to: '/Page-Management/manage-aboutus',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Service',
        to: '/Page-Management/manage-service',
      },     
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'FAQ',   
    icon: <LiveHelpOutlinedIcon className="mr-3"/>,
    to: '/faq'  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'User Management',   
    icon: <LiveHelpOutlinedIcon className="mr-3"/>,
    to: '/user-management'  
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Create Notification',   
    icon: <NotificationsActiveOutlinedIcon className="mr-3" />,
    to: '/create-notification'  
  },

  
]

export default _nav
