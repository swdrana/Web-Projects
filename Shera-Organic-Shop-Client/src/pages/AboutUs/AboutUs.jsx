import { useEffect } from "react";
import Accor from "../Checkout/Accor";
import instance from "../../provider/axios";

function AboutUs() {
  useEffect(() => {
    instance.get('/products')
      .then(response => {
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  

  return (
    <div>AboutUs

      <Accor/>
    </div>
  )
}

export default AboutUs