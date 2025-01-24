import React from 'react';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FaReply } from "react-icons/fa";
import Button from "@mui/material/Button";

const ProductReview = () => {
  return (
    <>
     <div className="p-4">
            <h6 className="mt-4 mb-3">Product Description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit repellendus expedita esse cupiditate quos doloremque
              rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
              voluptatem delectus nam, molestiae, repellendus ab sint quo
              aliquam debitis amet natus doloremque laudantium? Repudiandae,
              consequuntur, officiis quidem quo deleniti, autem non laudantium
              sequi error molestiae ducimus accusamus facere velit consectetur
              vero dolore natus nihil temporibus aspernatur quia consequatur?
              Consequuntur voluptate deserunt repellat tenetur debitis molestiae
              doloribus dicta. In rem illum dolorem atque ratione voluptates
              asperiores maxime doloremque laudantium magni neque ad quae quos
              quidem, quaerat rerum ducimus blanditiis reiciendis
            </p>
            <br />
            <h6 className="mt-4 mb-4">Rating Analytics</h6>
            <div className="ratingSection">
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">5 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }} />
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">4 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "50%" }} />
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">3 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "50%" }} />
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">2 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "20%" }} />
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">1 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "50%" }} />
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
            </div>
            <br />
            <h6 className="mt-4 mb-4">Customer_reviews</h6>
            <div className="reviewsSecrion">
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      {/* ----- */}
                      <div className="rateStarMain">
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStarHalf className="fiveStarRate" />
                      </div>
                      {/* ----- */}
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      {/* ----- */}
                      <div className="rateStarMain">
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStarHalf className="fiveStarRate" />
                      </div>
                      {/* ----- */}
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>{" "}
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      {/* ----- */}
                      <div className="rateStarMain">
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStarHalf className="fiveStarRate" />
                      </div>
                      {/* ----- */}
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                  <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                      <FaReply />{" "}
                        &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <div className="userImg lg">
                          <span className="rounded-circle">
                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                          </span>
                        </div>
                        <div className="info pl-3">
                          <h6>Miron Mahmud</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      {/* ----- */}
                      <div className="rateStarMain">
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStar className="fiveStarRate" />
                        <IoStarHalf className="fiveStarRate" />
                      </div>
                      {/* ----- */}
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-center">
                  <div className="ml-auto">
                      <Button className="btn-blue btn-big btn-lg ml-auto">
                      <FaReply />{" "}
                        &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
            </div>
            <h6 className="mt-4 mb-4">Review Reply Form</h6>
            <form className="reviewForm">
              <textarea placeholder="write here " defaultValue={""} />
              <Button
                className="btn-blue btn-big btn-lg w-100 mt-4"
              >
                drop your replies
                <span className="MuiTouchRipple-root css-w0pj6f" />
              </Button>
            </form>
          </div>
    </>
  )
}

export default ProductReview