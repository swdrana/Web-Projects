export const PageView = () =>{
    fbq('track', 'PageView');
}
// Function to track AddToCart event with user data
export const AddToCart = () => {
    fbq('track', 'AddToCart');
}

// Function to track InitiateCheckout event with user data
export const InitiateCheckout = () => {
    fbq('track', 'InitiateCheckout');
}

// Function to track Purchase event with user data
export const Purchase = () => {
    fbq('track', 'Purchase'
    // {
    //     user_id: userId, // Include user ID
    //     content_ids: orderIds,
    //     content_type: 'product',
    //     value: totalValue,
    //     num_items: numItems,
    //     currency: currency
    //     // Include additional parameters as needed
    // }
    );
}
