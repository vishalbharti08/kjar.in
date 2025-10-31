import styles from "./TermsandConditions.module.css";
import { Helmet } from "react-helmet-async";

export default function TermsandConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions – KJAR Eyewear</title>
        <meta
          name="description"
          content="Understand the terms and conditions for using KJAR’s services and making purchases."
        />
      </Helmet>
      <div className={styles.termsCon}>
        <div className={styles.termsHead}>
          Terms and Conditions for Indus EyeCare Solutions LLP
        </div>
        <div className={styles.headText}>Introduction</div>
        <div className={styles.lineText}>
          Welcome to the Indus EyeCare Solutions LLP website. By accessing or
          using our website and services, you agree to comply with and be bound
          by the following Terms and Conditions. If you do not agree with any
          part of these terms, please do not use our website.
        </div>
        <div className={styles.headText}>Use of the Website</div>
        <div>
          <div className={styles.subHeadText}>1. Eligibility:</div>
          <div className={styles.lineText}>
            You must be at least 18 years old to use this website. By using the
            website, you represent and warrant that you meet this age
            requirement.
          </div>
          <div className={styles.subHeadText}>2. Account:</div>
          <div className={styles.lineText}>
            You may need to create an account to access certain features. You
            are responsible for maintaining the confidentiality of your account
            information and password and for restricting access to your
            computer. You agree to accept responsibility for all activities that
            occur under your account or password.
          </div>
        </div>
        <div className={styles.headText}>Products and Orders</div>
        <div>
          <div className={styles.subHeadText}>1. Product Descriptions:</div>
          <div className={styles.lineText}>
            We attempt to be as accurate as possible in describing our products.
            However, we do not warrant that product descriptions or other
            content is accurate, complete, reliable, current, or error-free.
          </div>
          <div className={styles.subHeadText}>2. Pricing:</div>
          <div className={styles.lineText}>
            All prices are listed in Indian Rupees (INR) and are subject to
            change without notice. Prices do not include applicable taxes or
            shipping and handling fees.
          </div>
          <div className={styles.subHeadText}>3. Order Acceptance:</div>
          <div className={styles.lineText}>
            We reserve the right to refuse or cancel any order for any reason at
            any time. If we cancel an order, we will notify you and provide a
            refund.
          </div>
        </div>
        <div className={styles.headText}>Payment and Shipping</div>
        <div>
          <div className={styles.subHeadText}>1. Payment Methods:</div>
          <div className={styles.lineText}>
            We accept online payments and Cash on Delivery (COD). By placing an
            order, you agree to provide current, complete, and accurate purchase
            and account information.
          </div>
          <div className={styles.subHeadText}>2. Shipping:</div>
          <div className={styles.lineText}>
            We offer a standard shipping time of about 10 days. Shipping times
            may vary based on your location and other factors. We are not
            responsible for delays caused by the shipping carrier or customs
            clearance.
          </div>
        </div>

        <div className={styles.headText}>Returns and Refunds</div>
        <div className={styles.lineText}>
          Please refer to our Returns and Refunds Policy for detailed
          information on how we handle returns and refunds.
        </div>
        <div className={styles.headText}>Limitation of Liability</div>
        <div className={styles.lineText}>
          Indus EyeCare Solutions LLP shall not be liable for any direct,
          indirect, incidental, special, or consequential damages resulting from
          the use or the inability to use our products or our website.
        </div>
        <div className={styles.headText}>Governing Law</div>
        <div className={styles.lineText}>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of India, and you irrevocably submit to the exclusive
          jurisdiction of the courts in Haryana.
        </div>
        <div className={styles.headText}>Changes to Terms and Conditions</div>
        <div className={styles.lineText}>
          We reserve the right to make changes to these Terms and Conditions at
          any time. Your continued use of the website following the posting of
          changes will mean that you accept and agree to the changes.
        </div>
        <div className={styles.horiLine}></div>
        <div className={styles.lastLine}>
          By using our services and making a purchase, you agree to the terms
          outlined in our Privacy Policy, Terms and Conditions, and Returns and
          Refunds Policy.
        </div>
      </div>
    </>
  );
}
