import { useEffect } from "react";
import Accor from "../Checkout/Accor";

function AboutUs() {
  useEffect(()=>{
    fetch('https://js-shera-orgamic-shop-server.vercel.app/api/products')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  },[]);
  

  return (
    <div>AboutUs

      <Accor/>
    </div>
  )
}

export default AboutUs