const MainMenu = () => {
  return (
    <section className="hdl-mainmenu bg-main" style={{background: "#15e8dd"}}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-none d-md-block col-md-2 d-none d-md-block">
            <div className="dropdown list-category">
              <strong
                className="dropdown-toggle w-100"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Danh mục sản phẩm
              </strong>
              <ul className="dropdown-menu w-100">
                <li>
                  <a className="dropdown-item" href="product_category.html">
                    Thời trang nam
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="product_category.html">
                    Thời trang nữ
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="product_category.html">
                    Thời trang trẻ em
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a
                  className="navbar-brand d-block d-sm-none "
                  href="index.html"
                >
                  DIENLOISHOP
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        aria-current="page"
                        href="index.html"
                      >
                        Trang chủ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="post_page.html">
                        Giới thiệu
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Thời trang nam
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item text-main"
                            href="product_category.html"
                          >
                            Quần jean nam
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-main"
                            href="product_category.html"
                          >
                            Áo thun nam{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-main"
                            href="product_category.html"
                          >
                            Sơ mi nam
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Thời trang nữ
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item text-main"
                            href="product_category.html"
                          >
                            Váy
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-main"
                            href="product_category.html"
                          >
                            Đầm
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-main"
                            href="product_category.html"
                          >
                            Sơ mi nữ
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="post_topic.html" className="nav-link ">
                        Bài viết
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link ">
                        Liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainMenu;
