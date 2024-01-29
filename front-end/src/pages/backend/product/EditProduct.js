import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";
import { urlImg } from "./../../../config";
import CategoryService from "../../../service/CategoryService";
import BrandService from "../../../service/BrandService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const { id } = useParams();
  // const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [detail, setDetail] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [brand_id, setBrand_id] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());

  // console.log(id)
  // console.log(props.data)
  useEffect(() => {
    (async () => {
      const result = await ProductService.getID(id);

      const result_category = await CategoryService.getList();
      setCategories(result_category.data.categories);

      const result_brand = await BrandService.getList();
      setBrands(result_brand.data.brands);
      // result la variable ,products is name table
      setName(result.data.products.name);
      setDescription(result.data.products.description);
      setSlug(result.data.products.slug);
      setBrand_id(result.data.products.brand_id);
      setCategory_id(result.data.products.category_id);
      setDetail(result.data.products.detail);
      setPrice(result.data.products.price);
      setStatus(result.data.products.status);
      setImage(result.data.products.image);
    })();
  }, [id, load]);
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
    (async () => {
      const result = await ProductService.Update(product, id);
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
      // setLoad(Date.now());
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Cập nhật Product</h1>
        <div className="text-end">
          <Link to={"/admin/product"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left" /> Về danh sách
          </Link>
        </div>
      </section>
      <ToastContainer />
      <section className="content-body my-2">
        <form onSubmit={handSubmit}>
          <div class="row">
            <div class="col-md-9">
              <div class="mb-3">
                <label>
                  <strong>Tên sản phẩm (*)</strong>
                </label>
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label>
                  <strong>Slug (*)</strong>
                </label>
                <input
                  type="text"
                  placeholder="Slug"
                  name="slug"
                  class="form-control"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label>
                  <strong>Chi tiết (*)</strong>
                </label>
                <textarea
                  name="detail"
                  placeholder="Nhập chi tiết sản phẩm"
                  rows="7"
                  class="form-control"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                ></textarea>
              </div>
              <div class="mb-3">
                <label>
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  name="description"
                  rows="3"
                  class="form-control"
                  placeholder="Nhập mô tả"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label>
                  <strong>Hình ảnh</strong>
                </label>
                <div>
                  <img
                    className="img-fluid"
                    style={{ width: 250 }}
                    src={urlImg + "product/" + image}
                    alt="product.jpg"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="box-container mt-4 bg-white">
                <div class="box-header py-1 px-2 border-bottom">
                  <strong>Đăng</strong>
                </div>
                <div class="box-body p-2 border-bottom">
                  <select
                    name="status"
                    class="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </select>
                </div>
                <div class="box-footer text-end px-2 py-2">
                  <button type="submit" class="btn btn-success btn-sm text-end">
                    <i class="fa fa-save" aria-hidden="true"></i> Cập nhật
                  </button>
                </div>
              </div>
              <div class="box-container mt-2 bg-white">
                <div class="box-header py-1 px-2 border-bottom">
                  <strong>Danh mục(*)</strong>
                </div>
                <div class="box-body p-2 border-bottom">
                  <select
                    name="category_id"
                    class="form-select"
                    value={category_id}
                    onChange={(e) => setCategory_id(e.target.value)}
                  >
                    {categories &&
                      categories.map((category, index) => {
                        if (category.id === category_id) {
                          <option>{category.name}</option>;
                        }
                        return (
                          <option value={category.id}>{category.name}</option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div class="box-container mt-2 bg-white">
                <div class="box-header py-1 px-2 border-bottom">
                  <strong>Thương hiệu(*)</strong>
                </div>
                <div class="box-body p-2 border-bottom">
                  <select
                    name="brand_id"
                    class="form-select"
                    value={brand_id}
                    onChange={(e) => setBrand_id(e.target.value)}
                  >
                    {brands &&
                      brands.map((brand, index) => {
                        if (brand.id === brand_id) {
                          <option>{brand.name}</option>;
                        }
                        return <option value={brand.id}>{brand.name}</option>;
                      })}
                  </select>
                </div>
              </div>
              <div class="box-container mt-2 bg-white">
                <div class="box-header py-1 px-2 border-bottom">
                  <strong>Giá và số lượng</strong>
                </div>
                <div class="box-body p-2 border-bottom">
                  <div class="mb-3">
                    <label>
                      <strong>Giá bán (*)</strong>
                    </label>
                    <input
                      type="number"
                      value="10000"
                      min="10000"
                      name="price"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <label>
                      <strong>Giá khuyến mãi (*)</strong>
                    </label>
                    <input
                      type="number"
                      value="10000"
                      min="10000"
                      name="pricesale"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <label>
                      <strong>Số lượng (*)</strong>
                    </label>
                    <input
                      type="number"
                      value="1"
                      min="1"
                      name="qty"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="box-container mt-2 bg-white">
                <div class="box-header py-1 px-2 border-bottom">
                  <strong>Hình đại diện(*)</strong>
                </div>
                <div class="box-body p-2 border-bottom">
                  <input type="file" id="image" class="form-control" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditProduct;
