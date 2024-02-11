export const PageView = () => {
  fbq("track", "PageView");
};

export const AddToCart = () => {
  // userId, productId, productName, productCategory, productPrice, currency
  fbq("track", "AddToCart");
};

export const InitiateCheckout = (productIds, productName, totalValue) => {
  fbq("track", "InitiateCheckout", {
    //     user_id: userId, // Include user ID
    content_ids: productIds,
    content_type: "product",
    content_name: productName,
    value: totalValue,
    currency: "BDT",
  });
};

export const Purchase = (userId, orderIds, totalValue, numItems, currency) => {
  fbq("track", "Purchase", {
    user_id: userId,
    content_ids: orderIds,
    content_type: "product",
    value: totalValue,
    num_items: numItems,
    currency: currency,
  });
};
