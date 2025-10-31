import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import config from "../../config";
import "aos/dist/aos.css";
import AOS from "aos";
import MainBody from "../MainBody/MainBody";
import styles from "./DisplayGlass.module.css";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loader/Loader.jsx";

export default function DisplayGlass() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize AOS library
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  // Only show the first 4 products
  const visibleProducts = products.slice(0, 4);

  useEffect(() => {
    dispatch(fetchProductsRequest());

    fetch(`${config.BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error)));
  }, [dispatch]);

  if (loading) return <div className={styles.errorMsg}><Loader /></div>;
  if (error)
    return <div className={styles.errorMsg}>Error: {error.message}</div>;

  return (
    <>
      <Helmet>
        <title>KJAR Eyewear – Stylish & Affordable Glasses for All</title>
        <meta
          name="description"
          content="Discover KJAR Eyewear: affordable, high-quality glasses designed for style and comfort. Shop frames for men, women, and kids."
        />
      </Helmet>
      <div>
        {/* Main Image */}
        <div>
          <div>
            <img
              src="https://kjar.in/images/topBGImg.png"
              alt="Top_BG_Img"
              className={styles.mainImg}
            />
          </div>
          {/* <div className={styles.exploreBox}>
          <div className={styles.dashLine}></div>
          <div className={styles.exploreTxt}>EXPLORE ALL PRODUCTS</div>
        </div> */}
        </div>

        {/* Sub Images */}
        <div className={styles.subImgContainer}>
          {/* First Image with Text */}
          <div className={styles.imageContainer}>
            <div>
              <img
                src="https://kjar.in/images/bgImg1.png"
                alt="bgImg1"
                className={styles.subImages}
              />
            </div>
            <div className={styles.img1Txt}>
              <div className={styles.seeWorldTxt}>
                SEE THE WORLD WITH CLARITY, STYLE, AND CONFIDENCE
              </div>
              <Link to="/products" className={styles.decorationNone}>
                <button className={styles.shopNowBtn}>SHOP NOW</button>
              </Link>
            </div>
          </div>

          {/* Second Image */}
          <div>
            <img
              src="https://kjar.in/images/bgImg2.png"
              alt="bgImg2"
              className={styles.subImages}
            />
          </div>

          {/* Third Image with Text */}
          <div className={styles.imageContainer}>
            <div>
              <img
                src="https://kjar.in/images/bgImg3.png"
                alt="bgImg3"
                className={styles.subImages}
              />
            </div>
            <div className={styles.img3Txt}>
              <div className={styles.designedTxt}>
                DESIGNED FOR <div className={styles.spanTxt}>EVERY VIEW</div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 1 */}
        <div className={styles.box1Container}>
          <div className={styles.box1ExploreTxt}>EXPLORE OUR COLLECTIONS</div>
          <div className={styles.eleganceTxt}>DISCOVER TIMELESS ELEGANCE</div>
        </div>

        {/* Box 2 */}
        <div className={styles.box2Container}>
          <div className={styles.box2InnerCon}>
            {/* Products */}
            <div className={styles.productContainer}>
              {Array.isArray(visibleProducts) && visibleProducts.length > 0 ? (
                visibleProducts.map((product) => (
                  <Link
                    className={styles.productLink}
                    to={`/product-details/${product.productId}`}
                    key={product.productId}
                    data-aos="fade-up"
                  >
                    <div className={styles.productBox}>
                      <div className={styles.productImage}>
                        <img
                          src={product?.colorVariants?.[0]?.images?.[0]}
                          alt="Glass-Img"
                          className="rounded-md"
                        />
                      </div>
                      <div className={styles.productDetails}>
                        <div className={styles.productName}>{product.name}</div>
                        <div className={styles.eleganceTxt}>
                          DISCOVER TIMELESS ELEGANCE
                        </div>
                        <div className={styles.productDescription}>
                          {product.description}
                        </div>
                        <div className={styles.buyBtn}>BUY NOW</div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="errorMsg">No products available</div>
              )}
            </div>
          </div>
        </div>

        <MainBody />
      </div>
    </>
  );
}
