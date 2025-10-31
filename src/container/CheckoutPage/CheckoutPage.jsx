import Loader from "../../components/Loader/Loader.jsx";
import {useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import config from "../../config.js";
import {toast} from "react-toastify";

const CheckoutPage = () => {
    const [action, setAction] = useState("SIGN IN");
    const [error, setError] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            let response;
            if (action === "SIGN IN") {
                response = await axios.post(`${config.BASE_URL}/login`, {
                    email, password,
                });
                toast.success("Login successful!");
                localStorage.setItem("token", response.data.token);
                navigateAfterAuth();
            } else if (otpSent) {
                response = await axios.post(`${config.BASE_URL}/verify-otp`, {
                    email: userEmail, otp,
                });
                toast.success("OTP verified successfully. Logging in...");
                localStorage.setItem("token", response.data.token);
                navigateAfterAuth();
            } else {
                await axios.post(`${config.BASE_URL}/register`, {
                    name, email, mobileNumber, password,
                });
                toast.success("Registration successful. Please check your email for the OTP.");
                setOtpSent(true);
                setUserEmail(email);
            }
        } catch (error) {
            handleErrors(error);
        } finally {
            setLoading(false);
        }
    };

    const navigateAfterAuth = () => {
        setTimeout(() => {
            navigate("/checkout/address");
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

    return (<div className="h-[100dvh]">
            {/*Login Page*/}
            <div>
                <form onSubmit={handleFormSubmit} className="bg-[#fff] p-5 text-xs">
                    <div className="text-[#242424] font-medium text-2xl mb-2">{action}</div>
                    {action === "SIGN UP" && !otpSent && (<>
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
                        </>)}
                    {action === "SIGN IN" && (<>
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
                        </>)}
                    {otpSent && (<input
                            type="text"
                            name="otp"
                            placeholder="Enter your OTP"
                            required
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="border border-[#8d8d8d] text-black rounded-2xl my-1 mx-0 w-full box-border shadow-[0_0_6px_rgba(0,0,0,0.2)] focus:outline-none focus:border-[#0d99ff] p-3 sm:my-2 sm:p-4"
                        />)}
                    {error && <div className="text-[#a20202]">{error}</div>}

                    <button
                        type="submit"
                        className="p-3 mt-2.5 sm:p-4 sm:mt-3 bg-[#0a492e] border-0 text-[#fff] font-bold w-full rounded-3xl cursor-pointer"
                    >
                        {otpSent ? "Verify OTP" : action}
                    </button>
                    <div className="text-[#373737] m-3">
                        {action === "SIGN IN" ? (<div className="flex gap-1">
                                New Member?{" "}
                                <span
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => setAction("SIGN UP")}
                                >
                Create an Account
              </span>
                            </div>) : (<div className="flex gap-1">
                                Have an account?{" "}
                                <span
                                    className="text-black font-medium cursor-pointer"
                                    onClick={() => setAction("SIGN IN")}
                                >
                Sign In
              </span>
                            </div>)}
                    </div>
                </form>
                {loading && <Loader/>}
            </div>
        </div>)
}

export default CheckoutPage;