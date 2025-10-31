import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
} from "../../redux/actions";
import config from "../../config";
// import StarRateIcon from "@mui/icons-material/StarRate";
import {Helmet} from "react-helmet-async";
import Loader from "../../components/Loader/Loader.jsx"

export default function ProductsPage() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProductsRequest());

        fetch(`${config.BASE_URL}/products`)
            .then((response) => response.json())
            .then((data) => dispatch(fetchProductsSuccess(data)))
            .catch((error) => dispatch(fetchProductsFailure(error)));
    }, [dispatch]);

    // Filter products based on the selected category
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category.includes(selectedCategory))
        : products; // Show all products if no category is selected

    if (loading) return <div className="text-[20px] h-screen"><Loader/></div>;
    if (error)
        return <div className="text-[20px] h-screen">Error: {error.message}</div>;

    return (
        <>
            <Helmet>
                <title>All Eyewear Products – Premium Glasses | KJAR</title>
                <meta
                    name="description"
                    content="Browse KJAR's full eyewear collection. Stylish, durable, and affordable glasses crafted with precision."
                />
            </Helmet>
            <div>
                {/* Products Navbar */}
                <div
                    className="flex justify-center items-center border-b border-[#bfbfbf] gap-3 text-xs py-2 md:gap-5 md:text-sm lg:gap-8 lg:text-base">
                    <div
                        className={`cursor-pointer ${
                            selectedCategory === "men" ? "font-bold text-[#343434] underline" : ""
                        }`}
                        onClick={() => setSelectedCategory("men")}
                    >
                        Men
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedCategory === "women" ? "font-bold text-[#343434] underline" : ""
                        }`}
                        onClick={() => setSelectedCategory("women")}
                    >
                        Women
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedCategory === "kids" ? "font-bold text-[#343434] underline" : ""
                        }`}
                        onClick={() => setSelectedCategory("kids")}
                    >
                        Kids
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedCategory === "bestSellers" ? "font-bold text-[#343434] underline" : ""
                        }`}
                        onClick={() => setSelectedCategory("bestSellers")}
                    >
                        Best Sellers
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedCategory === "newArrivals" ? "font-bold text-[#343434] underline" : ""
                        }`}
                        onClick={() => setSelectedCategory("newArrivals")}
                    >
                        New Arrivals
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedCategory === "sale" ? "font-bold text-[#343434] underline" : ""
                        }`}
                        onClick={() => setSelectedCategory("sale")}
                    >
                        Sale
                    </div>
                </div>

                {/* Selected Product Navbar Text */}
                <div className="flex flex-col p-4 gap-3 text-xs md:text-sm lg:text-base">
                    <div className="flex items-center text-[#555555] gap-2">
                        <div>Home</div>
                        <div>&gt;</div>
                        <div>Products</div>
                        <div>&gt;</div>
                        <div>
                            {selectedCategory
                                ? selectedCategory.charAt(0).toUpperCase() +
                                selectedCategory.slice(1)
                                : "All Products"}
                        </div>
                    </div>
                    <div className="text-[#1e1e1e] font-bold text-xl md:text-2xl">
                        {selectedCategory
                            ? selectedCategory.charAt(0).toUpperCase() +
                            selectedCategory.slice(1)
                            : "All Products"}
                    </div>
                    {/*Temporary Disable*/}
                    {/*<div className="flex items-center text-center text-[#343434] font-bold gap-3 md:gap-5">*/}
                    {/*  <div>Eyeglasses</div>*/}
                    {/*  <div>Screen Glasses</div>*/}
                    {/*  <div>Kids Glasses</div>*/}
                    {/*  <div>Contact Lenses</div>*/}
                    {/*  <div>Sunglasses</div>*/}
                    {/*</div>*/}
                </div>

                {/* Products Listing */}
                <div>
                    {/* Top Text */}
                    <div
                        className="flex justify-between items-center text-center py-3 border-t border-b border-[#bfbfbf] text-xs md:text-sm lg:text-base">
                        <div className="border-r border-[#bfbfbf] px-2 md:px-6">Filter</div>
                        <div>
                            Showing {filteredProducts.length} of {products.length} Products
                        </div>
                        <div className="border-l border-[#bfbfbf] px-2 md:px-6">Shop By Featured</div>
                    </div>
                    {/* Products Container */}
                    <div>
                        {/* Filter Container */}
                        <div></div>
                        {/* Products */}
                        <div className="grid grid-cols-2 p-4 gap-2 md:gap-4 md:p-6 md:grid-cols-3">
                            {Array.isArray(filteredProducts) &&
                            filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <Link
                                        className="text-[#343434] no-underline"
                                        to={`/product-details/${product.productId}`}
                                        key={product.productId}
                                    >
                                        <div className="border border-[#dddddd] w-fit rounded-lg p-2 md:p-4">
                                            <div
                                                className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-t-lg">
                                                <img
                                                    src={product?.colorVariants?.[0]?.images?.[0]}
                                                    alt="Glass-Img" className="w-full"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center gap-2 mt-4">
                                                <div className="flex items-center justify-between">
                                                    {/*Temporary Disable*/}
                                                    {/*<div className="bg-[#e5ebe9] rounded-xl flex items-center justify-center py-1 px-2 gap-1 text-xs w-fit">*/}
                                                    {/*    <div>4.8</div>*/}
                                                    {/*    <div>*/}
                                                    {/*        <StarRateIcon*/}
                                                    {/*            style={{color: "#0a492e", fontSize: "15px"}}*/}
                                                    {/*        />*/}
                                                    {/*    </div>*/}
                                                    {/*    <div>232</div>*/}
                                                    {/*</div>*/}
                                                    <div>
                                                        {product?.colorVariants?.[0]?.stock === 0 ? (
                                                            <div
                                                                className="border border-[#555555] w-fit rounded-2xl py-1 px-2 text-xs font-medium text-[#a20202]">
                                                                Out of Stock
                                                            </div>
                                                        ) : (
                                                            <div
                                                                className="border border-[#555555] w-fit rounded-2xl py-1 px-2 text-xs font-medium text-[#03711b]">In
                                                                Stock</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div
                                                    className="text-[#343434] font-semibold text-sm md:text-base">{product.name}</div>
                                                <div
                                                    className="flex items-center gap-2 text-xs md:text-sm lg:text-base">
                                                    <div className="text-[#343434] font-medium">
                                                        ₹ {product?.colorVariants?.[0]?.price}
                                                    </div>
                                                    <div className="text-[#b4b4b4] line-through">
                                                        ₹ {product?.colorVariants?.[0]?.actualPrice}
                                                    </div>
                                                    {product?.colorVariants?.[0]?.actualPrice &&
                                                    product?.colorVariants?.[0]?.price ? (
                                                        <div className="text-[#03711b] font-bold">
                                                            (
                                                            {Math.round(
                                                                ((product?.colorVariants?.[0]?.actualPrice -
                                                                        product?.colorVariants?.[0]?.price) /
                                                                    product?.colorVariants?.[0]?.actualPrice) *
                                                                100
                                                            )}
                                                            % OFF)
                                                        </div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="flex justify-end items-center gap-2 mt-2">
                                                {product?.colorVariants?.map((colorVariant) => (
                                                    <div
                                                        key={colorVariant.id}
                                                        className={`colorVariant ${
                                                            selectedVariant?.id === colorVariant.id
                                                                ? "selected"
                                                                : ""
                                                        }`}
                                                        onClick={() => setSelectedVariant(colorVariant)}
                                                    >
                                                        <div
                                                            className="w-[15px] h-[15px] rounded-full"
                                                            style={{background: colorVariant?.code}}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-[20px] h-screen">
                                    Sorry! Currently no products are available
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
