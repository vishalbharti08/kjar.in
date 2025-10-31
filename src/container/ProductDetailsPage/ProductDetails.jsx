import {useState, useEffect} from "react";
import styles from "./ProductDetails.module.css";
import axios from "axios";
import {useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import config from "../../config";
import Login from "../../components/LoginPage/LoginPage";
import {Modal} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Loader from "../../components/Loader/Loader";
import {Helmet} from "react-helmet-async";

export default function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`${config.BASE_URL}/products/${id}`);
                const jsonData = await response.json();
                setProduct(jsonData);
                setSelectedVariant(jsonData?.colorVariants?.[0]);
                // Add product to recently viewed list
                const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
                // Check if the product is already in the list
                if (!recentlyViewed.some((product) => product.id === jsonData.id)) {
                    recentlyViewed.push({
                        id: jsonData.id,
                        name: jsonData.name,
                        price: jsonData.colorVariants[0].price,
                        image: jsonData.colorVariants[0].images[0],
                    });
                    // Limit to 5 recently viewed products
                    if (recentlyViewed.length > 2) {
                        recentlyViewed.shift(); // Remove the oldest viewed product
                    }
                    // Save to localStorage
                    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProductDetails();
    }, [id]);

    if (loading) return <Loader loading={true}/>;
    if (error) return <div className="errorMsg">Error: {error.message}</div>;

    const toggleFeaturesCollapsible = () => {
        setIsFeaturesOpen(!isFeaturesOpen);
    };

    const openModal = (image) => {
        setModalImage(image);
    };

    const handleBuyNow = async () => {
        if (selectedVariant?.stock === 0) return;
        try {
            if (!selectedVariant) {
                console.error("Selected variant is null or undefined");
                return;
            }
            const response = await axios.post(`${config.BASE_URL}/cart/add`, {
                productId: product.productId, quantity: 1, colorVariantId: selectedVariant.id,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log(response.data.message);
            navigate("/cart");
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    const handleBuyClick = () => {
        if (isLoggedIn) {
            handleBuyNow(); // User is logged in – proceed with regular checkout flow
        } else {
            try {
                if (product && selectedVariant) {
                    const productToStore = {
                        productId: product.productId,
                        name: product.name,
                        description: product.description,
                        timestamp: new Date().toISOString(), // Optional: useful for cleanup later
                        selectedVariant: {
                            id: selectedVariant.id,
                            size: selectedVariant.size,
                            price: selectedVariant.price,
                            actualPrice: selectedVariant.actualPrice,
                            modelNumber: selectedVariant.modelNumber,
                            frameWidth: selectedVariant.frameWidth,
                            frameDimension: selectedVariant.frameDimension,
                            name: selectedVariant.name,
                            images: selectedVariant.images,
                            stock: selectedVariant.stock,
                        },
                        quantity: 1,
                    };
                    // Retrieve existing guest cart from localStorage
                    const existingCart = JSON.parse(localStorage.getItem("guestCart")) || [];
                    // Check for duplicates (based on productId + variant id)
                    const isDuplicate = existingCart.some(item => item.productId === productToStore.productId && item.selectedVariant.id === productToStore.selectedVariant.id);
                    if (!isDuplicate) {
                        existingCart.push(productToStore);
                        localStorage.setItem("guestCart", JSON.stringify(existingCart));
                    }
                }
            } catch (error) {
                console.error("Error storing product for guest cart:", error);
            }
            navigate("/cart");
        }
    };

    if (!product) {
        return <Loader loading={true}/>;
    }

    const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    return (<>
        {/*Metadata*/}
        <Helmet>
            <title>{product?.name} – Buy Now at KJAR Eyewear</title>
            <meta
                name="description"
                content={`Shop ${product?.name} with high-quality frames and lenses. Designed for comfort and fashion.`}
            />
        </Helmet>

        <div className="p-3 md:p-5 h-[100dvh]">
            <div className="flex gap-3 w-full">
                {/* Left Side */}
                <div className="w-1/2">
                    {/* Selected Product Navbar Text  */}
                    <div className="flex items-center text-[#555555] text-xs gap-2">
                        <div>Home</div>
                        <div>&gt;</div>
                        <div>Products</div>
                        <div>&gt;</div>
                        <div>Best Sellers Product</div>
                    </div>
                    <div className={styles.imageGrid}>
                        {selectedVariant?.images?.map((image, index) => (<img
                            key={index}
                            src={image}
                            alt={`Product_Image_${index}`}
                            className={styles.clickableImage}
                            onClick={() => openModal(image)}
                        />))}
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-1/2">
                    {/* Call Support */}
                    <div className="text-[10px] text-[#2a2a2a] mb-2">
                        Problem in placing order? Give us a call{" "}
                        <span className="text-[#0a492e] font-bold cursor-pointer">
                            <a href="tel:9999479598" className="text-[#0a492e] no-underline">9999479598</a>
                            </span>
                    </div>
                    {/* Product Description */}
                    <div className={styles.desCont}>
                        <div className="flex justify-between items-center">
                            <div className="text-[#343434] font-medium">{product?.name}</div>
                            {/* <div>Heart</div> */}
                        </div>
                        <div className={styles.descTxt}>{product?.description}</div>
                        <div className="text-[#8c8c8c] font-medium">
                            Size: {selectedVariant?.size}
                        </div>
                        <div className={styles.priceOffCont}>
                            <div className={styles.actualPrice}>
                                ₹ {selectedVariant?.actualPrice}
                            </div>
                            {selectedVariant?.actualPrice && selectedVariant?.price ? (<div className={styles.offTxt}>
                                (
                                {Math.round(((selectedVariant?.actualPrice - selectedVariant?.price) / selectedVariant?.actualPrice) * 100)}
                                % OFF)
                            </div>) : null}
                        </div>
                        <div className={styles.price}>₹ {selectedVariant?.price}</div>

                        {/* This will check if the product is in stock or not */}
                        {selectedVariant?.stock === 0 ? (<div className={styles.outStock}>Out of Stock</div>) : (
                            <div className={styles.inStock}>In Stock</div>)}

                        <div className={styles.modelColors}>
                            {product?.colorVariants?.map((colorVariant) => (
                                <div
                                    key={colorVariant.id}
                                    className={`${styles.colorsCombo} ${selectedVariant?.id === colorVariant.id ? styles.selected : ""}`}
                                    onClick={() => setSelectedVariant(colorVariant)}
                                >
                    <span
                        className={styles.dot}
                        style={{background: colorVariant?.code}}
                    />
                                    <span>{colorVariant?.name}</span>
                                </div>))}
                        </div>
                    </div>
                    {/* Coupon Code */}
                    {/* <div className={styles.couponCode}>
            <div>with Pre-fitted Screen Glasses </div>
            <div className={styles.couponPrice}>
              Get it for ₹800. Coupon: EYECON
            </div>
          </div> */}
                    <div className={styles.buyBtnContainer}>
                        <div
                            className={styles.buyBtn}
                            onClick={handleBuyClick}
                            style={{
                                pointerEvents: selectedVariant?.stock === 0 ? "none" : "auto",
                                opacity: selectedVariant?.stock === 0 ? 0.5 : 1,
                                cursor: selectedVariant?.stock === 0 ? "pointer" : "pointer",
                            }}
                        >
                            Buy Now
                        </div>

                        {/* Urgency message */}
                        {selectedVariant?.stock > 0 && selectedVariant?.stock <= 5 && (
                            <div className={`${styles.stockWarning} ${styles.fadeIn}`}>
                                Only {selectedVariant.stock} left in stock!
                            </div>)}
                        {selectedVariant?.stock === 0 && (
                            <div className={`${styles.outOfStockWarning} ${styles.fadeIn}`}>
                                Out of stock
                            </div>)}
                    </div>

                    {/* Try On  */}
                    {/* <div className={styles.tryOn}>
            <div>TRY ON </div>
            <div className={styles.tryImgOuter}>
              <img src="https://kjar.in/images/tryOn.png" alt="Try-On-Img" />
            </div>
          </div> */}

                    <div className="my-4 border border-[#999999]"></div>
                    {/* Specifications */}
                    <div className={styles.technicalCollapse}>
                        <div
                            className={styles.technicalContainer}
                            onClick={toggleFeaturesCollapsible}
                        >
                            <div className="text-[#343434] font-medium">Technical Information</div>
                            <div>
                                {isFeaturesOpen ? (<KeyboardArrowUpIcon/>) : (<KeyboardArrowDownIcon/>)}
                            </div>
                        </div>

                        {isFeaturesOpen && (<div className={styles.desCont}>
                            <div className="flex justify-between items-center">
                                <div className="text-[#2a2a2a]">Model Number</div>
                                {" "}
                                <div className="text-[#2a2a2a] font-medium">
                                    {selectedVariant?.modelNumber}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-[#2a2a2a]">Frame Size</div>
                                <div className="text-[#2a2a2a] font-medium">
                                    {selectedVariant?.size}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-[#2a2a2a]">Frame Width</div>
                                <div className="text-[#2a2a2a] font-medium">
                                    {selectedVariant?.frameWidth}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-[#2a2a2a]">Frame Dimensions</div>
                                <div className="text-[#2a2a2a] font-medium">
                                    {selectedVariant?.frameDimension}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-[#2a2a2a]">Frame colour</div>
                                <div className="text-[#2a2a2a] font-medium">
                                    {selectedVariant?.name}
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="my-4 border border-[#999999]"></div>
                    {/* Reviews */}
                    {/*<div className="text-[#343434] font-medium">Review (0)</div>*/}
                    {/*<div className="my-4 border border-[#999999]"></div>*/}
                </div>
            </div>
            {/* Modal for Login */}
            <Modal open={openLoginModal} onClose={() => setOpenLoginModal(false)}>
                <div className={styles.loginModal}>
                    <Login/>
                </div>
            </Modal>
            {/* Recently Viewed Products */}
            <div className="my-4 border border-[#999999]"></div>
            <div>
                <div className="text-lg text-[#343434] font-medium my-5">Recently Viewed Products</div>
                <div className="flex gap-5 flex-wrap">
                    {recentlyViewed.length > 0 ? (recentlyViewed.map((product) => (<div key={product.id}>
                        <div className={styles.recentProduct}>
                            <img src={product.image} alt={product.name}/>
                        </div>
                        <div>
                            <div className="text-[#525151] font-medium">{product.name}</div>
                            <div className="text-[##343434] font-medium">₹ {product.price}</div>
                        </div>
                    </div>))) : (<div>No recently viewed products.</div>)}
                </div>
            </div>
            <Modal
                open={!!modalImage}
                onClose={() => {
                }} // Disable default outside click close
                slotProps={{
                    backdrop: {
                        onClick: (e) => e.stopPropagation(), // Prevent backdrop click from closing modal
                    },
                }}
            >
                <div
                    className={styles.imageModal}
                    onClick={(e) => e.stopPropagation()} // Prevent bubbling inside modal
                >
                    <button
                        className="absolute top-2 right-3 bg-transparent border-none text-[24px] cursor-pointer text-[#333] z-10 p-0 hover:text-red-600"
                        onClick={() => setModalImage(null)}
                    >
                        &times;
                    </button>
                    <img src={modalImage} alt="Enlarged Product"/>
                </div>
            </Modal>
        </div>
    </>);
}
