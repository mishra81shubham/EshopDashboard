import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { FaProductHunt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { TbStarsFilled } from "react-icons/tb";
import DashboardBox from "../../components/CardBox/DashboardBox";
import { BsThreeDotsVertical } from "react-icons/bs";
import DataTableFilter from "../../components/DataTables/DataTableFilter";
import DataTable from "../../components/DataTables/DataTable";
const ProductList = () => {
  const handleActionClick = (data) => {
    // console.log("clicked++++", data);
  };
  return (
    <>
      <div className="right-content w-100">
        <Breadcrumb
          title="Product List"
          sourceName="Product"
          sourceIcon={<FaProductHunt />}
          destinationName="Product List"
        />
        <div className="col-md-12 p-0">
          <div className="dashboardBoxWrapper ProductBoxWrapper d-flex">
            <DashboardBox
              color={["rgb(29, 162, 86)", "rgb(72, 212, 131)"]}
              icon={<FaCircleUser />}
              upperTitle="Total Users"
              totalCount="277"
              lastMonth="Last Month"
              backgroundIcon={<FaChartLine />}
              actionButton={<BsThreeDotsVertical />}
              actionClick={handleActionClick}
            />
            <DashboardBox
              color={["rgb(192, 18, 226)", "rgb(235, 100, 254)"]}
              icon={<FaShoppingCart />}
              upperTitle="Total Users"
              totalCount="277"
              lastMonth="Last Month"
              backgroundIcon={<FaChartPie />}
              actionButton={<BsThreeDotsVertical />}
              actionClick={handleActionClick}
            />
            <DashboardBox
              color={["rgb(44, 120, 229)", "rgb(96, 175, 245)"]}
              icon={<IoBag />}
              upperTitle="Total Users"
              totalCount="277"
              lastMonth="Last Month"
              backgroundIcon={<IoBarChartSharp />}
              actionButton={<BsThreeDotsVertical />}
              actionClick={handleActionClick}
            />
            <DashboardBox
              color={["rgb(225, 149, 14)", "rgb(243, 205, 41)"]}
              icon={<TbStarsFilled />}
              upperTitle="Total Users"
              totalCount="277"
              lastMonth="Last Month"
              backgroundIcon={<HiMiniPresentationChartLine />}
              actionButton={<BsThreeDotsVertical />}
              actionClick={handleActionClick}
            />
          </div>
        </div>
        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>
          <DataTableFilter />
          <DataTable/>
        </div>
      </div>
    </>
  );
};

export default ProductList;
