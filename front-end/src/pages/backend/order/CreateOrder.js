import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CategoryService from "../../../service/CategoryService";

const CreateCategory = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
    const [load, setLoad] = useState(Date.now());
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(1);
    const [sort_order,setSort_Order]=useState(1);
    const [parent_Id, setParent_Id] = useState(1);
  
const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var category = new FormData();
    category.append("name", name);
    category.append("description", description);
    category.append("status", status);
    category.append("sort_order",sort_order);
    category.append("parent_id",parent_Id)
    category.append("image", image.files.length === 0 ? "" : image.files[0]);
    console.log(category);
    (async () => {
      const result = await CategoryService.Store(category);
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
      }
    )();
  };

    return ( 
        <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Tạo Thương Hiệu</h1>
        <ToastContainer/>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <Link to="/admin/category" className="btn btn-primary btn-sm">
            <i className="fa fa-arrow-left" /> Về danh sách
            </Link>
          </div>
        </div>
      </section>
      <section className="content-body my-2">
      <div className="col-md-12">
            <form onSubmit={handSubmit}>
              <div className="mb-3">
                <label>
                  <strong>Tên loại sản phẩm (*)</strong>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nhập tên danh mục"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả</strong>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="form-control"
                  placeholder="Mô tả"
                  defaultValue={""}
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Sort Order</strong>
                </label>
                <textarea
                  value={sort_order}
                  onChange={(e) => setSort_Order(e.target.value)}
                  className="form-control"
                  placeholder="Sort order"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Parent Id</strong>
                </label>
                <textarea
                  value={parent_Id}
                  onChange={(e) => setParent_Id(e.target.value)}
                  className="form-control"
                  placeholder="Parent id"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Hình đại diện</strong>
                </label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  name="status"
                  className="form-control"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={1}>Xuất bản</option>
                  <option value={2}>Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button type="submit" className="btn btn-success" name="THEM">
                  <i className="fa fa-save" /> Lưu[Thêm]
                </button>
              </div>
            {/* <CreateCategory/> */}
            </form>
          </div>
      </section>
    </div>
        
     );
};
 
export default CreateCategory;