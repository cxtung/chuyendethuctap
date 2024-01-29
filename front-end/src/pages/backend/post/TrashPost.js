import { useEffect, useState } from "react";
import PostService from "../../../service/PostService";
import { urlImage } from "../../../config";
import { TbReload } from "react-icons/tb";
import {  FaTrash} from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const TrashPost = () => {
  const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(Date.now());
    const [status, setStatus] = useState(1);
  //call API into postservice
  useEffect(() => {
    (async () => {
      const result = await PostService.getList();
      // result la variable ,posts is name table
      setPosts(result.data.post);
    })();
  }, [load]);
  const handleDelete = (id) => {
    (async () => {
        const result = await PostService.Delete(id);
        if (result.data.status === true) {
          toast.success('Xóa thành công', {
            position: toast.POSITION.TOP_RIGHT,
            })

            // alert("Xóa thành công");
            // ("Xóa thành công")
            setLoad(Date.now());
          } else {
            alert("lỗi");
          }
    })();
  };
  const handleStatus = (id) => {
    setStatus(1);
    console.log(status);
    var post = new FormData();
    post.append("status", status);
    (async () => {
      const result = await PostService.Trash(post, id);
      if (result.data.status === true) {
        toast.success('Khôi phục thành công', {
          position: toast.POSITION.TOP_RIGHT,
          })

        setLoad(Date.now());
      } else {
        alert("lỗi");
      }
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Thùng rác bài viết</h1>
        <ToastContainer/>
        <div className="text-end">
          <Link to={"/admin/post"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left" /> Về danh sách
          </Link>
        </div>
        
        <div className="row mt-3 align-items-center">
          <div className="col-6">
            <ul className="manager">
              <li>
                <Link to="/admin/post">Tất cả (123)</Link>
              </li>
              <li>
                <Link to="#">Xuất bản (12)</Link>
              </li>
              <li>
                <Link to="#">Rác (12)</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 text-end">
            <input type="text" className="search d-inline" />
            <button className="d-inline btnsearch">Tìm kiếm</button>
          </div>
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
              <th>Tên bài viết</th>
                  <th>Tên chủ đề</th>
                  <th>Slug</th>
                  <th>Chi tiết</th>
                  <th>Mô tả</th>
                  <th>Type</th>
              <th className="text-center" style={{ width: 30 }}>
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post, index) => {
                if (post.status === 0) {
                  return (
                    <tr className="datarow">
                      <td className="text-center">
                        <input type="checkbox" id="checkId" />
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImage + "post/" + post.image}
                          alt="post.jpg"
                        />
                      </td>
                      <td>
                        <div className="name">
                          <Link href="post_index.html"> {post.title}</Link>
                        </div>
                        <div className="function_style">
                          <Link href="#" onClick={()=> handleStatus(post.id)} className="text-primary mx-1">
                            <TbReload />
                          </Link>
                          <Link href="#" onClick={()=> handleDelete(post.id)} className="text-danger mx-1">
                          <FaTrash />
                          </Link>
                        </div>
                      </td>
                      <td>{post.topic_id}</td>
                          <td>{post.slug}</td>
                          <td>{post.detail}</td>
                          <td>{post.description}</td>
                          <td>{post.type}</td>
                      <td className="text-center"> {post.id}</td>
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

export default TrashPost;