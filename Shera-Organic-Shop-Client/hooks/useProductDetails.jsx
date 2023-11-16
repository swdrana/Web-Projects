import { useState, useEffect } from 'react';
import instance from '../src/provider/axios';

const useProductDetails = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await instance.get(`/products/${productId}`);
        if (response.status === 200) {
          const productData = response.data;
          setProduct(productData);
        } else {
          console.error('Error fetching product details:', response.statusText);
          setError('Error fetching product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error.message);
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return { product, loading, error };
};

export default useProductDetails;
