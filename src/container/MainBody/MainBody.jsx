import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MainBody.module.css";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config";

export default function MainBody() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.location, // using same "city" field in backend
          isOptometrist: "", // optional
          propertyType: "", // optional
        }),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
        });
        toast.success("Request submitted!");
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
    <div>
      {/* Part 1  */}
      <div className={styles.part1Container}>
        <div className={styles.imgContainer}>
          <div>
            <img
              src="https://kjar.in/images/bgImg4.png"
              alt="bg4"
              className="w-full"
            />
          </div>
          <div className={styles.sFTxt}>
            <div className={styles.shopTxt}>SHOP BY FRAME SHAPES</div>
            <div className={styles.shopTabs}>
              {/* Left Side  */}
              <div className={styles.shopLists}>
                <div className={styles.cursorPoint}>AVIATOR</div>
                <div className={styles.cursorPoint}>WAYFARER</div>
                <div className={styles.cursorPoint}>ROUND</div>
                <div className={styles.cursorPoint}>CAT-EYE</div>
                <div className={styles.cursorPoint}>SQUARE</div>
                <div className={styles.cursorPoint}>GEOMETRIC</div>
              </div>
              {/* Right Side */}
              <div className={styles.shopLists}>
                <div className={styles.cursorPoint}>HALF-RIM</div>
                <div className={styles.cursorPoint}>CLUBMASTER</div>
                <div className={styles.cursorPoint}>WRAPAROUND</div>
                <div className={styles.cursorPoint}>OVAL</div>
                <div className={styles.cursorPoint}>RECTANGULAR</div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className={styles.socialIcons}>
              <div>
                <img
                  src="https://kjar.in/images/facebook.png"
                  alt="facebook"
                  className={styles.cursorPoint}
                />
              </div>
              <div>
                <img
                  src="https://kjar.in/images/instagram.png"
                  alt="instagram"
                  className={styles.cursorPoint}
                />
              </div>
              <div>
                <img
                  src="https://kjar.in/images/linkedin.png"
                  alt="linkedin"
                  className={styles.cursorPoint}
                />
              </div>
              <div>
                <img
                  src="https://kjar.in/images/youtube.png"
                  alt="youtube"
                  className={styles.cursorPoint}
                />
              </div>
              <div>
                <img
                  src="https://kjar.in/images/twitter.png"
                  alt="twitter"
                  className={styles.cursorPoint}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div>
            <img
              src="https://kjar.in/images/bgImg5.png"
              alt="bg5"
              className="w-full"
            />
          </div>
          {loading && <Loader />}
          <form onSubmit={handleSubmit} className={styles.offTxt}>
            <div>OFFER THE BEST IN EYEWEAR</div>
            <div>PARNTER WITH KJAR</div>
            <div className={styles.offTabs}>
              <div className={styles.bottomLine}></div>
              <input
                type="text"
                placeholder="NAME"
                className={styles.inputFields}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className={styles.bottomLine}></div>

              <input
                type="email"
                placeholder="EMAIL"
                className={styles.inputFields}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className={styles.bottomLine}></div>

              <input
                type="tel"
                placeholder="PHONE"
                className={styles.inputFields}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div className={styles.bottomLine}></div>

              <input
                type="text"
                placeholder="LOCATION"
                className={styles.inputFields}
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <div className={styles.bottomLine}></div>
            </div>
            <div>
              <button
                className={styles.readyBtn}
                type="submit"
                disabled={loading}
              >
                I AM READY
              </button>
            </div>
          </form>
        </div>

        <div className={styles.removeOnSmallScreen}>
          <img
            src="https://kjar.in/images/bgImg6.png"
            alt="bg6"
            className="w-full"
          />
        </div>
      </div>

      {/* Part 2 */}
      <div className={styles.imgContainer}>
        <div>
          <img
            src="https://kjar.in/images/bgImg7.png"
            alt="bg7"
            className="w-full"
          />
        </div>
        <div className={styles.bigImgTxt}>
          {/* Left Side */}
          <div className={styles.bigLSide}>
            <div className={styles.circleA}>
              <div className={styles.circleB}></div>
            </div>

            <div>KJAR</div>
            <div>ULTI-MATTE COLLECTIONS</div>
            <Link to="/products" className="no-underline text-white">
              <div className={styles.sNowBtn}>SHOP NOW</div>
            </Link>
          </div>
          {/* Right Side */}
          <div className={styles.bigRSide}>
            <div>ULTI-MATTE</div>
            <div>MINIMAL MATTE</div>
            <div>WORK ESSENTIALS</div>
            <Link to="/products" className="no-underline text-white">
              <div className={styles.exploreCollBtn}>EXPLORE COLLECTION</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Part 3 */}
      <div className={styles.part3Container}>
        <div className={styles.redColor}></div>
        <div className={styles.part3Container}>
          {/* Text Box */}
          <div>
            <div className={styles.txtBox}>
              <div className={styles.introTxt}>
                INTRODUCING CORPORATE COLLECTIONS
              </div>
              <div className={styles.styleMeetTxt}>
                WHERE STYLE MEETS SOPHISTICATION
              </div>
              <div className={styles.elevateTxt}>
                Elevate your professional look with KJAR&apos;s refined
                Corporate Collection – where style meets sophistication
              </div>
            </div>

            <div className={styles.frameCont}>
              <div className={styles.frameBackL}>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="frame4"
                  className="w-full"
                />
              </div>
              <div className={styles.frameBackR}>
                <img
                  src="https://kjar.in/images/frame.png"
                  alt="frame5"
                  className="w-full"
                />
              </div>
            </div>

            {/* Our Purpose  */}
            <div className={styles.txtBox}>
              <div className={styles.redColorTxt}>OUR PURPOSE</div>
              <div className={styles.kjSeries}>DO MORE, BE MORE.</div>
              <Link to="/products" className="no-underline text-white">
                <div className={styles.disBtn}>DISCOVER</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.greenColor}></div>
      </div>

      {/* Character Pose  */}
      <div className="flex items-center gap-4 mt-5 mb-7 mx-0">
        {/* Left Side  */}
        <div className="bg-[#0a492e] flex items-center gap-4">
          <div className="hidden sm:flex">
            <img
              src="https://kjar.in/images/characterImg.png"
              alt="CharacterPose"
              className="w-full"
            />
          </div>
          <div className="text-white flex flex-col items-center text-center p-2 text-xs lg:text-end lg:items-end lg:gap-2 lg:p-3 lg:text-base">
            <div>SPOTLIGHT-WORTHY FRAMES</div>
            <div>HAPPENING STYLES THAT KEEP YOU IN THE SPOTLIGHT</div>
            <div>Fashionable eyewear for every mood, every day.</div>
            <Link to="/products" className="no-underline text-white">
              <div className="bg-[#a20202] text-white py-2 px-4 border-0 rounded-sm cursor-pointer mt-2 font-medium w-fit">
                DISCOVER
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side  */}
        <div className="text-xs lg:text-base">
          <div className="text-[#555555] mt-1 font-medium">
            TASTEFUL CURATIONS THAT SUPPORT YOUR STYLE EVOLUTION{" "}
          </div>
          <div className="text-[#555555]">
            Find Your Frame, Find Your Style.
          </div>
          <Link to="/products" className="no-underline text-white">
            <div className="bg-[#a20202] text-white py-2 px-4 border-0 rounded-sm cursor-pointer mt-2 font-medium w-fit">
              DISCOVER
            </div>
          </Link>
        </div>
      </div>

      {/* Part 4  */}
      <div className={styles.part4Container}>
        {/* Image Box - Positioned Below */}
        <div className={styles.p4InnerImgBox}>
          <div>
            <img
              src="https://kjar.in/images/bgImg8.png"
              alt="bg8"
              className="w-full"
            />
          </div>
          <div>
            <img
              src="https://kjar.in/images/bgImg9.png"
              alt="bg9"
              className="w-full"
            />
          </div>
        </div>

        {/* Text Box - Positioned on Top */}
        <div className={styles.txtBoxCont}>
          <div className={styles.handCftTxt}>HAND-CRAFTED FRAMES</div>
          <div className={styles.eyeSeries}>EYESERIES</div>
          <div>Experience KJAR&apos;s Art of Eyewear.</div>
          <Link to="/products" className="no-underline text-white">
            <div className="bg-[#a20202] text-white py-2 px-4 border-0 rounded-sm cursor-pointer mt-2 font-medium w-fit">
              DISCOVER
            </div>
          </Link>
        </div>
      </div>

      {/* Part 5 - Old School Rectangular Frames */}
      <div className={styles.p5Container}>
        <div className={styles.oldTxt}>OLD-SCHOOL RECTANGULAR FRAMES</div>
        <div className={styles.oldFrames}>
          <div>
            <img
              src="https://kjar.in/images/oldRectFrame.png"
              alt="Old_Frames"
              className="w-full"
            />
          </div>
          <div>
            <img
              src="https://kjar.in/images/oldRectFrame.png"
              alt="Old_Frames"
              className="w-full"
            />
          </div>
          <div>
            <img
              src="https://kjar.in/images/oldRectFrame.png"
              alt="Old_Frames"
              className="w-full"
            />
          </div>
          <div>
            <img
              src="https://kjar.in/images/oldRectFrame.png"
              alt="Old_Frames"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Part 6 - Buy it your way */}
      <div className={styles.p6Container}>
        {/* Left Side */}
        <div className={styles.p6LeftSide}>
          <img
            src="https://kjar.in/images/manPose.png"
            alt="ManPose"
            className="w-full"
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
                <div className="text-[#555555] mt-1 font-medium">
                  CALL OUR EXPERTS TO PLACE AN ORDER
                </div>
                <a href="tel:9999479598" className="no-underline text-white">
                  <div className={styles.rbContBtn}>CALL NOW</div>
                </a>
              </div>

              {/* Box 2 */}
              <div className={styles.rbContainer}>
                <div className={styles.rbContHead}>WHATSAPP</div>
                <div className={styles.hLine}></div>
                <div className="text-[#555555] mt-1 font-medium">
                  BUY ON WHATSAPP DROP US A MESSAGE
                </div>
                <a
                  href="https://wa.me/919999479598?text=Hi%20I%20want%20to%20buy%20a%20product!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-white"
                >
                  <button className={styles.rbContBtn}>WHATSAPP NOW</button>
                </a>
              </div>

              {/* Box 3 */}
              <div className={styles.rbContainer}>
                <div className={styles.rbContHead}>ONLINE</div>
                <div className={styles.hLine}></div>
                <div className="text-[#555555] mt-1 font-medium">
                  ORDER ONLINE USING OUR WEBSITE
                </div>
                <Link to="/products" className="no-underline text-white">
                  <button className={styles.rbContBtn}>CHECK OUT NOW</button>
                </Link>
              </div>

              {/* Box 4 */}
              <div className={styles.rbContainer}>
                <div className={styles.rbContHead}>STORE</div>
                <div className={styles.hLine}></div>
                <div className="text-[#555555] mt-1 font-medium">
                  LOCATE STORES NEAR YOU
                </div>
                <button className={styles.rbContBtn}>GET LOCATION</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 7 - Do More Be More */}
      <div className={styles.p7Container}>
        <div className={styles.p7Box}>
          <div className={styles.redColorTxt}>ENGINEERING</div>
          <div className={styles.kjSeries}>KJAR EYESERIES</div>
          <div className="text-[#555555]">
            Introducing KJAR EyeSeries – precision-engineered eyewear for
            unmatched clarity, comfort, and style.
          </div>
        </div>

        <div className={styles.p7BoxContainer}>
          {/* Box 1 */}
          <div>
            <div className={styles.p7Box1}>
              <img
                src="https://kjar.in/images/frame.png"
                alt="frame1"
                className="w-full"
              />
            </div>
            <div className={styles.p7BoxDesc}>
              <div className={styles.redColorTxt}>OUR PURPOSE</div>
              <div className={styles.doMoreTxt}>DO MORE, BE MORE.</div>
              <div className="text-[#555555]">
                Find Your Frame, Find Your Style.
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div>
            <div className={styles.p7Box1}>
              <img
                src="https://kjar.in/images/frame.png"
                alt="frame2"
                className="w-full"
              />
            </div>
            <div className={styles.p7BoxDesc}>
              <div className={styles.redColorTxt}>OUR PURPOSE</div>
              <div className={styles.doMoreTxt}>DO MORE, BE MORE.</div>
              <div className="text-[#555555]">
                Find Your Frame, Find Your Style.
              </div>
            </div>
          </div>

          {/* Box 3  */}
          <div>
            <div className={styles.p7Box1}>
              <img
                src="https://kjar.in/images/frame.png"
                alt="frame3"
                className="w-full"
              />
            </div>
            <div className={styles.p7BoxDesc}>
              <div className={styles.redColorTxt}>OUR PURPOSE</div>
              <div className={styles.doMoreTxt}>DO MORE, BE MORE.</div>
              <div className="text-[#555555]">
                Find Your Frame, Find Your Style.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
