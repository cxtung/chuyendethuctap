import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BrandService from "../../../service/brandService";
import { MdSaveAlt } from "react-icons/md";
import { urlImage, urlImg } from "./../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBrand = () => {
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
      const result = await BrandService.getById(id);
      // result la variable ,brands is name table
      setName(result.data.brands.name);
      setDescription(result.data.brands.description);
      setSlug(result.data.brands.slug);
      setStatus(result.data.brands.status);
      setImage(result.data.brands.image);
      console.log(result.data.brands);
    })();
  }, [id, load]);
  const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var brand = new FormData();
    brand.append("name", name);
    brand.append("description", description);
    // brand.append("sort_order", 1);
    brand.append("status", status);
    brand.append("image", image.files.length === 0 ? "" : image.files[0]);
    console.log(brand);
    (async () => {
      const result = await BrandService.updateBrand(brand, id);
    
        // toast.success("Success Notification !", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        alert("sửa thành công")
        // toast.error("Error Notification !", {
        //   position: toast.POSITION.TOP_CENTER,
        // });

        // toast.warning("Warning Notification !", {
        //   position: toast.POSITION.TOP_LEFT,
        // });

        // toast.info("Information Notification !", {
        //   position: toast.POSITION.BOTTOM_CENTER,
        // });

        // toast("Default Notification !", {
        //   position: toast.POSITION.BOTTOM_LEFT,
        // });

        // toast("Custom Style Notification with css class!", {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        //   className: "foo-bar",
        // });
        setLoad(Date.now());
     
      // setLoad(Date.now());
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Chỉnh Sửa Brand</h1>
        <div className="text-end">
          <Link to={"/admin/brand/index"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left" /> Về danh sách
          </Link>
        </div>
      </section>
      <ToastContainer/>
      <section className="content-body my-2">
        <form onSubmit={handSubmit}>
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên thương hiệu (*)</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={slug}
                  // onChange={(e) => setSlug(e.target.value)}
                  name="slug"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả</strong>
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              <div>
                <label>
                  <strong>Hình ảnh</strong>
                </label>
                <div>
                  <img
                    className="img-fluid"
                    style={{ width: 250 }}
                    src={urlImage + "brand/" + image}
                    alt="category.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Đăng</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <p>Chọn trạng thái đăng</p>
                  <select
                    name="status"
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control"
                   
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
                    <MdSaveAlt aria-hidden="true" />
                    Đăng
                  </button>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình đại diện</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <input type="file" id="image" className="form-control" />
                </div>
              </div>
              {/* <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Thứ tự</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <select name="sort_order" className="form-control">
                    <option value>Sau</option>
                    <option value={2}>sau</option>
                  </select>
                </div>
              </div> */}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditBrand;
