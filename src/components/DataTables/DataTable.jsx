import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";
const DataTable = () => {
  const productData = [
    {
      id: 1,
      imageUrl: "https://mironcoder-hotash.netlify.app/images/product/01.webp",
      title: "Tops and skirt set for Female...",
      description:
        "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
      category: "womans",
      brand: "richman",
      price: 21.0,
      oldPrice: 28.0,
      rating: 4.5,
      reviews: 16,
      sold: 380,
      revenue: 38000,
    },
    {
      id: 2,
      imageUrl: "https://mironcoder-hotash.netlify.app/images/product/02.webp",
      title: "Casual Shirt for Men",
      description: "Comfortable summer shirt for men",
      category: "mens",
      brand: "casualMan",
      price: 25.0,
      oldPrice: 30.0,
      rating: 4.0,
      reviews: 10,
      sold: 200,
      revenue: 20000,
    },
  ];

  return (
    <>
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-striped v-align">
          <thead className="thead-dark">
            <tr>
              <th>UID</th>
              <th style={{ width: 300 }}>PRODUCT</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>RATING</th>
              <th>ORDER</th>
              <th>SALES</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.id}>
                <td>#{product.id}</td>
                <td>
                  <div className="d-flex align-items-center productBox">
                    <div className="imgWrapper">
                      <div className="img card shadow m-0">
                        <img
                          src={product.imageUrl}
                          className="w-100"
                          alt={product.title}
                        />
                      </div>
                    </div>
                    <div className="info pl-3">
                      <h6>{product.title}</h6>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <div style={{ width: 70 }}>
                    <del className="old">${product.oldPrice.toFixed(2)}</del>
                    <span className="new text-danger">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </td>
                <td>100</td>
                <td>
                <FaStar />{product.rating.toFixed(1)}({product.reviews})
                </td>
                <td>{product.sold}</td>
                <td>${(product.revenue / 1000).toFixed(1)} k</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Link to='/product/details'>
                    <Button color="secondary" className="secondary">
                      <FaEye />
                    </Button>
                    </Link>
                    <Button color="success" className="success">
                      <FaPencilAlt />
                    </Button>
                    <Button color="error" className="error">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex tableFooter">
          <p> showing <b>12</b> of <b>60</b> results </p>
          <Pagination count={10} color="primary" className="pagination"/>
        </div>
      </div>
    </>
  );
};

export default DataTable;
