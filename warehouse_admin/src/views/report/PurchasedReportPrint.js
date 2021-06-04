import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PurchasedReport  from './PurchasedReport';

const PurchasedReportPrint = () =>{
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    return (
        <div>
          <PurchasedReport ref={componentRef} />                 
          <button type="button" onClick={handlePrint}>Print this out!</button>
        </div>
      );
};
export default PurchasedReportPrint;