import {useState} from "react";
import {NavLink, Link} from "react-router-dom";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Modal} from "@mui/material";
import LoginPage from "../LoginPage/LoginPage";
import {useSelector} from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";

export default function Navbar() {
    const user = useSelector((state) => state.user.user);
    const [openLogin, setOpenLogin] = useState(false);
    const [openLogoutConfirm, setOpenLogoutConfirm] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state for logout

    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);

    const handleOpenLogoutConfirm = () => setOpenLogoutConfirm(true);
    const handleCloseLogoutConfirm = () => setOpenLogoutConfirm(false);

    const handleLogout = () => {
        setLoading(true); // Start loading when logging out

        // Simulate logout process (remove token, clear user state, etc.)
        localStorage.removeItem("token");

        // Show success message after logout
        toast.success("You have been logged out successfully!", {
            position: "top-right",
            autoClose: 3000,
        });

        setTimeout(() => {
            setLoading(false); // Stop loading
            window.location.reload(); // Reload page after logout
        }, 2000);
    };

    return (
        <div>
            {/* Top Bar */}
            <div
                className="flex flex-wrap items-center justify-between border-b-2 border-black text-xs lg:text-xl py-1 px-2 lg:py-3 lg:px-6">
                <div className="border-r border-[#525252] font-medium pr-3">
                    <NavLink to="/" className="cursor-pointer">
                        KJAR EYESERIES
                    </NavLink>
                </div>
                <div className="pl-3 text-[#555555]">
                    <NavLink to="/products" className="cursor-pointer">
                        DISCOVER TIMELESS ELEGANCE
                    </NavLink>
                </div>
                {/* First Offer */}
                {/* <div className="flex items-center gap-2 pl-4 text-[#555555]">
          <div className="w-2 h-2 bg-[#555555] rounded-full"></div>
          <div>50% OFF ON YOUR FIRST PURCHASE</div>
        </div> */}
                {/* Second Offer */}
                {/* <div className="flex items-center gap-2 pl-4 text-[#555555]">
          <div className="w-2 h-2 bg-[#555555] rounded-full"></div>
          <div>50% OFF ON YOUR FIRST PURCHASE</div>
        </div> */}
            </div>

            {/* Logo Bar */}
            <div className="py-3 px-0 bg-[#a20202]">
                <div className="flex justify-center items-center">
                    <img src="https://kjar.in/images/kjarLogo.png" alt="Kjar_Logo"/>
                </div>
                <div
                    className="text-[#fff] flex justify-end items-center gap-2 pr-2 text-xs sm:gap-3 sm:text-base sm:pr-4">
                    <Link to="/order" className="text-[#fff] no-underline">
                        <div className="flex cursor-pointer">Track Order</div>
                    </Link>
                    {user ? (
                        <div
                            className="flex cursor-pointer"
                            onClick={handleOpenLogoutConfirm}
                        >
                            <div>Hi, {user.name}</div>
                            <div className="ml-1">
                                <LogoutIcon className="text-[#fff]"/>
                            </div>
                        </div>
                    ) : (
                        <div className="flex cursor-pointer" onClick={handleOpenLogin}>
                            Login <AccountCircleIcon/>
                        </div>
                    )}

                    {/* Login Modal */}
                    <Modal open={openLogin} onClose={() => {
                    }} disableBackdropClick>
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none text-xs w-full max-w-[300px] md:w-full md:max-w-[400px] md:text-base">
                            <CloseIcon
                                className="absolute top-[10px] right-[10px] cursor-pointer"
                                onClick={handleCloseLogin}
                            />
                            <LoginPage/>
                        </div>
                    </Modal>

                    {/* Logout Confirmation Modal */}
                    <Modal
                        open={openLogoutConfirm}
                        onClose={() => {
                        }}
                        disableBackdropClick
                    >
                        <div className="fixed inset-0 bg-white/20 backdrop-blur-[10px] z-50">
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none bg-[#fff] p-4 rounded-3xl backdrop-blur-[10px] text-xs w-full max-w-[300px] md:w-full md:max-w-[400px] md:text-base shadow-lg">
                                <div className="text-center text-[#343434] text-2xl font-medium mb-6">
                                    Are you sure you want to log out?
                                </div>
                                <div className="flex justify-around items-center">
                                    <div
                                        className="bg-[#0a492e] text-[#fff] py-2 px-6 cursor-pointer rounded-3xl"
                                        onClick={handleLogout}
                                    >
                                        Yes
                                    </div>
                                    <div
                                        className="border border-black rounded-3xl py-2 px-4 cursor-pointer"
                                        onClick={handleCloseLogoutConfirm}
                                    >
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    {/* <Link to="/wishlist" className="text-[#fff] no-underline">
            <div className="flex cursor-pointer">
              {" "}
              <FavoriteBorderIcon /> Wishlist
            </div>
          </Link> */}

                    {/* Cart Tab */}
                    <Link to="/cart" className="text-[#fff] no-underline">
                        <div className="flex cursor-pointer">
                            <ShoppingCartOutlinedIcon/> Cart
                        </div>
                    </Link>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="p-3 md:p-3.5 lg:p-6 bg-[#0a492e] font-bold text-[#fff] text-shadow-lg/20">
                <div
                    className="flex flex-wrap justify-around items-center gap-2 text-xs md:gap-3 md:text-sm lg:text-base lg:gap-4">
                    <div className="cursor-pointer hover:underline">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                isActive ? "text-[#fff] underline" : "text-[#fff] no-underline"
                            }
                        >
                            HOME
                        </NavLink>
                    </div>
                    <div className="cursor-pointer hover:underline">
                        <NavLink
                            to="/products"
                            className={({isActive}) =>
                                isActive ? "text-[#fff] underline" : "text-[#fff] no-underline"
                            }
                        >
                            PRODUCTS
                        </NavLink>
                    </div>
                    <div className="cursor-pointer hover:underline">
                        <NavLink
                            to="/categories"
                            className={({isActive}) =>
                                isActive ? "text-[#fff] underline" : "text-[#fff] no-underline"
                            }
                        >
                            CATEGORIES
                        </NavLink>
                    </div>
                    {/* <div className="cursor-pointer hover:underline">BUSINESS</div> */}
                    <div className="cursor-pointer hover:underline">
                        <NavLink
                            to="/partner-with"
                            className={({isActive}) =>
                                isActive ? "text-[#fff] underline" : "text-[#fff] no-underline"
                            }
                        >
                            PARTNER WITH US
                        </NavLink>
                    </div>
                    {/* <div className="cursor-pointer hover:underline">ABOUT</div> */}
                    {/* <div className="cursor-pointer hover:underline">
            <NavLink
              to="/store-locator"
              className={({ isActive }) =>
                isActive ? "text-[#fff] underline" : "text-[#fff] no-underline"
              }
            >
              STORE LOCATOR
            </NavLink>
          </div> */}
                    <div className="cursor-pointer hover:underline">
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                isActive ? "text-[#fff] underline" : "text-[#fff] no-underline"
                            }
                        >
                            CONTACT
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Show loader if loading is true */}
            {loading && <Loader/>}
        </div>
    );
}
