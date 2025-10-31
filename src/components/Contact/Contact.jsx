import styles from "./Contact.module.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us – KJAR Eyewear</title>
        <meta
          name="description"
          content="Have questions or need help? Reach out to the KJAR team for support, inquiries, or feedback."
        />
      </Helmet>
      <div>
        {/* QUERIES */}
        <div className={styles.headTxt}>QUERIES</div>
        <div className={styles.queryBox}>
          <div className={styles.queryLines}>
            <div className={styles.queryTxt}>
              I want to Cancel/Return my order{" "}
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className={styles.borderBottom}></div>
            <div className={styles.queryTxt}>
              Where is my order?{" "}
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className={styles.borderBottom}></div>
            <div className={styles.queryTxt}>
              I want to modify items in this order{" "}
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className={styles.borderBottom}></div>
            <div className={styles.queryTxt}>
              I have exchange and refund related queries{" "}
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
            <div className={styles.borderBottom}></div>
            <div className={styles.queryTxt}>
              I have other issues{" "}
              <div>
                <ChevronRightOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        {/* PARTNERSHIPS */}
        <div className={styles.headTxt}>PARTNERSHIPS</div>
        <div className={styles.partnerBox}>
          <div className={styles.partnerLeftBox}>
            At KJAR, we believe in the power of meaningful collaborations.
            Whether you&apos;re a retailer, distributor, fashion stylist,
            influencer, or a brand looking to co-create something unique,
            we&apos;d love to hear from you. Let&apos;s build visionary
            partnerships that redefine eyewear and style.
          </div>
          <div className={styles.partnerRightBox}>
            <div className={styles.forCollabTxt}>
              FOR PARTNERSHIPS OR COLLABS
            </div>
            <div>
              Reach out to us and let&apos;s create something bold, timeless,
              and impactful — together.
            </div>
            <a
              href="mailto:info@induseye.in?subject=FOR PARTNERSHIPS OR COLLABS"
              className={styles.writeUsTxt}
            >
              <div>WRITE TO US</div>
            </a>
          </div>
        </div>

        {/* Buy it your way */}
        <div className={styles.p6Container}>
          {/* Left Side */}
          <div className={styles.p6LeftSide}>
            <img
              src="https://kjar.in/images/manPose.png"
              alt="ManPose"
              className={styles.backImgs}
            />
          </div>

          {/* Right Side */}
          <div className={styles.p6RightSide}>
            <div className={styles.btWayTxt}>BUY IT YOUR WAY</div>
            <div className={styles.rightBoxesCont}>
              <div className={styles.rightBoxes}>
                {/* Box 1 */}
                <div className={styles.rbContainer}>
                  <div className={styles.rbContHead}>CALL</div>
                  <div className={styles.hLine}></div>
                  <div className={styles.rbContDesc}>
                    CALL OUR EXPERTS TO PLACE AN ORDER
                  </div>
                  <a href="tel:9999479598" className={styles.decorationNone}>
                    <div className={styles.rbContBtn}>CALL NOW</div>
                  </a>
                </div>

                {/* Box 2 */}
                <div className={styles.rbContainer}>
                  <div className={styles.rbContHead}>WHATSAPP</div>
                  <div className={styles.hLine}></div>
                  <div className={styles.rbContDesc}>
                    BUY ON WHATSAPP DROP US A MESSAGE
                  </div>
                  <a
                    href="https://wa.me/919999479598?text=Hi%20I%20want%20to%20buy%20a%20product!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.decorationNone}
                  >
                    <button className={styles.rbContBtn}>WHATSAPP NOW</button>
                  </a>
                </div>

                {/* Box 3 */}
                <div className={styles.rbContainer}>
                  <div className={styles.rbContHead}>ONLINE</div>
                  <div className={styles.hLine}></div>
                  <div className={styles.rbContDesc}>
                    ORDER ONLINE USING OUR WEBSITE
                  </div>
                  <button className={styles.rbContBtn}>CHECK OUT NOW</button>
                </div>

                {/* Box 4 */}
                <div className={styles.rbContainer}>
                  <div className={styles.rbContHead}>STORE</div>
                  <div className={styles.hLine}></div>
                  <div className={styles.rbContDesc}>
                    LOCATE STORES NEAR YOU
                  </div>
                  <button className={styles.rbContBtn}>GET LOCATION</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className={styles.headTxt}>CONTACT</div>
        <div className={styles.contactBox}>
          <div className={styles.contactContent}>
            <div className={styles.contactHead}>FRANCHISE INQUIRIES</div>
            <div className={styles.contactData}>
              Want to bring KJAR to your city? We&apos;re expanding and looking
              for passionate franchise partners who share our love for design
              and customer experience. Reach out to learn how you can be part of
              the KJAR journey.
            </div>
            <a
              href="mailto:info@induseye.in?subject=Franchise Inquiry"
              className={`${styles.contactBtns} ${styles.tollFreeNum}`}
            >
              <EmailOutlinedIcon />
              WRITE TO US
            </a>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.contactHead}>CUSTOMER SUPPORT</div>
            <div className={styles.contactData}>
              Need help with your order, product details, returns, or anything
              else? Our customer support team is here to assist you every step
              of the way. We&apos;re committed to ensuring your KJAR experience
              is smooth, stylish, and stress-free.
            </div>
            <div className={styles.contactBtns}>
              {" "}
              <WifiCalling3OutlinedIcon />
              <a href="tel:9999479598" className={styles.tollFreeNum}>
                9999479598
              </a>
            </div>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.contactHead}>BUSINESS INQUIRIES</div>
            <div className={styles.contactData}>
              For collaborations, bulk orders, or corporate gifting, we welcome
              innovative business opportunities that align with our brand.
              Let&apos;s connect and explore how we can create lasting value
              together through visionary eyewear.
            </div>
            <a
              href="mailto:info@induseye.in?subject=Business Inquiry"
              className={`${styles.contactBtns} ${styles.tollFreeNum}`}
            >
              <EmailOutlinedIcon />
              WRITE TO US
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
