import { useEffect, useState } from "react";
import CategoryService from "../../../service/CategoryService";
import { urlImage } from "../../../config";
import { TbReload } from "react-icons/tb";
import {  FaTrash} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';


const TrashCategory = () => {
  const [categories, setCategories] = useState([]);
    const [load, setLoad] = useState(Date.now());
    const [status, setStatus] = useState(1);
  //call API into categorieservice
  useEffect(() => {
    (async () => {
      const result = await CategoryService.getList();
      // result la variable ,categories is name table
      setCategories(result.data.category);
      console.log(result)
    })();
  }, [load]);
  const handleDelete = (id) => {
    (async () => {
        const result = await CategoryService.Delete(id);
        if (result.data.status === true) {
          toast.success("Đã xóa thành công.", {
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
  const handleStatus = (id) => {
    setStatus(1);
    console.log(status);
    var category = new FormData();
    category.append("status", status);
    (async () => {
      const result = await CategoryService.Trash(category, id);
      if (result.data.status === true) {
        toast.success("Khôi phục thành công", { position: toast.POSITION.TOP_RIGHT,})
        // alert("khôi phục thành công");
        // ("Xóa thành công")
        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thùng rác Category</h1>
        <ToastContainer/>
        <div className="text-end">
          <Link to={"/admin/category"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left" /> Về danh sách
          </Link>
        </div>
        
        <div className="row mt-1 align-items-center">
          <div className="col-md-8">
            <select name className="d-inline me-1">
              <option value>Hành động</option>
              <option value>Bỏ vào thùng rác</option>
            </select>
            <button className="btnapply">Áp dụng</button>
          </div>
          <div className="col-md-4 text-end">
            <nav aria-label="Page navigation example">
              <ul className="pagination pagination-sm justify-content-end">
                <li className="page-item disabled">
                  <Link className="page-link">«</Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    »
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="content-body my-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center" style={{ width: 30 }}>
                <input type="checkbox" id="checkboxAll" />
              </th>
              <th className="text-center" style={{ width: 130 }}>
                Hình ảnh
              </th>
              <th>Name</th>
              <th>Slug</th>
              <th className="text-center" style={{ width: 30 }}>
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category, index) => {
                if (category.status == 0) {
                  return (
                    <tr className="datarow">
                      <td className="text-center">
                        <input type="checkbox" id="checkId" />
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImage + "category/" + category.image}
                          alt="category.jpg"
                        />
                      </td>
                      <td>
                        <div className="name">
                          <Link href="category_index.html"> {category.name}</Link>
                        </div>
                        <div className="function_style">
                          <Link href="#" onClick={()=> handleStatus(category.id)} className="text-primary mx-1">
                            <TbReload />
                          </Link>
                          <Link href="#" onClick={()=> handleDelete(category.id)} className="text-danger mx-1">
                          <FaTrash />
                          </Link>
                        </div>
                      </td>
                      <td> {category.slug}</td>
                      <td className="text-center"> {category.id}</td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TrashCategory;