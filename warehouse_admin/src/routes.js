import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const CBForm = React.lazy(() => import('./views/product/AddProducts'));
const AddField = React.lazy(() => import('./views/product/AddField'));
const EditField = React.lazy(() => import('./views/product/EditField'));
const CBManagementList = React.lazy(() => import('./views/CBManagement/CBManagementList'));
const CBList = React.lazy(() => import('./views/CBManagement/CBList'));
const Edit_form = React.lazy(() => import('./views/CBManagement/Edit_form'));
const CompanyAndContact = React.lazy(() => import('./views/CompanyAndContact/CBUserList'));
const EditCompanyDetails = React.lazy(() => import('./views/CompanyAndContact/EditCompanyDetails'));
const EditPersonalDetails = React.lazy(() => import('./views/CompanyAndContact/EditPersonalDetails'));
const ChatAndReview = React.lazy(() => import('./views/ChatAndReview/ChatAndReview'));
const AddBlog = React.lazy(() => import('./views/PostBlog/AddBlog'));
const EditBlog = React.lazy(() => import('./views/PostBlog/EditBlog'));
const BlogList = React.lazy(() => import('./views/PostBlog/BlogList'));
const BlogInfo = React.lazy(() => import('./views/PostBlog/BlogInfo'));
const BlogAndReview = React.lazy(() => import('./views/PostBlog/BlogAndReview'));
const Reviews = React.lazy(() => import('./views/ChatAndReview/Reviews'));
const AllBannerslist = React.lazy(() => import('./views/Bannermodule/AllBannerslist'));
const PostBanner = React.lazy(() => import('./views/Bannermodule/Postbanner'));
const AddBanner = React.lazy(() => import('./views/Bannermodule/AddBanner'));
const CreateNotification = React.lazy(() => import('./views/Notification/CreateNotification'));
const PaymetServices = React.lazy(() => import('./views/PaymentServices/PaymentServices'));
const AddPaymetServices = React.lazy(() => import('./views/PaymentServices/AddPaymentServices'));
const PendingApprovals = React.lazy(() => import('./views/PendingApprovals/PendingApprovals'));
const RankCalculation = React.lazy(() => import('./views/RankCalculation/RankCalculation'));
const Rank = React.lazy(() => import('./views/RankCalculation/Rank'));
const Rating = React.lazy(() => import('./views/RankCalculation/Rating'));
const FAQ = React.lazy(() => import('./views/FAQ/FAQ'));
const AddFAQ = React.lazy(() => import('./views/FAQ/AddFAQ'));
const EditFAQ = React.lazy(() => import('./views/FAQ/EditFAQ'));
const Subscription = React.lazy(() => import('./views/Subscription/Subscription'));
const AddSubscription = React.lazy(() => import('./views/Subscription/AddSubscription'));
const EditPlan = React.lazy(() => import('./views/Subscription/EditPlan'));
const AboutUsContentList = React.lazy(() => import('./views/PageManagement/AboutUsContentList'));
const AddAboutUsContent = React.lazy(() => import('./views/PageManagement/AddAboutUsContent'));
const EditAboutUsContent = React.lazy(() => import('./views/PageManagement/EditAboutContent'));
const ServiceContentList = React.lazy(() => import('./views/PageManagement/ServiceContentList'));
const AddServiceContent = React.lazy(() => import('./views/PageManagement/AddServiceContent'));
const EditServiceContent = React.lazy(() => import('./views/PageManagement/EditServiceContent'));
const AccessUserList = React.lazy(() => import('./views/UserManagement/UserList'));




const PurchaseOrder = React.lazy(() => import('./views/purchase/PurchaseOrder'));
const AddPurchaseOrder = React.lazy(() => import('./views/purchase/AddPurchaseOrder'));
const PurchaseCancellation = React.lazy(() => import('./views/purchase/PurchaseCancellation'));
const AddCancellation = React.lazy(() => import('./views/purchase/AddCancellation'));
const PurchaseInvoiceEntry = React.lazy(() => import('./views/purchase/PurchaseInvoiceEntry'));
const PurchaseInvoice = React.lazy(() => import('./views/purchase/PurchaseInvoice'));
const PurchaseOrderLastStep = React.lazy(() => import('./views/purchase/PurchaseOrderLastStep'));
const PurchaseReturn = React.lazy(() => import('./views/purchase/PurchaseReturn'));
const AddPurchaseReturn = React.lazy(() => import('./views/purchase/AddPurchaseReturn'));

const StockList = React.lazy(() => import('./views/stock/StockList'));
const StoreList = React.lazy(() => import('./views/stock/StoreList'));
const AddStore = React.lazy(() => import('./views/stock/AddStore'));
const RateList = React.lazy(() => import('./views/stock/RateList'));
const AddRate = React.lazy(() => import('./views/stock/AddRate'));
const BinsItemList = React.lazy(() => import('./views/stock/BinsItemList'));

const SalesOrder = React.lazy(() => import('./views/sales/SalesOrder'));
const AddSalesOrder = React.lazy(() => import('./views/sales/AddSalesOrder'));
const SalesReturnsList = React.lazy(() => import('./views/sales/SalesReturnsList'));
const SalesAddReturns = React.lazy(() => import('./views/sales/SalesAddReturns'));
const SalesInvoiceEntry = React.lazy(() => import('./views/sales/SalesInvoiceEntry'));
const SalesInvoice = React.lazy(() => import('./views/sales/SalesInvoice'));
const SalesCancellation = React.lazy(() => import('./views/sales/SalesCancellation'));
const AddSalesCancellation = React.lazy(() => import('./views/sales/AddSalesCancellation'));


const AdvancePayment = React.lazy(() => import('./views/payments/AdvancePayment'));
const AddPayment = React.lazy(() => import('./views/payments/AddPayment'));
const PaymentForPurchase = React.lazy(() => import('./views/payments/PaymentForPurchase'));

const AdvanceReceiptsList = React.lazy(() => import('./views/receipts/AdvanceReceiptsList'));
const AdvanceReceipt = React.lazy(() => import('./views/receipts/AdvanceReceipt'));
const SalesInvoiceReceiptList = React.lazy(() => import('./views/receipts/SalesInvoiceReceiptList'));
const SalesInvoiceReceipt = React.lazy(() => import('./views/receipts/SalesInvoiceReceipt'));

const PurchasedReport = React.lazy(() => import('./views/report/PurchasedReport'));
const PurchasedReportPrint = React.lazy(() => import('./views/report/PurchasedReportPrint'));
const PurchasedPaymentReport = React.lazy(() => import('./views/report/PurchasedPaymentReport'));
const PurchasedTaxReport = React.lazy(() => import('./views/report/PurchasedTaxReport'));
const SaleReport = React.lazy(() => import('./views/report/SaleReport'));
const SalePaymentReport = React.lazy(() => import('./views/report/SalePaymentReport'));
const SaleTaxReport = React.lazy(() => import('./views/report/SaleTaxReport'));
const StockReport = React.lazy(() => import('./views/report/StocksReport'));

const TaxRate = React.lazy(() => import('./views/system/TaxRate'));
const AddNewTaxRate = React.lazy(() => import('./views/system/AddNewTaxRate'));
const UOM = React.lazy(() => import('./views/system/UOM'));
const AddUOM = React.lazy(() => import('./views/system/AddUOM'));
const Brand = React.lazy(() => import('./views/system/Brand'));
const AddBrand = React.lazy(() => import('./views/system/AddBrand'));
const Bins = React.lazy(() => import('./views/system/Bins'));
const AddBins = React.lazy(() => import('./views/system/AddBins'));

const CustomerList = React.lazy(() => import('./views/people/CustomerList'));
const AddCustomer = React.lazy(() => import('./views/people/AddCustomer'));
const SupplierList = React.lazy(() => import('./views/people/SupplierList'));
const AddSupplier = React.lazy(() => import('./views/people/AddSupplier'));
const UserList = React.lazy(() => import('./views/people/UserList'));
const AddUser = React.lazy(() => import('./views/people/AddUser'));
const TransporterList = React.lazy(() => import('./views/people/TransporterList'));
const AddTransporter = React.lazy(() => import('./views/people/AddTransporter'));
const UsergroupList = React.lazy(() => import('./views/people/UsergroupList'));
const AddUsergroup = React.lazy(() => import('./views/people/AddUsergroup'));
const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/cb-management', name: 'Cb Management', component: CBManagementList, exact: true },
  { path: '/add-field', name: 'Add Field', component: AddField},
  { path: '/edit-field', name: 'Edit Field', component: EditField},
  { path: '/cb-management/cb-list', name: 'CB List', component: CBList },
  { path: '/cb-management/edit-form', name: 'Edit Form', component: Edit_form },
  { path: '/company-and-contact', name: 'Company And Contact', component: CompanyAndContact, exact: true }, 
  { path: '/company-and-contact/edit-company-details', name: 'Edit Company Details', component: EditCompanyDetails},
  { path: '/company-and-contact/edit-personal-details', name: 'Edit Personal Details', component: EditPersonalDetails}, 
  { path: '/cb-form', name: 'CB Form', component: CBForm, exact: true },  
  { path: '/chat-and-review', name: 'Chat And Review', component: ChatAndReview, exact: true }, 
  { path: '/blogs', name: 'Blogs', component: BlogList, exact: true },
  { path: '/blogs-and-review', name: 'Blog And Review', component: BlogAndReview, exact: true },
  { path: '/blogs/add-blogs', name: 'Add Blogs', component: AddBlog },
  { path: '/blogs/edit-blogs', name: 'Edit Blogs', component: EditBlog },
  { path: '/blogs/blog-info', name: 'Blog Info', component: BlogInfo },
  { path: '/reviews', name: 'Review', component: Reviews }, 
  { path: '/banner-module', name: 'Banner Module', component: AllBannerslist,exact: true}, 
  { path: '/post-banner', name: 'Post Banner', component: PostBanner}, 
  { path: '/add-banner', name: 'Add Banner', component: AddBanner},
  { path: '/create-notification', name: 'Crate Notification', component: CreateNotification,exact: true}, 
  { path: '/payment-services', name: 'Payment Services', component: PaymetServices,exact: true},
  { path: '/payment-services/Add-payment-services', name: 'Add Payment Services', component: AddPaymetServices},
  { path: '/pending-approvals', name: 'Pending Approvals', component: PendingApprovals},
  { path: '/rank-calculation', name: 'Rank Calculation', component: RankCalculation},
  { path: '/rank', name: 'Rank', component: Rank},
  { path: '/rating', name: 'Rating', component: Rating},
  { path: '/faq', name: 'FAQ', component: FAQ,exact: true},
  { path: '/faq/add-faq', name: 'Add FAQ', component: AddFAQ,exact: true},
  { path: '/faq/edit-faq', name: 'Edit FAQ', component: EditFAQ,exact: true},
  { path: '/Page-Management', name: 'Page Management', component: AboutUsContentList, exact: true},
  { path: '/Page-Management/manage-aboutus', name: 'Manage About Us', component: AboutUsContentList},
  { path: '/Page-Management/add-aboutus-content', name: 'Add About Us Content', component: AddAboutUsContent},
  { path: '/Page-Management/edit-aboutus-content', name: 'Edit About Us Content', component: EditAboutUsContent},
  { path: '/Page-Management/manage-service', name: 'Manage Service', component: ServiceContentList},
  { path: '/Page-Management/add-service-content', name: 'Add Service Content', component: AddServiceContent},
  { path: '/Page-Management/edit-service-content', name: 'Edit Service Content', component: EditServiceContent},
  { path: '/Subscription', name: 'Subscription', component: Subscription,exact: true},
  { path: '/Subscription/add-Subscription', name: 'Add Subscription', component: AddSubscription},
  { path: '/Subscription/edit-Subscription', name: 'Edit Subscription', component: EditPlan},
  { path: '/user-management', name: 'User Management', component: AccessUserList},
  
  
 
  { path: '/purchase', name: 'Purchase', component: PurchaseOrder, exact: true },
  { path: '/purchase/purchase-order', name: 'Purchase Order', component: PurchaseOrder },
  { path: '/purchase/add-purchase-order', name: 'Add Purchase Order', component: AddPurchaseOrder },
  { path: '/purchase/purchase-cancellation', name: 'Purchase Cancellation', component: PurchaseCancellation },
  { path: '/purchase/add-cancellation', name: 'Add Cancellation', component: AddCancellation },
  { path: '/purchase/invoice-entry', name: 'Purchase Invoice Entry', component: PurchaseInvoiceEntry },
  { path: '/purchase/purchase-invoice', name: 'Purchase Invoice', component: PurchaseInvoice },
  { path: '/purchase/purchase-invoice-last-step', name: 'Purchase Invoice Last Step', component: PurchaseOrderLastStep },
  { path: '/purchase/purchase-return', name: 'Purchase Return', component: PurchaseReturn },
  { path: '/purchase/add-purchase-return', name: 'Add Purchase Return', component: AddPurchaseReturn },
  { path: '/stock', name: 'Stock', component: StockList, exact: true },
  { path: '/stock/stock-list', name: 'Stock List', component: StockList },
  { path: '/stock/store-list', name: 'Store List', component: StoreList },
  { path: '/stock/add-store', name: 'Add Store', component: AddStore },
  { path: '/stock/rate-list', name: 'Rate List', component: RateList },
  { path: '/stock/add-rate', name: 'Add Rate', component: AddRate },
  { path: '/stock/bins-item-list', name: 'Bins Item List', component: BinsItemList },
  { path: '/sales', name: 'Sales', component: SalesOrder, exact: true },
  { path: '/sales/sales-order', name: 'Sales Order', component: SalesOrder },
  { path: '/sales/add-sales-order', name: 'Add Sales Order', component: AddSalesOrder },
  { path: '/sales/sales-returns-list', name: 'Sales Returns List', component: SalesReturnsList },
  { path: '/sales/add-returns', name: 'Add Returns', component: SalesAddReturns },
  { path: '/sales/invoice-entry', name: 'Sales Invoice Entry', component: SalesInvoiceEntry },
  { path: '/sales/sales-invoice', name: 'Sales Invoice', component: SalesInvoice },
  { path: '/sales/sale-cancellation', name: 'Sales Cancellation', component: SalesCancellation },
  { path: '/sales/add-sale-cancellation', name: 'Add Sales Cancellation', component: AddSalesCancellation },
  { path: '/payments', name: 'Payments', component: AdvancePayment, exact: true },
  { path: '/payments/advance-payments', name: 'Advance Payment', component: AdvancePayment },
  { path: '/payments/add-payment', name: 'Add Payment', component: AddPayment },
  { path: '/payments/payment-for-purchase', name: 'Payment For Purchase', component: PaymentForPurchase },
  { path: '/receipts', name: 'Receipts', component: AdvanceReceiptsList, exact: true },   
  { path: '/receipts/advance-receipts-list', name: 'Advance Receipts List', component: AdvanceReceiptsList },
  { path: '/receipts/advance-receipt', name: 'Advance Receipt', component: AdvanceReceipt },
  { path: '/receipts/sale-invoice-receipt-list', name: 'Sale Invoice Receipt List', component: SalesInvoiceReceiptList },
  { path: '/receipts/sale-invoice-receipt', name: 'Sale Invoice Receipt', component: SalesInvoiceReceipt },
  { path: '/report', name: 'Reports', component: PurchasedReportPrint, exact: true },
  { path: '/report/report-of-purchasedprint', name: 'Purchased Report', component: PurchasedReportPrint },
  { path: '/report/report-of-purchased-payment', name: 'Purchased Payment Report', component: PurchasedPaymentReport },
  { path: '/report/report-of-purchased-tax', name: 'Purchased Tax Report', component: PurchasedTaxReport },
  { path: '/report/sale-report', name: 'Sales Report', component: SaleReport },
  { path: '/report/sale-payment-report', name: 'Sales Payment Report', component: SalePaymentReport },
  { path: '/report/sale-tax-report', name: 'Sales Tax Report', component: SaleTaxReport },
  { path: '/report/report-of-stock', name: 'Stocks Report', component: StockReport },
  { path: '/system', name: 'System', component: TaxRate, exact: true },
  { path: '/system/taxrate', name: 'Taxrate', component: TaxRate },
  { path: '/system/add-new-tax-rate', name: 'Add New Tax Rate', component: AddNewTaxRate },
  { path: '/system/UOM', name: 'UOM', component: UOM },
  { path: '/system/add-UOM', name: 'Add UOM', component: AddUOM },
  { path: '/system/brand', name: 'Brand', component: Brand },
  { path: '/system/add-brand', name: 'Add Brand', component: AddBrand },
  { path: '/system/bins', name: 'Bins', component: Bins },
  { path: '/system/add-bins', name: 'Add Bins', component: AddBins },
  { path: '/people', name: 'People', component: CustomerList, exact: true },
  { path: '/people/customer-list', name: 'Customers', component: CustomerList },
  { path: '/people/add-customer', name: 'Add Customer', component: AddCustomer },
  { path: '/people/supplier-list', name: 'Suppliers', component: SupplierList },
  { path: '/people/add-supplier', name: 'Add Supplier', component: AddSupplier },
  { path: '/people/user-list', name: 'Users', component: UserList },
  { path: '/people/add-user', name: 'Add User', component: AddUser },
  { path: '/people/transporter-list', name: 'Transporters', component: TransporterList },
  { path: '/people/add-transporter', name: 'Add Transporter', component: AddTransporter },
  { path: '/people/usergroup-list', name: 'Usergroup', component: UsergroupList },
  { path: '/people/add-usergroup', name: 'Add Usergroup', component: AddUsergroup },  
];
export default routes;
