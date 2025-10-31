import axios from "axios";
import config from "../../config.js";

export const migrateGuestCartToUser = async (token) => {
    const guestCart = JSON.parse(localStorage.getItem("guestCart")) || [];

    if (!guestCart.length) return;

    try {
        const payload = guestCart.map((item) => ({
            productId: item.productId,
            colorVariantId: item.selectedVariant.id,
            quantity: item.quantity || 1,
        }));

        await axios.post(
            `${config.BASE_URL}/cart/migrate`,
            {items: payload},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        localStorage.removeItem("guestCart");
        console.log("✅ Guest cart migrated successfully.");
    } catch (error) {
        console.error("❌ Failed to migrate guest cart:", error);
    }
};
