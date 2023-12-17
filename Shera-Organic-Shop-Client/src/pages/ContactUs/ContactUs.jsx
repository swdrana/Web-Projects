import { Link } from "react-router-dom"
import SectionTitle from "../../components/Pages/SectionTitle"

function ContactUs() {
  return (
    <div className=" bg-gray-white">
      <SectionTitle title={"Contact Us"} />
      <section className="contact-us-section relative overflow-hidden pt-20 pb-32">
      <div className="container mx-auto">
        <div className="contact-box rounded-2 bg-white overflow-hidden mt-8">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="">
              <div className="contact-left-box relative overflow-hidden bg-primary p-6 flex flex-col h-full">
                <img
                  src="https://grostore.themetags.com/public/frontend/default/assets/img/shapes/texture-overlay.png?v=v3.0.0"
                  alt="texture"
                  className="absolute w-full h-full start-0 top-0 z--1"
                />
                <h3 className="text-white mb-3 text-2xl font-bold">Contact Details</h3>
                <p className="fs-sm text-white">
                  <strong>Address:</strong> Kalaroa Bajar, Satkhira 9410, Bangladesh.
                </p>
                <hr className="spacer my-5"></hr>
                <ul className="contact-list">
                  <li className="flex items-center gap-3 flex-wrap">
                    <span className="icon flex items-center justify-center rounded-full flex-shrink-0">
                      <i className="fab fa-whatsapp"></i>
                    </span>
                    <div className="info flex flex-col">
                      <span className="fw-medium text-white fs-xs">Emergency Call</span>
                      <a href={`tel:+8801793143054`} target="_blank"  className=' text-white text-xl'rel="noreferrer">01793143054</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 flex-wrap mt-3">
                    <span className="icon flex items-center justify-center rounded-full flex-shrink-0">
                      <i className="far fa-envelope"></i>
                    </span>
                    <div className="info">
                      <span className="fw-medium text-white fs-xs">General Communication</span>
                      <p className="mb-0 mt-1 text-white fw-medium">groshop@support.com</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-5">
                  <span className="fw-bold text-white mb-3 block">Find us on:</span>
                  <div className="social-links flex items-center gap-2">
                    <Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link>
                    <Link to="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></Link>
                    <Link to="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <form
                className="contact-form ps-4 ps-xl-0 py-8 pe-5 contact-form ps-5 ps-xl-4 py-6 pe-6"
                action="https://grostore.themetags.com/contact-us"
                method="POST"
                id="contact-form"
              >
                {/* ... Your form elements go here ... */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactUs