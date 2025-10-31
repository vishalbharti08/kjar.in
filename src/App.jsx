import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {
    fetchUserFailure,
    fetchUserRequest,
    fetchUserSuccess,
} from "./redux/actions";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import DisplayGlass from "./container/DisplayGlass/DisplayGlass";
import Error404 from "./components/ErrorPage/Error404";
import Footer from "./components/Footer/Footer";
import CategoriesPage from "./container/CategoriesPage/CategoriesPage";
import ProductsPage from "./container/ProductsPage/ProductsPage";
import ProductDetails from "./container/ProductDetailsPage/ProductDetails";
import Contact from "./components/Contact/Contact";
import CartPage from "./container/CartPage/CartPage";
import Order from "./container/Order/Order";
import config from "./config";
import LoginNotFound from "./components/LoginNotFound/LoginNotFound";
import TermsandConditions from "./components/PrivacyData/TermsandConditions";
import Privacy from "./components/PrivacyData/Privacy";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PartnerWith from "./container/PartnerWithUs/PartnerWith";
import BuyingGuide from "./container/BuyingGuide/BuyingGuide";
import {migrateGuestCartToUser} from "./container/CartPage/migrateGuestCart.jsx";
import CheckoutPage from "./container/CheckoutPage/CheckoutPage.jsx";
import CheckoutAddress from "./container/CheckoutPage/CheckoutAddress.jsx";
import CheckoutSummary from "./container/CheckoutPage/CheckoutSummary.jsx";
// import ReturnandRefund from "./components/PrivacyData/ReturnandRefund";
// import ProfilePage from "./components/LoginPage/ProfilePage";
// import StoreLocator from "./container/StoreLocator/StoreLocator";
// import Career from "./components/Career/Career";


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const initUserSession = async () => {
            if (!token) return;
            dispatch(fetchUserRequest());
            try {
                // ⬅️ Migrate guest cart first
                await migrateGuestCartToUser(token);
                // ⬅️ Then fetch user data
                const response = await fetch(`${config.BASE_URL}/user/me`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const userData = await response.json();
                dispatch(fetchUserSuccess(userData));
            } catch (error) {
                console.error("API call failed:", error);
                dispatch(fetchUserFailure(error));
            }
        }
        initUserSession();
    }, [dispatch]);

    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <ScrollToTop/>
                <Navbar/>
                <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<DisplayGlass/>}/>
                    <Route path="/categories" element={<CategoriesPage/>}/>
                    <Route path="/partner-with" element={<PartnerWith/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/product-details/:id" element={<ProductDetails/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/order" element={<Order/>}/>
                    <Route path="/login" element={<LoginNotFound/>}/>
                    <Route path="/policy" element={<Privacy/>}/>
                    <Route path="/termsandconditions" element={<TermsandConditions/>}/>
                    <Route path="/buying-guide" element={<BuyingGuide/>}/>
                    <Route path="/checkout/signIn" element={<CheckoutPage/>}/>
                    <Route path="/checkout/address" element={<CheckoutAddress/>}/>
                    <Route path="/checkout/summary" element={<CheckoutSummary/>}/>
                    {/* <Route path="/store-locator" element={<StoreLocator />} /> */}
                    {/* <Route path="/career" element={<Career />} /> */}
                    {/* <Route path="/returnandrefund" element={< ReturnandRefund/>} /> */}
                    <Route path="/contact" element={<Contact/>}/>
                    {/* <Route path="/profile" element={<ProfilePage />} /> */}
                    <Route path="/*" element={<Error404/>}/>
                </Routes>
                </main>
                <Footer/>
                <ToastContainer position="top-right" autoClose={2000}/>
            </BrowserRouter>
        </div>
    );
};

export default App;
