import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryService from "../../../service/CategoryService";
import { MdSaveAlt } from "react-icons/md";
import { urlImage } from "../../../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCategory = () => {
  const { id } = useParams();
  // const [categorys, setCategorys] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [parent_id,setParent_id]=useState("");
  const [sort_order,setSort_order]=useState("");

  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());

  // console.log(id)
  // console.log(props.data)
  useEffect(() => {
    (async () => {
      const result = await CategoryService.getID(id);
      // result la variable ,categorys is name table
      setName(result.data.category.name);
      setDescription(result.data.category.description);
      setSlug(result.data.category.slug);
      setStatus(result.data.category.status);
      setImage(result.data.category.image);
      setSort_order(result.data.category.sort_order);
      setParent_id(result.data.category.parent_id);

      console.log(result.data.category)
    })();
  }, [id, load]);
  const handSubmit = async (event) => {
    event.preventDefault();
    var imageid = document.getElementById("image");
    var category = new FormData();
    category.append("name", name);
    category.append("description", description);
    category.append("sort_order", 1);
    category.append("parent_id", 1);
    category.append("status", status);
    console.log(`image:${image}`);
    category.append("image", imageid.files.length === 0 ? "": imageid.files[0]);
    console.log(category);
    (async () => {
      const result = await CategoryService.Update(category, id);
      if (result.data.status === true) {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // alert("Cập nhật thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
      // setLoad(Date.now());
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Chỉnh Sửa Category</h1>
        <div className="text-end">
          <Link to={"/admin/category"} className="btn btn-sm btn-success">
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
                  <strong>Parent_Id</strong>
                </label>

                <input
                  type="text"
                  value={parent_id}
                  onChange={(e) => setParent_id(e.target.value)}
                  name="parent_id"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Sort_Order</strong>
                </label>

                <input
                  type="text"
                  value={sort_order}
                  onChange={(e) => setSort_order(e.target.value)}
                  name="sort_order"
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
                    src={urlImage + "category/" + image}
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
                    className="form-control"
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
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Thứ tự</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                <select name="sort_order" className="form-control">
                    <option value>Sau</option>
                    <option value={2}>sau</option>
                  </select>
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