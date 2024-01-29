import { Outlet,Link } from "react-router-dom";
// import '../../../public/js/backend';

// import '../../../public/bootstrap/js/bootstrap.bundle';
// import '../../../public/bootstrap/js/bootstrap';
// import '../../../public/bootstrap/js/bootstrap.esm';
import "../layout-Admin/css/backend.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toggle/style.css"
import { FaPlus, FaProductHunt } from "react-icons/fa";
const LayoutAdmin = () => {
  function handleItemClick(item) {
    const hdlitem = document.getElementById(item);
    hdlitem.classList.toggle("active");
  }
  // const handleMouseEnter = (item) => {
  //   console.log("Chuột đã di chuyển vào nút!");
  //   const hdlitem = document.getElementById(item);
  //   hdlitem.classList.toggle("active");
  //   // Thực hiện các hành động bạn muốn khi chuột di chuyển vào nút ở đây
  // };
  return (
    <>
      <div className="body">
        <section className="hdl-header sticky-top">
          <div className="container-fluid">
            <ul className="menutop">
              <li>
                <Link href>
                  <i className="fa-brands fa-dashcube" /> Shop Thời trang
                </Link>
              </li>
              <li className="text-phai">
                <Link href>
                  <i className="fa-solid fa-power-off" /> Thoát
                </Link>
              </li>
              <li className="text-phai">
                <Link href>
                  <i className="fa fa-user" aria-hidden="true" /> Chào quản lý
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="hdl-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 bg-dark p-0 hdl-left">
                <div className="hdl-left">
                  <div className="dashboard-name">Bản điều khiển</div>
                  <nav className="m-2 mainmenu">
                    <ul className="main">
                      <li
                        className="hdlitem item-sub"
                        id="item1"
                        onClick={() => handleItemClick("item1")}
                      >
                        {/* <FaPlus className=" icon-right" /> */}
                        {/* <i className="icon-left" /> */}
                        <i className="fa-brands fa-product-hunt icon-left" />
                        <Link href="#">Quản lý</Link>
                        <i className="fa-solid fa-plus icon-right" />
                        {/* <IoMdArrowDropdown /> */}
                        <ul className="submenu">
                          <li>
                            <a href="/admin/brand">Tất cả thương hiệu</a>
                          </li>
                          <li>
                            <a href="/admin/category">Tất cả loại sản phẩm</a>
                            {/* <FaPlus className="icon-left" /> */}
                          </li>
                          <li>
                            <a href="/admin/product">Tất cả sản phẩm</a>
                          </li>
                          <li>
                            <a href="/admin/contact">Liên hệ</a>
                          </li>
                          <li>
                            <a href="/admin/productsale">Khuyễn mãi</a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="hdlitem item-sub"
                        id="item2"
                        onClick={() => handleItemClick("item2")}
                      >
                        <i className="fa-brands fa-product-hunt icon-left" />
                        <Link href="#">Bài viết</Link>
                        <i className="fa-solid fa-plus icon-right" />
                        <ul className="submenu">
                          <li>
                            <Link to="/admin/post">Tất cả bài viết</Link>
                          </li>
                          <li>
                            <Link to="/admin/topic">Chủ đề</Link>
                          </li>
                          <li>
                            <Link href="page_index.html">Trang đơn</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="hdlitem item-sub"
                        id="item3"
                        onClick={() => handleItemClick("item3")}
                      >
                        <i className="fa-brands fa-product-hunt icon-left" />
                        <Link href="#">Quản lý bán hàng</Link>
                        <i className="fa-solid fa-plus icon-right" />
                        <ul className="submenu">
                          <li>
                            <Link to={"/admin/productstore"}>Quản lý nhập hàng</Link>
                          </li>
                         
                          <li>
                            <Link href="order_export.html">Xuất hàng</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="hdlitem item-sub"
                        id="item4"
                        onClick={() => handleItemClick("item4")}
                      >
                        <i className="fa-brands fa-product-hunt icon-left" />
                        <Link href="#">Giao diện</Link>
                        <i className="fa-solid fa-plus icon-right" />
                        <ul className="submenu">
                          <li>
                            <Link to="/admin/menu">Menu</Link>
                          </li>
                          <li>
                            <Link to="/admin/banner">Banner</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="hdlitem item-sub"
                        id="item5"
                        onClick={() => handleItemClick("item5")}
                      >
                        <i className="fa-brands fa-product-hunt icon-left" />
                        <Link href="#">Hệ thống</Link>
                        <i className="fa-solid fa-plus icon-right" />
                        <ul className="submenu">
                          <li>
                            <Link to="/admin/user">Khách hàng</Link>
                          </li>
                          <li>
                            <Link to="/admin/customer">Thành viên</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-10">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LayoutAdmin;
