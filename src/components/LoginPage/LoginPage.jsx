import { useState } from "react";
import axios from "axios";
import config from "../../config";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import Select from "react-select";

export default function LoginPage() {
  const [action, setAction] = useState("SIGN IN");
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ store: null });
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [couponModalContent, setCouponModalContent] = useState("");

  // Store Locator List
  const storeList = [
    { label: "Divya Jyoti Opticals", value: "divyaJyotiOpticals" },
    { label: "Anil Optical Company", value: "anilOpticalCompany" },
    { label: "Yash Optics", value: "yashOptics" },
    { label: "Shiva Opticals", value: "shivaOpticals" },
    { label: "Om Opticals", value: "omOpticals" },
    { label: "M/s. Bombay Opticians", value: "m/s.BombayOpticians" },
    { label: "M/S PERFECT OPTICS", value: "m/sPerfectOptics" },
    { label: "Nayna Opticals", value: "naynaOpticals" },
    { label: "Joshi Opticals", value: "joshiOpticals" },
    {
      label: "M/s. Bombay Opticals & Contact Lens Clinic",
      value: "m/s.BombayOpticals&ContactLensClinic",
    },
    { label: "M/s. Starlight Opticians", value: "m/s.StarlightOpticians" },
    { label: "M/s. Pant Optical", value: "m/s.PantOptical" },
    {
      label: "M/S EYE CARE & OPTICAL CENTRE",
      value: "m/sEyeCare&OpticalCentre",
    },
    {
      label: "M/s. Punethe Eye Care Centre",
      value: "m/s.PunetheEyeCareCentre",
    },
    {
      label: "M/s. Netra Optical & Eye Care",
      value: "m/s.NetraOptical&EyeCare",
    },
    { label: "M/s. Pratiksha Chasmalaya", value: "m/s.PratikshaChasmalaya" },
    { label: "BOMBAY OPTICIAN Almora", value: "bombayOpticianAlmora" },
    { label: "Sai Optical", value: "saiOptical" },
    { label: "SUNAYAN OPTICAL", value: "sunayanOptical" },
    { label: "Archna Optical", value: "archnaOptical" },
    { label: "Suresh Cottage Industries", value: "sureshCottageIndustries" },
    { label: "Vikas Opticals", value: "vikasOpticals" },
    { label: "SHIV CHASMAGHAR", value: "shivChasmaghar" },
    { label: "Balaji Optical Co", value: "balajiOpticalCo" },
    { label: "M/s. AT Eye Care", value: "m/s.AtEyeCare" },
    { label: "M/s. Sitapur Opticals", value: "m/s.SitapurOpticals" },
    { label: "Apolo Optical", value: "apoloOptical" },
    // { label: "Indus Eyecare Solutions LLP", value: "indusEyecareSolutionsLlp" },
    { label: "Prakash Chasme Wale", value: "prakashChasmeWale" },
    { label: "M/S TIK TALK VISION WORLD", value: "m/sTikTalkVisionWorld" },
    {
      label: "INTERNATIONAL EYE CARE CENTRE",
      value: "internationalEyeCareCentre",
    },
    { label: "M/S MADRAS OPTICAL", value: "m/sMadrasOptical" },
    {
      label: "Sharan Eye Clinic And Optical",
      value: "sharanEyeClinicAndOptical",
    },
    { label: "Progressive Eye Care", value: "progressiveEyeCare" },
    { label: "Shama Opticals", value: "shamaOpticals" },
    {
      label: "Shivam Opticals Sharp Sight Centre",
      value: "shivamOpticalsSharpSightCentre",
    },
    { label: "Jagdish Saran & Sons", value: "jagdishSaran&Sons" },
    { label: "Goel Opticals", value: "goelOpticals" },
    { label: "Optical Point", value: "opticalPoint" },
    { label: "City Eye Care", value: "cityEyeCare" },
    { label: "Shree Shakti Opticals", value: "shreeShaktiOpticals" },
    { label: "Jupiter Opticals And Pharma", value: "jupiterOpticalsAndPharma" },
    { label: "New Hiti Optical", value: "newHitiOptical" },
    { label: "Chhabra Opticals", value: "chhabraOpticals" },
    { label: "Guglani Optics", value: "guglaniOptics" },
    { label: "Sun Optical", value: "sunOptical" },
    { label: "Surya Opticals", value: "suryaOpticals" },
    { label: "Sai Eye Care Centre", value: "saiEyeCareCentre" },
    { label: "Vision Eye Plus", value: "visionEyePlus" },
    { label: "Eye Care Centre Rishikesh", value: "eyeCareCentreRishikesh" },
    { label: "Bajaj Opticals", value: "bajajOpticals" },
    { label: "Maya Opticals", value: "mayaOpticals" },
    { label: "Deepak Optical", value: "deepakOptical" },
    { label: "Shankar Opticls", value: "shankarOpticls" },
    { label: "Arun Opticians", value: "arunOpticians" },
    { label: "Jagdish Sharan & Sons", value: "jagdishSharan&Sons" },
    {
      label: "Bombay Optician Pithoragarh",
      value: "bombayOpticianPithoragarh",
    },
    { label: "Vinod Kumar Gupta", value: "vinodKumarGupta" },
    { label: "Monika Optical", value: "monikaOptical" },
    { label: "Seema Optical", value: "seemaOptical" },
    { label: "RR Opticals", value: "rrOpticals" },
    { label: "Kamal Optical", value: "kamalOptical" },
    { label: "Ashish Optical", value: "ashishOptical" },
    { label: "Aastha Optical", value: "aasthaOptical" },
    { label: "Optical Gallery", value: "opticalGallery" },
    {
      label: "Eyeco Optical & Eye Care Centre",
      value: "eyecoOptical&EyeCareCentre",
    },
    { label: "Bhargava Chasme Wale", value: "bhargavaChasmeWale" },
    { label: "Chasma Ghar", value: "chasmaGhar" },
    { label: "Chandra Optics", value: "chandraOptics" },
    { label: "SHIVA OPTICALS AND MEDICOSE", value: "shivaOpticalsAndMedicose" },
    {
      label: "SAHARANPUR CHEMIST AND OPTICIANS",
      value: "saharanpurChemistAndOpticians",
    },
    { label: "Eyesha Eye Centre", value: "eyeshaEyeCentre" },
    { label: "Jain Optical", value: "jainOptical" },
    { label: "Raj Opticals", value: "rajOpticals" },
    { label: "SHREE SAI OPTICAL", value: "shreeSaiOptical" },
    { label: "Maheshwari Optical", value: "maheshwariOptical" },
    { label: "Kharbanda Optical", value: "kharbandaOptical" },
    { label: "New Optical", value: "newOptical" },
    { label: "Apna Medical Store", value: "apnaMedicalStore" },
    { label: "DAS OPTICAL", value: "dasOptical" },
    { label: "Baba Opticians", value: "babaOpticians" },
    { label: "DURVIK OPTICALS", value: "durvikOpticals" },
    { label: "Vision Eye Care", value: "visionEyeCare" },
    { label: "Thakuriya Vision", value: "thakuriyaVision" },
    { label: "Indus EyeCare Solutions LLP", value: "indusEyecareSolutionsLlp" },
    { label: "Modern Opticals", value: "modernOpticals" },
    { label: "R & B Enterprises", value: "r&BEnterprises" },
    { label: "Kapoor Optical", value: "kapoorOptical" },
    { label: "Shiv Opticals", value: "shivOpticals" },
    { label: "PARSON OPTICALS", value: "parsonOpticals" },
    { label: "ALIGARH OPTICALS", value: "aligarhOpticals" },
    { label: "Alam Opticals", value: "alamOpticals" },
    { label: "M/s. Star Lite Opticians", value: "m/s.StarLiteOpticians" },
    {
      label: "SAI EYE CARE AND OPTICAL CENTER",
      value: "saiEyeCareAndOpticalCenter",
    },
    { label: "Vision Opticals", value: "visionOpticals" },
    { label: "JAGAN OPTICAL", value: "jaganOptical" },
    {
      label: "SHARMA OPTICALS Paonta Sahib",
      value: "sharmaOpticalsPaontaSahib",
    },
    { label: "N.N. Opticals", value: "n.n.Opticals" },
    { label: "Prakash Opticals", value: "prakashOpticals" },
    {
      label: "Drishti Opticals & Contact Lens Clinic",
      value: "drishtiOpticals&ContactLensClinic",
    },
    { label: "LOHIYA WATCH COMPANY", value: "lohiyaWatchCompany" },
    { label: "VENUS OPTICIANS", value: "venusOpticians" },
    { label: "Harsh Optical", value: "harshOptical" },
    { label: "KAPIL MALHOTRA OPTICS", value: "kapilMalhotraOptics" },
    { label: "SACHDEVA OPTICALS", value: "sachdevaOpticals" },
    { label: "SHRADDHA OPTICAL", value: "shraddhaOptical" },
    { label: "Bombay Opticals Bageshwar", value: "bombayOpticalsBageshwar" },
    { label: "AHUJA OPTICIANS", value: "ahujaOpticians" },
    {
      label: "AGRAWAL OPTICALS & CROCKERY GIFT CENTER",
      value: "agrawalOpticals&CrockeryGiftCenter",
    },
    { label: "NIRANKARI OPTICIAN", value: "nirankariOptician" },
    { label: "VANDANA OPTICAL", value: "vandanaOptical" },
    { label: "NEW STANDRARD OPTICALS", value: "newStandrardOpticals" },
    { label: "Tripathi Chasma Ghar", value: "tripathiChasmaGhar" },
    { label: "Vishal Opticals", value: "vishalOpticals" },
    { label: "Jyoti Optical", value: "jyotiOptical" },
    { label: "Negi Optical", value: "negiOptical" },
    { label: "TRIPATHI CHASHMA GHAR", value: "tripathiChashmaGhar" },
    { label: "Gupta Optical Works", value: "guptaOpticalWorks" },
    { label: "Sharma Optics Varanasi", value: "sharmaOpticsVaranasi" },
    { label: "Lovely Opticals", value: "lovelyOpticals" },
    { label: "DELHI OPTICALS", value: "delhiOpticals" },
    { label: "Chasma Sagar", value: "chasmaSagar" },
    {
      label: "Shivam Opticals Kila Parikshit",
      value: "shivamOpticalsKilaParikshit",
    },
    { label: "Jamuna Prasad & Sons", value: "jamunaPrasad&Sons" },
    { label: "Janta Optical", value: "jantaOptical" },
    { label: "SANJEEV OPTICAL CENTRE", value: "sanjeevOpticalCentre" },
    { label: "Lenscrafters", value: "lenscrafters" },
    { label: "EYE CARE CENTRE", value: "eyeCareCentre" },
    {
      label: "Prakash Chasme Wale Ram Ratan",
      value: "prakashChasmeWaleRamRatan",
    },
    { label: "EYE CARE CENTRE Kotdwar", value: "eyeCareCentreKotdwar" },
    { label: "Saini Opticals", value: "sainiOpticals" },
    { label: "Sitapur Eye Care & Opticals", value: "sitapurEyeCare&Opticals" },
    { label: "Abhay Enterprises", value: "abhayEnterprises" },
    {
      label: "VERMA EYE CARE & OPTICAL CLINIC PROP.SH BHOLA RAM VERMA",
      value: "vermaEyeCare&OpticalClinicProp.shBholaRamVerma",
    },
    { label: "CHUGH OPTICALS", value: "chughOpticals" },
    { label: "VERMA MEDICAL HALL", value: "vermaMedicalHall" },
    { label: "O2 EYE CARE", value: "o2EyeCare" },
    {
      label: "The Palampur Rotary Eye Foundation",
      value: "thePalampurRotaryEyeFoundation",
    },
    { label: "KATOCH OPTICALS", value: "katochOpticals" },
    { label: "KAPOOR & SONS OPTICALS", value: "kapoor&SonsOpticals" },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Set loading to true when starting the process

    try {
      let response;
      if (action === "SIGN IN") {
        response = await axios.post(`${config.BASE_URL}/login`, {
          email,
          password,
        });
        toast.success("Login successful!");
        localStorage.setItem("token", response.data.token);
        navigateAfterAuth();
      } else if (otpSent) {
        response = await axios.post(`${config.BASE_URL}/verify-otp`, {
          email: userEmail,
          otp,
          store: formData.store?.label,
        });
        toast.success("OTP verified successfully. Logging in..."); // Use toast for OTP success
        localStorage.setItem("token", response.data.token);

        // ✅ Show coupon modal after success
        if (response.data.couponIssued) {
          const message = response.data.inStore
            ? "🎉 Congratulations! You're eligible for 20% *in-store* discount with code KJAREYE20. Valid for 5 minutes. Check your mail for confirmation."
            : "🎉 Congratulations! You're eligible for 20% discount on your first purchase using code KJAREYE20.";

          setCouponModalContent(message);
          setShowCouponModal(true);
        } else {
          navigateAfterAuth();
        }
      } else {
        response = await axios.post(`${config.BASE_URL}/register`, {
          name,
          email,
          mobileNumber,
          password,
          store: formData.store?.label,
        });
        toast.success(
          "Registration successful. Please check your email for the OTP."
        );
        setOtpSent(true);
        setUserEmail(email);
      }
    } catch (error) {
      handleErrors(error);
    } finally {
      setLoading(false); // Stop loading after process ends
    }
  };

  const navigateAfterAuth = () => {
    setTimeout(() => {
      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate("/");
      }
      window.location.reload();
    }, 2000);
  };

  const handleErrors = (error) => {
    setLoading(false);
    if (error.response) {
      console.error("Server Error:", error.response.data);
      setError(error.response.data.error || "Server Error");
      toast.error(`Error: ${error.response.data.error || "Server Error"}`); // Use toast for errors
    } else if (error.request) {
      console.error("Network Error:", error.request);
      setError("Network Error: Please check your connection");
      toast.error("Network Error: Please check your connection"); // Use toast for network errors
    } else {
      console.error("Error:", error.message);
      setError("Error: Something went wrong");
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="bg-[#fff] p-4 rounded-2xl">
        {action === "SIGN IN" && (
          <>
            <img
              src="https://kjar.in/images/bgImg7.png"
              alt="Login_Banner"
              className="max-h-full max-w-full"
            />
          </>
        )}
        <div className="text-[#242424] font-medium text-2xl ">{action}</div>
        {action === "SIGN UP" && !otpSent && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              required
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              maxLength={10}
              pattern="[0-9]{10}"
              inputMode="numeric"
              className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-nonefocus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
            />
            {/* Store Locator for Offline Registration */}
            <div>
              <label htmlFor="store-select">Store Location</label>
              <Select
                inputId="store-select"
                name="store"
                options={storeList.map((cat) => ({
                  value: cat.value,
                  label: cat.label,
                }))}
                classNamePrefix="select"
                onChange={(selectedOption) => {
                  setFormData((prev) => ({
                    ...prev,
                    store: selectedOption
                      ? {
                          value: selectedOption.value,
                          label: selectedOption.label,
                        }
                      : null,
                  }));
                }}
                value={
                  formData.store
                    ? {
                        value: formData.store.value,
                        label: formData.store.label,
                      }
                    : null
                }
                isClearable
              />
            </div>
          </>
        )}
        {action === "SIGN IN" && (
          <>
            <input
              type="text"
              name="email || mobileNumer"
              placeholder="Enter your Email"
              required
              value={email || mobileNumber}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^\d{10}$"
              className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
            />
          </>
        )}
        {otpSent && (
          <input
            type="text"
            name="otp"
            placeholder="Enter your OTP"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
          />
        )}
        {error && <div className="text-[#a20202]">{error}</div>}

        <button
          type="submit"
          className="p-3 mt-2.5 sm:p-4 sm:mt-3 bg-[#0a492e] border-0 text-[#fff] font-bold w-full rounded-3xl cursor-pointer"
        >
          {otpSent ? "Verify OTP" : action}
        </button>
        <div className="text-[#373737] m-3">
          {action === "SIGN IN" ? (
            <div className="flex gap-1">
              New Member?{" "}
              <span
                className="text-black font-medium cursor-pointer"
                onClick={() => setAction("SIGN UP")}
              >
                Create an Account
              </span>
            </div>
          ) : (
            <div className="flex gap-1">
              Have an account?{" "}
              <span
                className="text-black font-medium cursor-pointer"
                onClick={() => setAction("SIGN IN")}
              >
                Sign In
              </span>
            </div>
          )}
        </div>
      </form>

      {/* Toast notifications */}
      {/* <ToastContainer autoClose={2000} className={styles.customToast} /> */}

      {/* Show loader if loading is true */}
      {loading && <Loader />}

      {showCouponModal && (
        <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] z-[900]">
          <div className="bg-white p-6 rounded-lg max-w-[400px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div>
              <p dangerouslySetInnerHTML={{ __html: couponModalContent }} />
              <button
                className="mt-5 py-2.5 px-5 bg-[#2e7d32] text-white border-0 rounded-sm cursor-pointer"
                onClick={() => {
                  setShowCouponModal(false);
                  // setTimeout(() => {
                  //   window.location.reload();
                  // }, 1000);
                  window.location.reload();
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
