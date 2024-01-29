import { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";
import { Link } from "react-router-dom";
import CategoryService from "../../../service/CategoryService";
import BrandService from "../../../service/brandService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [price, setPrice] = useState("");
  const [price_cost, setPrice_cost] = useState("");
  const [pty, setPty] = useState("");
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());

  //call API into productservice
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      setProducts(result.data.products);
      const result_category = await CategoryService.getList();
      setCategories(result_category.data.categories);

      const result_brand = await BrandService.getList();
      setBrands(result_brand.data.brands);

      // result la variable ,products is name table
    })();
  }, [load]);
  const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var product = new FormData();
    product.append("category_id", category_id);
    product.append("brand_id", brand_id);
    product.append("name", name);
    product.append("detail", detail);
    product.append("description", description);
    product.append("price", price);
    product.append("status", status);
    product.append("image", image.files.length === 0 ? "" : image.files[0]);

    // var productstore = new FormData();
    // // productstore.append("product_id", product_id);
    // productstore.append("name", name);
    // productstore.append("detail", detail);
    // productstore.append("description", description);
    // productstore.append("price", price);
    // productstore.append("status", status);
    // productstore.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await ProductService.postProduct(product);

      if (result.data.status === true) {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoad(Date.now());
      } else {
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    })();
  };
  return (
    <form onSubmit={handSubmit}>
      <ToastContainer />
      <div className="content">
        <section className="content-header my-2">
          <h1 className="d-inline">Thêm sản phẩm</h1>
          <div className="mt-1 text-end">
            <Link className="btn btn-sm btn-primary" to={"/admin/product"}>
              <i className="fa fa-arrow-left" /> Về danh sách
            </Link>
          </div>
        </section>
        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên sản phẩm (*)</strong>
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên sản phẩm"
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Chi tiết (*)</strong>
                </label>
                <textarea
                  name="detail"
                  onChange={(e) => setDetail(e.target.value)}
                  placeholder="Nhập chi tiết sản phẩm"
                  rows={7}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="form-control"
                  placeholder="Nhập mô tả"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Đăng</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    name="status"
                    className="form-select"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value={1}>Xuất bản</option>
                    <option value={2}>Chưa xuất bản</option>
                  </select>
                </div>
                <div className="box-footer text-end px-2 py-2">
                  <button
                    type="submit"
                    className="btn btn-success btn-sm text-end"
                  >
                    <i className="fa fa-save" aria-hidden="true" /> Đăng
                  </button>
                </div>
              </div>

              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Danh mục(*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    name="category_id"
                    className="form-select"
                    onChange={(e) => setCategory_id(e.target.value)}
                  >
                    <option value>Chọn danh mục</option>
                    {categories &&
                      categories.map((category, index) => {
                        return (
                          <option value={category.id}>{category.name}</option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Thương hiệu(*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select
                    name="brand_id"
                    className="form-select"
                    onChange={(e) => setBrand_id(e.target.value)}
                  >
                    <option value>Chọn thương hiêu</option>
                    {brands &&
                      brands.map((brand, index) => {
                        return <option value={brand.id}>{brand.name}</option>;
                      })}
                  </select>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Giá và số lượng</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <div className="mb-3">
                    <label>
                      <strong>Giá Gốc (*)</strong>
                    </label>
                    <input
                      type="number"
                      defaultValue={10000}
                      min={10000}
                      name="price"
                      className="form-control"
                      onChange={(e) => setPrice_cost(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Giá bán (*)</strong>
                    </label>
                    <input
                      type="number"
                      defaultValue={10000}
                      min={10000}
                      name="price"
                      className="form-control"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>
                      <strong>Số lượng (*)</strong>
                    </label>
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      name="qty"
                      className="form-control"
                      onChange={(e) => setPty(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình đại diện(*)</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <input type="file" id="image" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};

export default CreateProduct;
