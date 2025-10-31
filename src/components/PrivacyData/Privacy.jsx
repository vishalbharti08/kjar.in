import styles from "./TermsandConditions.module.css";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – KJAR Eyewear</title>
        <meta
          name="description"
          content="Read KJAR’s privacy policy to understand how we protect your data and personal information."
        />
      </Helmet>
      <div className={styles.termsCon}>
        <div className={styles.termsHead}>Privacy Policy</div>
        <div className={styles.headText}>Introduction</div>
        <div className={styles.lineText}>
          Indus EyeCare Solutions LLP, located in Haryana, India, operates under
          the brand names KJAR & KJAR Lite. We are committed to protecting your
          privacy and ensuring your personal information is handled in a safe
          and responsible manner. This Privacy Policy outlines how we collect,
          use, and protect your information when you use our website and
          services, both online and offline.
        </div>
        <div className={styles.headText}>Information We Collect</div>
        <div>
          <div className={styles.subHeadText}>1. Personal Information:</div>
          <div className={styles.lineText}>
            When you purchase a product or register on our website, we collect
            personal information such as your name, email address, phone number,
            billing and shipping address, and payment information.
          </div>
          <div className={styles.subHeadText}>2. Non-Personal Information:</div>
          <div className={styles.lineText}>
            We may also collect non-personal information such as your browser
            type, the URL of the previous website you visited, your ISP,
            operating system, and your Internet Protocol (IP) address.
          </div>
        </div>
        <div className={styles.headText}>How We Use Your Information</div>
        <div>
          <div className={styles.subHeadText}>1. To Process Transactions:</div>
          <div className={styles.lineText}>
            We use your personal information to process your orders, manage your
            account, and provide customer service.
          </div>
          <div className={styles.subHeadText}>2. To Improve Our Services:</div>
          <div className={styles.lineText}>
            Non-personal information helps us analyze trends and improve our
            website&apos;s functionality and user experience.
          </div>
          <div className={styles.subHeadText}>3. Marketing Communications:</div>
          <div className={styles.lineText}>
            With your consent, we may use your email address to send you
            promotional materials and updates about our products and services.
            You can opt-out at any time.
          </div>
        </div>
        <div className={styles.headText}>Sharing Your Information</div>
        <div className={styles.lineText}>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information except to trusted third parties
          who assist us in operating our website, conducting our business, or
          servicing you, so long as those parties agree to keep this information
          confidential. We may also release your information when we believe
          release is appropriate to comply with the law, enforce our site
          policies, or protect ours or others rights, property, or safety.
        </div>

        <div className={styles.headText}>Data Security</div>
        <div className={styles.lineText}>
          We implement a variety of security measures to maintain the safety of
          your personal information. These measures include encrypted databases,
          secure payment gateways, and regular security audits.
        </div>

        <div className={styles.headText}>Cookies</div>
        <div className={styles.lineText}>
          Our website uses cookies to enhance user experience. Cookies are small
          files that a site or its service provider transfers to your
          computer&apos;s hard drive through your web browser (if you allow)
          that enables the site&apos;s or service provider&apos;s systems to
          recognize your browser and capture and remember certain information.
        </div>

        <div className={styles.headText}>Third-Party Links</div>
        <div className={styles.lineText}>
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our website. These third-party sites have
          separate and independent privacy policies. We, therefore, have no
          responsibility or liability for the content and activities of these
          linked sites.
        </div>

        <div className={styles.headText}>Your Consent</div>
        <div className={styles.lineText}>
          By using our site, you consent to our website privacy policy.
        </div>

        <div className={styles.headText}>Changes to Our Privacy Policy</div>
        <div className={styles.lineText}>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our website.
        </div>

        <div className="horiLine"></div>
        <div className="lastLine">
          By using our services and making a purchase, you agree to the terms
          outlined in our Privacy Policy, Terms and Conditions, and Returns and
          Refunds Policy.
        </div>
      </div>
    </>
  );
}
