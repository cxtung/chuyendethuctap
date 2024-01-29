import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import BrandService from "../../../service/brandService";
import { MdSaveAlt } from "react-icons/md";
import { urlImage, urlImg } from "./../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryService from "../../../service/CategoryService";

const EditCategory = () => {
  const { id } = useParams();
  // const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());

  // console.log(id)
  // console.log(props.data)
  useEffect(() => {
    (async () => {
      const result = await CategoryService.getById(id);
      // result la variable ,brands is name table
      setName(result.data.categories.name);
      setDescription(result.data.categories.description);
      setSlug(result.data.categories.slug);
      setStatus(result.data.categories.status);
      setImage(result.data.categories.image);
    })();
  }, [id, load]);
  const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var category = new FormData();
    category.append("name", name);
    category.append("description", description);
    // brand.append("sort_order", 1);
    category.append("status", status);
    category.append("image", image.files.length === 0 ? "" : image.files[0]);
    console.log(category);
    (async () => {
      const result = await CategoryService.updateCategory(category, id);
    
     
        alert("sửa thành công")
     
        setLoad(Date.now());
     
      
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Cập nhật danh mục</h1>
        <div className="text-end">
          <Link to={"/admin/category/index"}>Về danh sách</Link>
        </div>
      </section>
      <section className="content-body my-2">
        <form onSubmit={handSubmit}>
        <div className="row">
          <div className="col-md-9">
            <div className="mb-3">
              <label>
                <strong>Tên danh mục (*)</strong>
              </label>
              <input
              type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                 
                id="name"
                placeholder="Nhập tên danh mục"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Slug</strong>
              </label>
              <input
                type="text"
                name="slug"
                value={slug}
                onChange={(e)=>setSlug(e.target.value)}
                id="slug"
                placeholder="Nhập slug"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Mô tả</strong>
              </label>
              <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
                name="description"
                rows={7}
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
                <p>Chọn trạng thái đăng</p>
                <select name="status" className="form-control"
                  value={status} 
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={1}>Xuất bản</option>
                  <option value={2}>Chưa xuất bản</option>
                </select>
              </div>
              <div className="box-footer text-end px-2 py-3">
                <button
                  type="submit"
                  className="btn btn-success btn-sm text-end"
                >
                  <i className="fa fa-save" aria-hidden="true" /> Câp nhật
                </button>
              </div>
            </div>
          
       
            <div className="box-container mt-4 bg-white">
              <div className="box-header py-1 px-2 border-bottom">
                <strong>Hình (*)</strong>
              </div>
              <div className="box-body p-2 border-bottom">
                  <input type="file" id="image" className="form-control" />
                </div>
            </div>
          </div>
        </div>
        </form>
      </section>
    </div>
  );
};

export default EditCategory;
