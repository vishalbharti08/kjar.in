import { useState } from "react";
import styles from "./PartnerWith.module.css";
import config from "../../config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet-async";

export default function PartnerWith() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    isOptometrist: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    propertyType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${config.BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          isOptometrist: "",
          name: "",
          phone: "",
          email: "",
          city: "",
          propertyType: "",
        });
        toast.success("Request submitted!"); // will be replaced with toast in step 2
      } else {
        toast.error("Failed to submit request.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Partner with KJAR – Business Opportunities in Eyewear</title>
        <meta
          name="description"
          content="Join the KJAR partner network. Collaborate with us to grow your optical business. Learn more about partnership benefits."
        />
      </Helmet>
      <div className={styles.partnerContainer}>
        {/* Left */}
        <div className={styles.leftDiv}>
          {/* Elevate Business Box */}
          <div>
            <div className={styles.ownTxt}>OWN A SUCCESSFUL BUSINESS</div>
            <div className={styles.greenHeadTxt}>
              Elevate Your Business with High-Quality, Trendy Eyewear
            </div>
            <div className={styles.descriptionTxt}>
              Are you an optical retailer, optometrist, e-commerce seller, or
              corporate buyer looking for premium eyewear at unbeatable
              wholesale prices? KJAR Eyewear offers you an exclusive opportunity
              to grow your business with stylish, high-margin optical frames.
            </div>
            <div className={styles.ownTxt}>
              Returns that we deliver for our partners{" "}
            </div>
            <div className={styles.circleContainer}>
              <div className={styles.circleBox}>
                <div className={styles.circle}>
                  <img
                    src="https://kjar.in/images/partnerArrow.png"
                    alt="Partner_Arrow"
                  />
                </div>
                <div className={styles.descriptionTxt}>25-30% Margin</div>
              </div>
              <div className={styles.circleBox}>
                <div className={styles.circle}>
                  <img
                    src="https://kjar.in/images/partnerGraph.png"
                    alt="Partner_Graph"
                  />
                </div>
                <div className={styles.descriptionTxt}>Quick Breakeven</div>
              </div>
            </div>
          </div>

          {/* Why work with KJAR */}
          <div>
            <div className={styles.greenHeadTxt}>Why Partner With KJAR?</div>
            <div className={styles.partnerBox}>
              {/* Box 1 */}
              <div className={styles.insideBoxes}>
                <div>
                  <img src="https://kjar.in/images/quality.png" alt="Quality" />
                </div>
                <div className={`${styles.greenHeadTxt} ${styles.insideBoxes}`}>
                  PREMIUM QUALITY
                </div>
                <div className={styles.descriptionTxt}>
                  European-inspired designs, lightweight, & durable frames.
                </div>
              </div>
              {/* Box 2 */}
              <div className={styles.insideBoxes}>
                <div>
                  <img
                    src="https://kjar.in/images/guarantee.png"
                    alt="Guarantee"
                  />
                </div>
                <div className={`${styles.greenHeadTxt} ${styles.insideBoxes}`}>
                  COMPETITIVE PRICING
                </div>
                <div className={styles.descriptionTxt}>
                  High profit margins with flexible bulk order options.
                </div>
              </div>
              {/* Box 3 */}
              <div className={styles.insideBoxes}>
                <div>
                  <img
                    src="https://kjar.in/images/teamWork.png"
                    alt="Team_Work"
                  />
                </div>
                <div className={`${styles.greenHeadTxt} ${styles.insideBoxes}`}>
                  MARKETING SUPPORT
                </div>
                <div className={styles.descriptionTxt}>
                  Free promotional materials to boost your sales.
                </div>
              </div>
              {/* Box 4 */}
              <div className={styles.insideBoxes}>
                <div>
                  <img
                    src="https://kjar.in/images/dropShipping.png"
                    alt="Drop_Shipping"
                  />
                </div>
                <div className={`${styles.greenHeadTxt} ${styles.insideBoxes}`}>
                  DROPSHIPPING & E-COMMERCE
                </div>
                <div className={styles.descriptionTxt}>
                  No inventory? No problem! We handle fulfillment for you.
                </div>
              </div>
              {/* Box 5 */}
              <div className={styles.insideBoxes}>
                <div>
                  <img
                    src="https://kjar.in/images/configuration.png"
                    alt="Configuration"
                  />
                </div>
                <div className={`${styles.greenHeadTxt} ${styles.insideBoxes}`}>
                  CUSTOM BRANDING AVAILABLE
                </div>
                <div className={styles.descriptionTxt}>
                  Personalize frames with your logo for a unique identity.
                </div>
              </div>
            </div>
          </div>

          {/* OUR PARTNERSHIP PROGRAMS */}
          <div className={styles.ownTxt}>OUR PARTNERSHIP PROGRAMS</div>
          {/* Box 1 */}
          <div className={styles.smallScreenWidth}>
            <div className={styles.greenHeadTxt}>
              Wholesale & Retail Partnership
            </div>
            <div className={styles.descriptionTxt}>
              Stock KJAR Eyewear in your store and offer your customers trendy,
              high-quality frames at attractive prices.
            </div>
            <div className={styles.bottomBoxes}>
              {/* Box 1 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/discount.png"
                    alt="Discount"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Bulk Discounts & easy reordering
                </div>
              </div>
              {/* Box 2 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/inStock.png"
                    alt="In_Stock"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Flexible MOQ (Minimum Order Quantity)
                </div>
              </div>
              {/* Box 3 */}
              <div className={styles.miniBox}>
                <div>
                  <img src="https://kjar.in/images/skills.png" alt="Skills" />
                </div>
                <div className={styles.descriptionTxt}>
                  Dedicated account manager for smooth operations
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className={styles.smallScreenWidth}>
            <div className={styles.greenHeadTxt}>
              Dropshipping & E-Commerce Collaboration
            </div>
            <div className={styles.descriptionTxt}>
              No inventory? No Problem! Sell our products online, and we’ll ship
              directly to your customers.
            </div>
            <div className={styles.bottomBoxes}>
              {/* Box 1 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/inventoryManagement.png"
                    alt="Inventory_Management"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Zero Inventory Risk - We handle storage and shipping
                </div>
              </div>
              {/* Box 2 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/deliveryMan.png"
                    alt="Delivery_Man"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Quick Delivery across India
                </div>
              </div>
              {/* Box 3 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/promotionalMaterial.png"
                    alt="Promotional_Material"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Marketing materials & digital support
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className={styles.smallScreenWidth}>
            <div className={styles.greenHeadTxt}>
              Corporate & Employee Gifting
            </div>
            <div className={styles.descriptionTxt}>
              Looking for the perfect gift for employees or clients? Our
              blue-light blocking & stylish eyewear make the ideal corporate
              gift.
            </div>
            <div className={styles.bottomBoxes}>
              {/* Box 1 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/configuration.png"
                    alt="Configuration"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Custom branding available
                </div>
              </div>
              {/* Box 2 */}
              <div className={styles.miniBox}>
                <div>
                  <img src="https://kjar.in/images/box.png" alt="Box" />
                </div>
                <div className={styles.descriptionTxt}>
                  Bulk order discounts
                </div>
              </div>
              {/* Box 3 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/productDesign.png"
                    alt="Product_Design"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Trendy & practical designs
                </div>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className={styles.smallScreenWidth}>
            <div className={styles.greenHeadTxt}>
              Optometrist & Eye Clinic Referral Program
            </div>
            <div className={styles.descriptionTxt}>
              Partner with us to recommend KJAR eyewear to your patients and
              earn exclusive benefits.
            </div>
            <div className={styles.bottomBoxes}>
              {/* Box 1 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/bestProduct.png"
                    alt="Best_Product"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Special partner pricing for clinics
                </div>
              </div>
              {/* Box 2 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/partnership.png"
                    alt="Partnership"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Co-branded marketing materials
                </div>
              </div>
              {/* Box 3 */}
              <div className={styles.miniBox}>
                <div>
                  <img
                    src="https://kjar.in/images/sharedVision.png"
                    alt="Shared_Vision"
                  />
                </div>
                <div className={styles.descriptionTxt}>
                  Affordable vision solutions for your customers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        {loading && <Loader />}
        <form className={styles.rightDiv} onSubmit={handleSubmit}>
          <div className={styles.greenHeadTxt}>
            Ready to start your growth journey?
          </div>
          <div>Are you an optometrist?</div>
          <div className={styles.radioBtns}>
            <label>
              <input
                type="radio"
                name="isOptometrist"
                value="Yes"
                checked={formData.isOptometrist === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isOptometrist"
                value="No"
                checked={formData.isOptometrist === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <input
            className={styles.inputFields}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.inputFields}
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className={styles.inputFields}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.inputFields}
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <div>What property type will you open the store at?</div>
          <div className={styles.radioBtns}>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="Owned"
                checked={formData.propertyType === "Owned"}
                onChange={handleChange}
              />
              Owned
            </label>
            <label>
              <input
                type="radio"
                name="propertyType"
                value="Rented/Leased"
                checked={formData.propertyType === "Rented/Leased"}
                onChange={handleChange}
              />
              Rented/Leased
            </label>
          </div>
          <button className={styles.submitBtn} type="submit">
            SUBMIT REQUEST
          </button>
        </form>
      </div>
    </>
  );
}
