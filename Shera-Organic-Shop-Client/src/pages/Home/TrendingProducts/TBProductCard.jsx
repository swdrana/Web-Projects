import { styled } from "styled-components";

const OfferBatch = styled.span`
 &before{
    content: "";
    /* position: absolute;
    right: -1px;
    top: 0;
    width: 8px;
    height: 25px;
    background-color: #fff;
    -webkit-clip-path: polygon(100% 0, 0 50%, 100% 100%);
    clip-path: polygon(100% 0, 0 50%, 100% 100%); */
 }
`
const TBProductCard = () => {
    
  return (
    <div>
      <div className=" w-80 border  border-[#f4f4f4] rounded-md col-xxl-3 col-lg-4 col-md-6 col-sm-10 filter_item 7 13 14 16" >
      {/* style="position: absolute; left: 336px; top: 497.289px;" */}
        <div className="vertical-product-card rounded-2 relative ">
          <OfferBatch className=" bg-[#ff0406] p-1 rounded-tl-xl rounded-br-xl text-white absolute top-1 left-1">
            -10% <span className="text-uppercase">Off</span>
          </OfferBatch>

          <div className="thumbnail position-relative text-center p-4">
            <img
              src="https://grostore.themetags.com/public/uploads/media/QRrqV5dcT0zLMPR7wNbRGGkSk9f16V3amjaKk4R8.png"
              alt="Dalim (Pomegranate)"
              className="img-fluid"
            />
            <div className="product-btns position-absolute d-flex gap-2 flex-column">
              <a
                href="javascript:void(0);"
                className="rounded-btn"
                onClick="showProductDetailsModal(21)"
              >
                <i className="fa-regular fa-eye"></i>
              </a>
            </div>
          </div>

          <div className="card-content">
            <span
              className="fs-xxs fw-bold"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Reward Points"
            >
              <i className="fas fa-medal"></i> 100
            </span>
            {/* <!--product category start--> */}
            <div className="mb-2 tt-category tt-line-clamp tt-clamp-1">
              <a
                href=""
                className="d-inline-block text-muted fs-xxs"
              >
                Breakfast ,
              </a>
              <a
                href=""
                className="d-inline-block text-muted fs-xxs"
              >
                Fresh Organic ,
              </a>
              <a
                href=""
                className="d-inline-block text-muted fs-xxs"
              >
                Fresh Fruits ,
              </a>
              <a
                href=""
                className="d-inline-block text-muted fs-xxs"
              >
                Vegetables
              </a>
            </div>
            {/* <!--product category end--> */}

            <a
              href=""
              className="card-title fw-bold mb-2 tt-line-clamp tt-clamp-1"
            >
              Dalim (Pomegranate)
            </a>

            <h6 className="price">
              <span className="fw-bold h4 text-danger">₹1,440.00</span>

              <small>/kg</small>
            </h6>
          </div>
          <div className="card-btn bg-white">
            <form action="" className="direct-add-to-cart-form">
              <input
                type="hidden"
                name="_token"
                value="t0RFZoT9glgvirp7HEeYA2kEmSXHNHb7I40p0ceo"
              />
              <input type="hidden" name="product_variation_id" value="28" />
              <input type="hidden" value="1" name="quantity" />

              <a
                href="javascript:void(0);"
                onClick="directAddToCartFormSubmit(this)"
                className="btn btn-secondary d-block btn-md rounded-1 w-100 direct-add-to-cart-btn add-to-cart-text"
              >
                Add to Cart
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TBProductCard;
