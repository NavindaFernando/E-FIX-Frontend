import React, { useEffect, useRef, useState } from "react";
import webIcon from "../../assets/images/card_two_img.jpg";
import "./admin.css";
import MenuItem from "../../components/MenuItem/MenuItem";

function AdminPage() {
  const sideBarRef = useRef(null);
  const menuBarRef = useRef(null);
  const searchBtnRef = useRef(null);
  const searchFormRef = useRef(null);
  const searchBtnIconRef = useRef(null);
  const togglerRef = useRef(null);

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleSidebarToggle = () => {
    if (sideBarRef.current) {
      sideBarRef.current.classList.toggle("close");
    }
  };

  const handleSearchToggle = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      if (searchFormRef.current) {
        searchFormRef.current.classList.toggle("show");
        if (searchFormRef.current.classList.contains("show")) {
          searchBtnIconRef.current.classList.replace("bx-search", "bx-x");
        } else {
          searchBtnIconRef.current.classList.replace("bx-x", "bx-search");
        }
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768 && sideBarRef.current) {
      sideBarRef.current.classList.add("close");
    } else if (sideBarRef.current) {
      sideBarRef.current.classList.remove("close");
    }
    if (window.innerWidth > 576 && searchFormRef.current) {
      searchBtnIconRef.current.classList.replace("bx-x", "bx-search");
      searchFormRef.current.classList.remove("show");
    }
  };

  const handleThemeToggle = () => {
    if (togglerRef.current.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const updateVisitorCount = () => {
      let count = localStorage.getItem("visitorCount");
      if (count === null) {
        localStorage.setItem("visitorCount", 1);
      } else {
        count = parseInt(count, 10) + 1;
        localStorage.setItem("visitorCount", count);
      }
      document.getElementById("visitorCount").innerText =
        localStorage.getItem("visitorCount");
    };

    updateVisitorCount();

    const handleServiceDisplay = () => {
      document.getElementById("product_topic").style.display = "none";
      document.getElementById("btn_get_all_product").style.display = "none";
      document.getElementById("btn_delete_product").style.display = "none";
      document.getElementById("btn_search_product").style.display = "none";
      document.getElementById("btn_service").style.display = "none";
      document.getElementById("product_table").style.display = "none";
      document.getElementById("txt_product_id").style.display = "none";
      document.getElementById("txt_product_name").style.display = "none";
      document.getElementById("txt_product_price").style.display = "none";
      document.getElementById("txt_product_description").style.display = "none";
      document.getElementById("txt_product_colors").style.display = "none";
      document.getElementById("txt_product_qty").style.display = "none";
      document.getElementById("txt_product_size").style.display = "none";
      document.getElementById("txt_product_main_image").style.display = "none";
      document.getElementById("txt_product_sub_image_one").style.display =
        "none";
      document.getElementById("txt_product_sub_image_two").style.display =
        "none";
      document.getElementById("txt_product_sub_image_three").style.display =
        "none";
      document.getElementById("txt_product_sub_image_four").style.display =
        "none";

      document.getElementById("add_product_topic").style.display = "none";
      document.getElementById("btn_update_product").style.display = "none";
      document.getElementById("btn_add_product").style.display = "none";

      document.getElementById("services_topic").style.display = "block";
      document.getElementById("btn_get_all_services").style.display = "block";
      document.getElementById("btn_delete_services").style.display = "block";
      document.getElementById("btn_search_services").style.display = "block";
      document.getElementById("btn_product").style.display = "block";
      document.getElementById("service_table").style.display = "block";
      document.getElementById("txt_service_id").style.display = "block";
      document.getElementById("txt_service_image").style.display = "block";
      document.getElementById("txt_service_topic").style.display = "block";
      document.getElementById("txt_service_description").style.display =
        "block";
      document.getElementById("service_topic").style.display = "block";
      document.getElementById("btn_update_service").style.display = "block";
      document.getElementById("btn_add_service").style.display = "block";
    };

    const handleProductDisplay = () => {
      document.getElementById("services_topic").style.display = "none";
      document.getElementById("btn_get_all_services").style.display = "none";
      document.getElementById("btn_delete_services").style.display = "none";
      document.getElementById("btn_search_services").style.display = "none";
      document.getElementById("btn_product").style.display = "none";
      document.getElementById("service_table").style.display = "none";
      document.getElementById("txt_service_id").style.display = "none";
      document.getElementById("txt_service_image").style.display = "none";
      document.getElementById("txt_service_topic").style.display = "none";
      document.getElementById("txt_service_description").style.display = "none";
      document.getElementById("service_topic").style.display = "none";
      document.getElementById("btn_update_service").style.display = "none";
      document.getElementById("btn_add_service").style.display = "none";

      document.getElementById("product_topic").style.display = "block";
      document.getElementById("btn_get_all_product").style.display = "block";
      document.getElementById("btn_delete_product").style.display = "block";
      document.getElementById("btn_search_product").style.display = "block";
      document.getElementById("btn_service").style.display = "block";
      document.getElementById("product_table").style.display = "block";
      document.getElementById("txt_product_id").style.display = "block";
      document.getElementById("txt_product_name").style.display = "block";
      document.getElementById("txt_product_price").style.display = "block";
      document.getElementById("txt_product_description").style.display =
        "block";
      document.getElementById("txt_product_colors").style.display = "block";
      document.getElementById("txt_product_qty").style.display = "block";
      document.getElementById("txt_product_size").style.display = "block";
      document.getElementById("txt_product_main_image").style.display = "block";
      document.getElementById("txt_product_sub_image_one").style.display =
        "block";
      document.getElementById("txt_product_sub_image_two").style.display =
        "block";
      document.getElementById("txt_product_sub_image_three").style.display =
        "block";
      document.getElementById("txt_product_sub_image_four").style.display =
        "block";

      document.getElementById("add_product_topic").style.display = "block";
      document.getElementById("btn_update_product").style.display = "block";
      document.getElementById("btn_add_product").style.display = "block";
    };

    document
      .getElementById("btn_service")
      .addEventListener("click", handleServiceDisplay);
    document
      .getElementById("btn_product")
      .addEventListener("click", handleProductDisplay);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document
        .getElementById("btn_service")
        .removeEventListener("click", handleServiceDisplay);
      document
        .getElementById("btn_product")
        .removeEventListener("click", handleProductDisplay);
    };
  }, []);

  return (
    <body className="admin_body">
      {/* sidebar */}
      <div className="sidebar" ref={sideBarRef}>
        <a href="#" className="logo">
          {" "}
        </a>
        <ul className="side-menu">
          <MenuItem
            activeMenu={activeMenu}
            menuName="Dashboard"
            handleMenuClick={handleMenuClick}
            iconClass="bx bxs-dashboard"
            label="Dashboard"
          />

          <MenuItem
            activeMenu={activeMenu}
            menuName="Products"
            handleMenuClick={handleMenuClick}
            iconClass="bx bx-store-alt"
            label="Products"
          />

          <MenuItem
            activeMenu={activeMenu}
            menuName="Analytics"
            handleMenuClick={handleMenuClick}
            iconClass="bx bx-analyse"
            label="Analytics"
          />

          <MenuItem
            activeMenu={activeMenu}
            menuName="Tickets"
            handleMenuClick={handleMenuClick}
            iconClass="bx bx-message-square-dots"
            label="Messages"
          />

          <MenuItem
            activeMenu={activeMenu}
            menuName="Users"
            handleMenuClick={handleMenuClick}
            iconClass="bx bx-group"
            label="Users"
          />

          <MenuItem
            activeMenu={activeMenu}
            menuName="Settings"
            handleMenuClick={handleMenuClick}
            iconClass="bx bx-cog"
            label="Settings"
          />
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#" className="logout">
              <i className="bx bx-log-out-circle"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        {/* navbar */}
        <nav>
          <i
            className="bx bx-menu"
            ref={menuBarRef}
            onClick={handleSidebarToggle}
          ></i>
          <form action="#">
            <div className="form-input" ref={searchFormRef}>
              <input
                id="#txt_tbl_service_search"
                type="search"
                placeholder="Search..."
              />
              <button
                className="search-btn"
                type="button"
                ref={searchBtnRef}
                onClick={handleSearchToggle}
              >
                <i className="bx bx-search" ref={searchBtnIconRef}></i>
              </button>
            </div>
          </form>
          <input
            type="checkbox"
            id="theme-toggle"
            hidden
            ref={togglerRef}
            onChange={handleThemeToggle}
          />
          <label htmlFor="theme-toggle" className="theme-toggle"></label>
          <a href="#" className="notif">
            <i className="bx bx-bell"></i>
            <span className="count">2</span>
          </a>
          <a href="#" className="profile">
            <img src={webIcon} alt="Profile Icon" />
          </a>
        </nav>

        {/* main content */}
        <main>
          {/* header */}
          <div className="header">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#"> Dashboard </a>
                </li>
                /
                <li>
                  <a href="#" className="active">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>

            {/* Choose Products or Services */}
            <a className="chooser">
              <i className="bx bx-reset"></i>
              <span id="btn_service">Services</span>
              <span id="btn_product">Products</span>
            </a>
          </div>

          {/* insights */}
          <ul className="insights">
            <li>
              <i className="bx bx-show-alt"></i>
              <span className="info">
                <h3 id="visitorCount">3,944</h3>
                <p>Site Visit</p>
              </span>
            </li>

            <li>
              <i className="bx bx-line-chart"></i>
              <span className="info">
                <h3 id="searchCount">8,721</h3>
                <p>Searches</p>
              </span>
            </li>
            
            <li>
              <i className="bx bx-calendar-check"></i>
              <span className="info">
                <h3 id="number_of_product">10</h3>
                <p>Products</p>
              </span>
            </li>

            <li>
              <i className="bx bx-dollar-circle"></i>
              <span className="info">
                <h3 id="number_of_services">24</h3>
                <p>Services</p>
              </span>
            </li>
          </ul>

          {/* <!-- tables & inputs section --> */}
          <div className="bottom-data">
            <div className="tables">
              <div className="header">
                <i className="bx bx-receipt"></i>
                {/* <!-- products crud --> */}
                <h3 id="product_topic">Products</h3>
                <i id="btn_get_all_product" className="bx bx-loader-circle"></i>
                <i
                  id="btn_delete_product"
                  className="bx bx-message-rounded-minus"
                ></i>
                <i id="btn_search_product" className="bx bx-search"></i>

                {/* <!-- services crud --> */}
                <h3 id="services_topic">Services</h3>
                <i
                  id="btn_get_all_services"
                  className="bx bx-loader-circle"
                ></i>
                <i id="btn_delete_services" className="bx bx-x"></i>
                <i id="btn_search_services" className="bx bx-search"></i>
              </div>
              {/* <!-- product table --> */}
              <table id="product_table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Color</th>
                    <th>QTY</th>
                    <th>Size</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody id="tbl_product_body">
                  <tr>
                    <td>P001</td>
                    <td>Hand bag</td>
                    <td>13$</td>
                    <td>Lorem ipsum dolor sit amet...</td>
                    <td>red green</td>
                    <td>50</td>
                    <td>M XXL</td>
                    <td>Image</td>
                  </tr>
                  <tr>
                    <td>P002</td>
                    <td>Hand Purse</td>
                    <td>12$</td>
                    <td>Lorem ipsum dolor sit amet...</td>
                    <td>red green</td>
                    <td>50</td>
                    <td>M XXL</td>
                    <td>Image</td>
                  </tr>
                  <tr>
                    <td>P003</td>
                    <td>Watch</td>
                    <td>15$</td>
                    <td>Lorem ipsum dolor sit amet...</td>
                    <td>red green</td>
                    <td>50</td>
                    <td>M XXL</td>
                    <td>Image</td>
                  </tr>
                </tbody>
              </table>

              {/* <!-- services table --> */}
              <table id="service_table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Topic</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody id="tbl_service_body">
                  <tr>
                    <td>S001</td>
                    <td>Image</td>
                    <td>Service 01</td>
                    <td>Amma care service, a dedicated NDIS service...</td>
                  </tr>
                  <tr>
                    <td>S002</td>
                    <td>Image</td>
                    <td>Service 02</td>
                    <td>Amma care service, a dedicated NDIS service...</td>
                  </tr>
                  <tr>
                    <td>S003</td>
                    <td>Image</td>
                    <td>Service 03</td>
                    <td>Amma care service, a dedicated NDIS service...</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- inputs section --> */}
            <div className="inputs">
              <div className="header">
                <i className="bx bx-note"></i>
                {/* <!-- product options --> */}
                <h3 id="add_product_topic">Add Products</h3>
                <i
                  id="btn_update_product"
                  className="bx bx-message-rounded-add"
                ></i>
                <i id="btn_add_product" className="bx bx-plus"></i>

                {/* <!-- service options --> */}
                <h3 id="service_topic">Add Services</h3>
                <i
                  id="btn_update_service"
                  className="bx bx-message-rounded-add"
                ></i>
                <i id="btn_add_service" className="bx bx-plus"></i>
              </div>
              <ul className="input-list">
                {/* <!-- product inputs --> */}
                <input
                  id="txt_product_id"
                  type="text"
                  placeholder="Product id"
                />
                <input
                  id="txt_product_name"
                  type="text"
                  placeholder="Product name"
                />
                <input
                  id="txt_product_price"
                  type="text"
                  placeholder="Product price"
                />
                <input
                  id="txt_product_description"
                  type="text"
                  placeholder="Product description"
                />
                <input
                  id="txt_product_colors"
                  type="text"
                  placeholder="Product colors"
                />
                <input
                  id="txt_product_qty"
                  type="text"
                  placeholder="Product qty"
                />
                <input
                  id="txt_product_size"
                  type="text"
                  placeholder="Product size"
                />
                <input
                  id="txt_product_main_image"
                  type="file"
                  placeholder="Product main image"
                  className="pt-2"
                />
                <input
                  id="txt_product_sub_image_one"
                  type="file"
                  placeholder="Product sub image 01"
                  className="pt-2"
                />
                <input
                  id="txt_product_sub_image_two"
                  type="file"
                  placeholder="Product sub image 02"
                  className="pt-2"
                />
                <input
                  id="txt_product_sub_image_three"
                  type="file"
                  placeholder="Product sub image 03"
                  className="pt-2"
                />
                <input
                  id="txt_product_sub_image_four"
                  type="file"
                  placeholder="Product sub image 04"
                  className="pt-2"
                />

                {/* <!-- service inputs --> */}
                <input
                  id="txt_service_id"
                  type="text"
                  placeholder="Service id"
                />
                <input
                  id="txt_service_image"
                  type="file"
                  placeholder="Service id"
                  className="pt-2 hidden"
                />
                <input
                  id="txt_service_topic"
                  type="text"
                  placeholder="Service topic"
                />
                <input
                  id="txt_service_description"
                  type="text"
                  placeholder="Service description"
                />
              </ul>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default AdminPage;
