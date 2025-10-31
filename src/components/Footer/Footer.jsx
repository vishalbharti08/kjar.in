import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      {/* Upper part of the footer  */}
      <div className="flex w-full h-4">
        <div className="bg-[#1e3e2e] w-[80%]"></div>
        <div className="bg-[#a20202] w-[20%]"></div>
      </div>

      {/* Social Icons */}
      <div className="bg-[#0a492e]">
        <div className="flex justify-end items-center gap-4 pt-3 pr-4 pb-3 pl-4">
          <img src="https://kjar.in/images/facebook.png" alt="Facebook" />
          <img src="https://kjar.in/images/instagram.png" alt="Instagram" />
          <img src="https://kjar.in/images/linkedin.png" alt="LinkedIn" />
          <img src="https://kjar.in/images/youtube.png" alt="Youtube" />
          <img src="https://kjar.in/images/twitter.png" alt="Twitter" />
        </div>
      </div>

      {/* Footer Data */}
      <div className={styles.footerData}>
        {/* Box 1 */}
        <div className={styles.fdBox1}>
          <div>
            <img src="https://kjar.in/images/kjarLogo.png" alt="Kjar_Logo" />
          </div>
          <div>
            KJAR Eyewear – redefining vision with premium, stylish frames
            crafted for those who value clarity, comfort, and timeless elegance.
          </div>
        </div>

        {/* Box 2 */}
        <div>
          <div className="mb-3 font-bold">QUICK LINKS</div>
          <div className={styles.fdBox2Items}>
            <div>
              <Link to="/" className="no-underline text-[#fff]">
                Home
              </Link>
            </div>
            <div>
              <Link to="/products" className="no-underline text-[#fff]">
                Products
              </Link>
            </div>
            <div>
              <Link to="/categories" className="no-underline text-[#fff]">
                Categories
              </Link>
            </div>
            {/* <div>
              <Link to="/career" className="no-underline text-[#fff]">
                Careers
              </Link>
            </div> */}
            <div>
              <Link to="/partner-with" className="no-underline text-[#fff]">
                Partner with us
              </Link>
            </div>
            {/* <div>About</div> */}
            {/* <div>
              <Link to="/store-locator" className="no-underline text-[#fff]">
                Store Locator
              </Link>
            </div> */}
            <div>
              <Link to="/contact" className="no-underline text-[#fff]">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div>
          <div className="mb-3 font-bold">POLICY</div>
          <div className={styles.fdBox2Items}>
            <div>
              <Link to="/policy" className="no-underline text-[#fff]">
                Privacy Policy
              </Link>
            </div>
            {/* <div>Shipping Policy</div> */}
            <div>
              <Link
                to="/termsandconditions"
                className="no-underline text-[#fff]"
              >
                Terms and Conditions
              </Link>
            </div>
            {/* <div>Disclaimer</div> */}
            {/* <div>Warranty</div> */}
            {/* <div>Support Team</div> */}
            {/* <div>Complaints</div> */}
            {/* <div>FAQs</div> */}
          </div>
        </div>

        {/* Box 4 */}
        <div>
          <div className="mb-3 font-bold">RESOURCES</div>
          <div className={styles.fdBox2Items}>
            {/* <div>Store Locator</div> */}
            <div>
              <Link to="/buying-guide" className="no-underline text-[#fff]">
                Frame Size Guide
              </Link>
            </div>
            {/* <div>Frame Size Guide</div> */}
          </div>

          <div className={styles.pdbTxt}>
            <div>CONTACT NUMBER</div>
            <a
              href="tel:9999479598"
              className="cursor-pointer no-underline text-[#fff] text-2xl"
            >
              9999479598
            </a>
          </div>

          <div className={styles.pdbTxt}>
            <div>SUBSCRIBE NEWSLETTER</div>
            <div>
              <input
                className={styles.subInput}
                type="email"
                placeholder="ENTER EMAIL"
              />
              <button className={styles.subBtn}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyrights Reserved  */}
      <div className="text-[#fff] bg-[#00301c] flex justify-center items-center">
        Copyright © 2024, All Rights Reserved
      </div>
    </div>
  );
}
