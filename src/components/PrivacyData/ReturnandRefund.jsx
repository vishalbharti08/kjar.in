import React, {useEffect} from "react";
import "./TermsandConditions.css";

export default function ReturnandRefund() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="termsCon">
      <div className="termsHead">Returns and Refunds Policy</div>

      <div className="headText">Returns</div>
      <div>
        <div className="subHeadText">1. Eligibility:</div>
        <div className="lineText">
          You may return most new, unopened items within 10 days of delivery for
          a full refund. Items must be in their original condition and
          packaging.
        </div>
        <div className="subHeadText">2. Process:</div>
        <div className="lineText">
          To initiate a return, contact our customer service at{" "}
          <a href="mailto:info@induseye.in">info@induseye.in</a> with your order
          details. We will provide instructions on how to return your items.
        </div>
      </div>
      <div className="headText">Refunds</div>
      <div>
        <div className="subHeadText">1. Process:</div>
        <div className="lineText">
          Once we receive your return, we will inspect the item and notify you
          of the status of your refund. If approved, we will process the refund
          to your original method of payment.
        </div>
        <div className="subHeadText">2. Timeframe:</div>
        <div className="lineText">
          Refunds typically take 7-10 business days to process.
        </div>
      </div>

      <div className="horiLine"></div>
      <div className="lastLine">
        By using our services and making a purchase, you agree to the terms
        outlined in our Privacy Policy, Terms and Conditions, and Returns and
        Refunds Policy.
      </div>
    </div>
  );
}
