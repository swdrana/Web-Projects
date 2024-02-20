export const PageView = () => {
  fbq("track", "PageView");
};
// Function to track PageView event
// export const trackPageView = (userId, userName, userEmail, userPhone, userPostalCode) => {
//   fbq('track', 'PageView', {
//     user_id: userId, // Include user ID
//     user_name: userName, // Include user name
//     user_email: userEmail, // Include user email
//     user_phone: userPhone, // Include user phone number
//     user_postal_code: userPostalCode // Include user postal code
//     // Include additional user information as needed
//   });
// }

// export const AddToCart = () => {
//   // userId, productId, productName, productCategory, productPrice, currency
//   fbq("track", "AddToCart");
// };

// Function to track AddToCart event
export const trackAddToCart = (userId, userName, userEmail, userPhone, userAddress, productId, productName, productCategory, productPrice) => {
  fbq('track', 'AddToCart', {
    user_id: userId, // Include user ID
    user_name: userName, // Include user name
    user_email: userEmail, // Include user email
    user_phone: userPhone, // Include user phone number
    user_address: userAddress,
    content_ids: [productId],
    content_name: productName,
    content_category: productCategory,
    value: productPrice,
    currency: 'BDT'
    // Include additional product information as needed
  });
}

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

export const Purchase = (userId, orderIds, totalValue, numItems) => {
  fbq("track", "Purchase", {
    user_id: userId,
    content_ids: orderIds,
    content_type: "product",
    value: totalValue,
    num_items: numItems,
    currency: 'BDT',
  });
};

// // Function to track InitiateCheckout event
// export const trackInitiateCheckout = (userId, userName, userEmail, userPhone, userPostalCode, productIds, totalValue, currency) => {
//   fbq('track', 'InitiateCheckout', {
//     user_id: userId, // Include user ID
//     user_name: userName, // Include user name
//     user_email: userEmail, // Include user email
//     user_phone: userPhone, // Include user phone number
//     user_postal_code: userPostalCode, // Include user postal code
//     content_ids: productIds,
//     content_type: 'product',
//     value: totalValue,
//     currency: currency
//     // Include additional checkout information as needed
//   });
// }

// // Function to track Purchase event
// export const trackPurchase = (userId, userName, userEmail, userPhone, userPostalCode, orderIds, totalValue, numItems, currency) => {
//   fbq('track', 'Purchase', {
//     user_id: userId, // Include user ID
//     user_name: userName, // Include user name
//     user_email: userEmail, // Include user email
//     user_phone: userPhone, // Include user phone number
//     user_postal_code: userPostalCode, // Include user postal code
//     content_ids: orderIds,
//     content_type: 'product',
//     value: totalValue,
//     num_items: numItems,
//     currency: currency
//     // Include additional purchase information as needed
//   });
// }

// // Function to track ViewContent event
// export const trackViewContent = (userId, userName, userEmail, userPhone, userPostalCode, productId, productName, productCategory, productPrice, currency) => {
//   fbq('track', 'ViewContent', {
//     user_id: userId, // Include user ID
//     user_name: userName, // Include user name
//     user_email: userEmail, // Include user email
//     user_phone: userPhone, // Include user phone number
//     user_postal_code: userPostalCode, // Include user postal code
//     content_ids: [productId],
//     content_name: productName,
//     content_category: productCategory,
//     value: productPrice,
//     currency: currency
//     // Include additional product information as needed
//   });
// }

// // Function to track Search event
// export const trackSearch = (userId, userName, userEmail, userPhone, userPostalCode, searchString) => {
//   fbq('track', 'Search', {
//     user_id: userId, // Include user ID
//     user_name: userName, // Include user name
//     user_email: userEmail, // Include user email
//     user_phone: userPhone, // Include user phone number
//     user_postal_code: userPostalCode, // Include user postal code
//     search_string: searchString
//     // Include additional search information as needed
//   });
// }

// // Function to track Lead event
// export const trackLead = (userId, userName, userEmail, userPhone, userPostalCode) => {
//   fbq('track', 'Lead', {
//     user_id: userId, // Include user ID
//     user_name: userName, // Include user name
//     user_email: userEmail, // Include user email
//     user_phone: userPhone, // Include user phone number
//     user_postal_code: userPostalCode // Include user postal code
//     // Include additional lead information as needed
//   });
// }

// // Function to track CompleteRegistration event
// export const trackCompleteRegistration = (userId, userName, userEmail, userPhone, userPostalCode) => {
//   fbq('track', 'CompleteRegistration', {
//     user_id: userId, // Include user ID
//     user_name: userName, // Include user name
//     user_email: userEmail, // Include user email
//     user_phone: userPhone, // Include user phone number
//     user_postal_code: userPostalCode // Include user postal code
//     // Include additional registration information as needed
//   });
// }