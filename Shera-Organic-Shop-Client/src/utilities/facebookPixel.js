export const PageView = () =>{
    fbq('track', 'PageView');
}
// Function to track AddToCart event with user data
export const AddToCart = () => {
    // userId, productId, productName, productCategory, productPrice, currency
    fbq('track', 'AddToCart');
}

// Function to track InitiateCheckout event with user data
export const InitiateCheckout = () => {
    // userId, productIds, totalValue, numItems, currency
    fbq('track', 'InitiateCheckout', 
    // {
    //     user_id: userId, // Include user ID
    //     content_ids: productIds,
    //     content_type: 'product',
    //     value: totalValue,
    //     num_items: numItems,
    //     currency: currency
    //     // Include additional parameters as needed
    // }
    );
}

// Function to track Purchase event with user data
export const Purchase = (userId, orderIds, totalValue, numItems, currency) => {
    fbq('track', 'Purchase', 
    {
        user_id: userId,
        content_ids: orderIds,
        content_type: 'product',
        value: totalValue,
        num_items: numItems,
        currency: currency
    }
    );
}
