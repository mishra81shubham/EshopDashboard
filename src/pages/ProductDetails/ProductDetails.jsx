import React, { useRef } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { FaProductHunt } from "react-icons/fa";
import ImageSlider from "../../components/Slider/ImageSlider";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdFilterVintage } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
import { TbTextResize } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import ProductReview from "./ProductReview";

const ProductDetails = () => {
    const productSliderBig = useRef();
    const productSliderSmall = useRef();
    var bigSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
      var smallSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      };
      const handleSmallSliderClick = (index) => {
        if (productSliderBig.current) {
          productSliderBig.current.slickGoTo(index); // Navigate the big slider
        }
      };

  return (
    <>
      <div className="right-content w-100">
        <Breadcrumb
          title="Product Details"
          sourceName="Product"
          sourceIcon={<FaProductHunt />}
          destinationName="Product View"
        />
        {/* -------------------------------------------------- */}

        <div className="card productDetailsSEction">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Product Gallery</h6>
                <ImageSlider
                 sliderRef={productSliderBig}
                  sliderClassName="sliderBig"
                  sliderSettings={bigSliderSettings}
                />
                <ImageSlider
                 sliderRef={productSliderSmall}
                  sliderClassName="sliderSml"
                  sliderSettings={smallSliderSettings}
                  onImageClick={handleSmallSliderClick}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className=" pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Product Details</h6>
                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>
                <div className="productInfo mt-4">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Ecstasy</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategoryAlt />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Man's</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdFilterVintage />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <div className="row">
                          <ul className="list list-inline tags sml">
                            <li className="list-inline-item">
                              <span>SUITE</span>
                            </li>
                            <li className="list-inline-item">
                              <span>PARTY</span>
                            </li>
                            <li className="list-inline-item">
                              <span>PARTY</span>
                            </li>
                            <li className="list-inline-item">
                              <span>DRESS</span>
                            </li>
                            <li className="list-inline-item">
                              <span>SMART</span>
                            </li>
                            <li className="list-inline-item">
                              <span>MAN</span>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoColorPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <div className="row">
                          <ul className="list list-inline tags sml">
                            <li className="list-inline-item">
                              <span>RED</span>
                            </li>
                            <li className="list-inline-item">
                              <span>BLUE</span>
                            </li>
                            <li className="list-inline-item">
                              <span>WHITE</span>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <TbTextResize />
                      </span>
                      <span className="name">Size</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(68) Piece</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdOutlineRateReview />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(03) Review</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdVerified />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      <span>02 Feb 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <ProductReview/>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
