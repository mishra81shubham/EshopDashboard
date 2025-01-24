import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { FaProductHunt } from "react-icons/fa";
import SelectWithoutLabel from "../../components/Select/SelectWithoutLabel";
import HalfRating from "../../components/Rating/RatingStar";
import { IoMdCloudUpload } from "react-icons/io";
import { Button } from "@mui/material";

const ProductUpload = () => {
  return (
    <>
      <div className="right-content w-100">
        <Breadcrumb
          title="Product Upload"
          sourceName="Product"
          sourceIcon={<FaProductHunt />}
          destinationName="Product Upload"
        />
        {/* ------------- upload form --------- */}
        <div>
          <form className="form">
            <div className="row">
              <div className="col-md-12">
                <div className="card p-4 mt-0">
                  <h5 className="mb-4">Basic Information</h5>
                  <div className="form-group">
                    <h6>PRODUCT NAME</h6>
                    <input type="text" name="name" />
                  </div>
                  <div className="form-group">
                    <h6>DESCRIPTION</h6>
                    <textarea rows={5} cols={10} defaultValue={""} />
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <h6>CATEGORY</h6>
                        <SelectWithoutLabel size='big'/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>SUB CATEGORY</h6>
                        <SelectWithoutLabel size='big'/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>PRICE</h6>
                        <input type="text" name="price" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <h6>OLD PRICE </h6>
                        <input type="text" name="oldPrice" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6 className="text-uppercase">is Featured </h6>
                        <SelectWithoutLabel size='big'/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <h6>PRODUCT STOCK </h6>
                        <input type="text" name="countInStock" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <h6>BRAND</h6>
                        <input type="text" name="brand" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <h6>DISCOUNT</h6>
                        <input type="text" name="discount" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <h6>PRODUCT RAMS</h6>
                        <SelectWithoutLabel size='big'/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <h6>RATINGS</h6>
                       <HalfRating/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-4 mt-0">
              <div className="imagesUploadSec">
                <h5 className="mb-4">Media And Published</h5>
                <div className="imgUploadBox d-flex align-items-center">
                  <div className="uploadBox">
                    <span className="remove">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
                      </svg>
                    </span>
                    <div className="box">
                      <span
                        className=" lazy-load-image-background blur lazy-load-image-loaded"
                        style={{
                          color: "transparent",
                          display: "inline-block",
                        }}
                      >
                        <img
                          alt="image"
                          className="w-100"
                          src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="uploadBox">
                    <input type="file" multiple="" name="images" />
                    <div className="info">
                    <IoMdCloudUpload />
                      <h5>image upload</h5>
                    </div>
                  </div>
                </div>
                <br />
                <Button className="btn-blue btn-lg btn-big w-100">
                   <IoMdCloudUpload />{" "}
                  &nbsp; PUBLISH AND VIEW{" "}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductUpload;
