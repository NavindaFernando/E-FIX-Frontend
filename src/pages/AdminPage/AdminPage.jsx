import React, { useEffect, useRef, useState } from "react";
import webIcon from "../../assets/images/card_two_img.jpg";
import "./admin.css";
import MenuItem from "../../components/MenuItem/MenuItem";
import Insight from "../../components/Insight/Insight";
import SendIcon from "@mui/icons-material/Send";
import Axios from "axios";
import {Button,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,Stack,} from "@mui/material";

function AdminPage() {
  // --------------- start api integration ---------------

  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productImage, setProductMainImage] = useState("");
  const [productSubImageOne, setProductSubImageOne] = useState("");
  const [productSubImageTwo, setProductSubImageTwo] = useState("");
  const [productSubImageThree, setProductSubImageThree] = useState("");
  const [productSubImageFour, setProductSubImageFour] = useState("");

  const [products, setProducts] = useState([0]);
  const [productSubmitted, setProductSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // load all products
  useEffect(() => {
    getProducts();
  }, []);

  // get products
  const getProducts = () => {
    Axios.get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data.response || []);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  // create products
  const addProduct = (data) => {
    setProductSubmitted(true);

    const payload = {
      productId: data.productId,
      productName: data.productName,
      productPrice: data.productPrice,
      productDescription: data.productDescription,
      productColor: data.productColor,
      productQty: data.productQty,
      productSize: data.productSize,
      productImage: data.productImage,
    };

    Axios.post("http://localhost:3001/api/createproduct", payload)
      .then(() => {
        getProducts();
        setProductSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  // clear form
  useEffect(() => {
    if (!productSubmitted) {
      setProductId(0);
      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setProductColor("");
      setProductQty("");
      setProductSize("");
      setProductMainImage("");
    }
  }, [productSubmitted]);

  // delete products
  const deleteProduct = (data) => {
    Axios.post("http://localhost:3001/api/deleteproduct", data)
      .then(() => {
        getProducts();
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  // selected row to the form
  const populateForm = (product) => {
    setIsEdit(true);
    setProductId(product.productId);
    setProductName(product.productName);
    setProductPrice(product.productPrice);
    setProductDescription(product.productDescription);
    setProductColor(product.productColor);
    setProductQty(product.productQty);
    setProductSize(product.productSize);
    setProductImage(product.productImage);
    setProductSubImageOne(product.productSubImageOne);
    setProductSubImageTwo(product.productSubImageTwo);
    setProductSubImageThree(product.productSubImageThree);
    setProductSubImageFour(product.productSubImageFour);
  };

  // updated product
  const updateProduct = (data) => {
    const payload = {
      productId: data.productId,
      productName: data.productName,
      productPrice: data.productPrice,
      productDescription: data.productDescription,
      productColor: data.productColor,
      productQty: data.productQty,
      productSize: data.productSize,
      productImage: data.productImage,
      productSubImageOne: data.productSubImageOne,
      productSubImageTwo: data.productSubImageTwo,
      productSubImageThree: data.productSubImageThree,
      productSubImageFour: data.productSubImageFour,
    };

    Axios.post("http://localhost:3001/api/updateproduct", payload)
      .then(() => {
        getProducts();
        setProductSubmitted(false);
        setIsEdit(false);
        clearForm();
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  // clear form data
  const clearForm = () => {
    setProductId(0);
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductColor("");
    setProductQty("");
    setProductSize("");
    setProductImage("");
    setProductSubImageOne("");
    setProductSubImageTwo("");
    setProductSubImageThree("");
    setProductSubImageFour("");
  };

  // --------------- end api integration ---------------

  // --------------- start admin ui handling ---------------
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const sideBarRef = useRef(null);
  const menuBarRef = useRef(null);
  const searchBtnRef = useRef(null);
  const searchFormRef = useRef(null);
  const searchBtnIconRef = useRef(null);
  const togglerRef = useRef(null);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleSidebarToggle = () => {
    if (sideBarRef.current) {
      sideBarRef.current.classList.toggle("close");
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

    window.addEventListener("resize", handleResize);
  }, []);

  // --------------- end admin ui handling ---------------

  return (
    <div className="admin_body">
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
                onClick={() => {}}
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

            {/* Genarate report */}
            <a className="chooser">
              <i className="bx bx-reset"></i>
              {/* <span id="btn_service">Services</span> */}
              <span className="cursor-pointer">Dowload PDF</span>
            </a>
          </div>

          {/* insights */}
          <ul className="insights">
            <Insight
              iconClass="bx bx-show-alt"
              title="3,944"
              description="Site Visit"
              insightid="visitorCount"
            />
            <Insight
              iconClass="bx bx-line-chart"
              title="8,721"
              description="SearchCount"
              insightid="searchCount"
            />
            <Insight
              iconClass="bx bx-calendar-check"
              title="10"
              description="Products"
              insightid="number_of_product"
            />
            <Insight
              iconClass="bx bx-dollar-circle"
              title="24"
              description="UserCount"
              insightid="number_of_services"
            />
          </ul>

          {/* tables & inputs section */}
          <div className="bottom-data">
            <div className="tables">
              <div className="header">
                <i className="bx bx-receipt"></i>
                <h3 id="product_topic">Product Details</h3>
              </div>

              {/* product table */}
              {/* <TableContainer component={Paper}> */}
              <TableContainer>
                <Table id="product_table">
                  <TableHead className="product_table_head">
                    <TableRow>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Id
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Description
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Color
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        QTY
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Size
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Image
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Action
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "gray",
                        }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="product_table_body">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <TableRow
                          key={product.productId}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "#ff5252" }}
                          >
                            {product.productId}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "#53545c" }}
                          >
                            {product.productName}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "green" }}
                          >
                            {product.productPrice}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "#53545c" }}
                          >
                            {product.productDescription}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "#53545c" }}
                          >
                            {product.productColor}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "#007ac0" }}
                          >
                            {product.productQty}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "#53545c" }}
                          >
                            {product.productSize}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="product"
                            sx={{ color: "#53545c" }}
                          >
                            {product.productImage}
                          </TableCell>
                          <TableCell>
                            <Button
                              sx={{ margin: "0px 10px" }}
                              onClick={() => populateForm(product)}
                            >
                              Update
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              sx={{ margin: "0px 10px", color: "#ff5252" }}
                              onClick={() =>
                                deleteProduct(
                                  window.confirm("Are you sure?") &&
                                    deleteProduct({
                                      productId: product.productId,
                                    })
                                )
                              }
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="product">
                          No data
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            {/* <!-- inputs section --> */}
            <div className="inputs">
              <div className="header">
                <i className="bx bx-note"></i>
                <h3 id="add_product_topic">Add Products</h3>
              </div>
              <ul className="input-list">
                {/* <!-- product form --> */}
                <Stack spacing={2}>
                  <TextField
                    type="number"
                    id="txt_product_id"
                    name="id"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    label="Product id"
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="text"
                    id="txt_product_name"
                    name="id"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    label="Product name"
                    variant="outlined"
                    sx={{ color: "#53545c" }}
                    className="w-full"
                  />

                  <TextField
                    type="text"
                    id="txt_product_price"
                    name="id"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    label="Product price"
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="text"
                    id="txt_product_description"
                    name="id"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    label="Product description"
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="text"
                    id="txt_product_colors"
                    name="id"
                    value={productColor}
                    onChange={(e) => setProductColor(e.target.value)}
                    label="Product colors"
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="text"
                    id="txt_product_qty"
                    name="id"
                    value={productQty}
                    onChange={(e) => setProductQty(e.target.value)}
                    label="Product qty"
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="text"
                    id="txt_product_size"
                    name="id"
                    value={productSize}
                    onChange={(e) => setProductSize(e.target.value)}
                    label="Product size"
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="file"
                    id="txt_product_main_image"
                    name="id"
                    value={productImage}
                    onChange={(e) => setProductMainImage(e.target.value)}
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="file"
                    id="txt_product_sub_image_one"
                    name="id"
                    value={productSubImageOne}
                    onChange={(e) => setProductSubImageOne(e.target.value)}
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="file"
                    id="txt_product_sub_image_two"
                    name="id"
                    value={productSubImageTwo}
                    onChange={(e) => setProductSubImageTwo(e.target.value)}
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="file"
                    id="txt_product_sub_image_three"
                    name="id"
                    value={productSubImageThree}
                    onChange={(e) => setProductSubImageThree(e.target.value)}
                    variant="outlined"
                    className="w-full"
                  />

                  <TextField
                    type="file"
                    id="txt_product_sub_image_four"
                    name="id"
                    value={productSubImageFour}
                    onChange={(e) => setProductSubImageFour(e.target.value)}
                    variant="outlined"
                    className="w-full"
                  />

                  {/* update form button */}
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    className="h-[50px]"
                    onClick={() =>
                      isEdit
                        ? updateProduct({
                            productId,
                            productName,
                            productPrice,
                            productDescription,
                            productColor,
                            productQty,
                            productSize,
                            productImage,
                          })
                        : addProduct({
                            productId,
                            productName,
                            productPrice,
                            productDescription,
                            productColor,
                            productQty,
                            productSize,
                            productImage,
                          })
                    }
                  >
                    {isEdit ? "Update Product" : "Add Product"}
                  </Button>
                </Stack>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
