import { useEffect, useState } from "react";
import styles from "./Order.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import config from "../../config";
import authGuard from "../../guards/auth.guard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = useSelector((state) => state.user?.user?.id);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Auth token not available");
        }
        const response = await axios.get(`${config.BASE_URL}/myorders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Reverse the orders array to show the most recent order at the top
        setOrders(response.data.reverse());
      } catch (error) {
        toast.error("Error fetching orders: " + error.message); // Use Toastify for error
      } finally {
        setLoading(false); // Stop loader once the orders are fetched
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  // const downloadInvoice = async (orderId) => {
  //   setLoading(true); // Start loading when downloading invoice
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(
  //       `${config.BASE_URL}/order/${orderId}/invoice`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         responseType: "blob",
  //       }
  //     );
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", `invoice_${orderId}.pdf`);
  //     document.body.appendChild(link);
  //     link.click();

  //     toast.success("Invoice downloaded successfully!"); // Success Toastify message
  //   } catch (error) {
  //     toast.error("Error downloading invoice: " + error.message); // Error Toastify message
  //   } finally {
  //     setLoading(false); // Stop loader after download attempt
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>Order Summary – KJAR Eyewear</title>
        <meta
          name="description"
          content="View your order summary and payment details before placing your eyewear order."
        />
      </Helmet>
      <div>
        {/* Show loader during the fetching or downloading process */}
        {loading && (
          <div className={styles.globalSpinner}>
            <span className={styles.loader}></span>
          </div>
        )}

        {orders.length > 0 ? (
          <div className={styles.orderPage}>
            {orders.map((item) => (
              <div className={styles.orderContainer} key={item.orderId}>
                {/* Order ID Line */}
                <div className={styles.orderIdLine}>
                  <div className={styles.orderIdContainer}>
                    <div className={styles.orderIdLabel}>
                      <div className={styles.orderIdTxt}>Order ID:</div>
                      <div className={styles.orderIdData}>{item.orderId}</div>
                    </div>
                    <div className={styles.orderIdLabel}>
                      <div className={styles.orderIdTxt}>Order Date:</div>
                      <div className={styles.orderIdData}>
                        {new Date(item.createdAt).toLocaleDateString("en-GB")}
                      </div>
                    </div>
                  </div>
                  <div className={styles.orderIdLabel}>
                    <div className={styles.orderIdTxt}>Total Price:</div>
                    <div className={styles.orderIdData}>
                      ₹ {item.price * item.quantity}
                    </div>
                  </div>
                </div>
                <div className={styles.bottomLine}></div>

                {/* Product Detail Box */}
                <div className={styles.productDescriptionBox}>
                  <div className={styles.orderIdLabel}>
                    <div className={styles.productImage}>
                      <img
                        src={item.colorVariant.images[0]}
                        alt={item.product.name}
                      />
                    </div>

                    <div className={styles.productDescription}>
                      <div className={styles.productName}>
                        {item.product.name}
                      </div>
                      <div>Sold by Web Store</div>
                      <div className={styles.productPrice}>₹ {item.price}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomLine}></div>

                {/* Size Box */}
                <div className={styles.orderIdLine}>
                  <div>
                    <div className={styles.orderIdTxt}>
                      Color:{" "}
                      <span className={styles.orderIdData}>
                        {item.colorVariant.name}
                      </span>
                    </div>
                    <div className={styles.orderIdTxt}>
                      Quantity:{" "}
                      <span className={styles.orderIdData}>
                        {item.quantity}
                      </span>
                    </div>
                    <div className={styles.orderIdTxt}>
                      Status:{" "}
                      <span className={styles.orderIdData}>{item.status}</span>{" "}
                    </div>
                    {item.packageId === null ? null : (
                      <div className={styles.orderIdTxt}>
                        Package ID:{" "}
                        <span className={styles.orderIdData}>
                          {item.packageId}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* {item.status === "delivered" ? (
                  <div
                    className={styles.reorderTxt}
                    onClick={() => downloadInvoice(item.orderId)}
                  >
                    Download Invoice
                  </div>
                ) : null} */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyOrderMessage}>No orders found...</div>
        )}
      </div>
    </>
  );
};

export default authGuard(Order);
