import { useEffect, useState } from "react";
import PostService from "../../../service/PostService";
import TopicService from "../../../service/TopicService";
import { urlImage } from "../../../config";
import { Form, Link } from "react-router-dom";
import { FaRegEdit, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
// import CreatePost from "./CreatePost";
import { toast, ToastContainer } from 'react-toastify';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [topics,setTopics]= useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());
  //call API into postservice
  useEffect(() => {
    (async () => {
      const result = await PostService.getList();
      // result la variable ,posts is name table
      setPosts(result.data.post);
      const resultTopic=await TopicService.getList();
      setTopics(resultTopic.data.topic);
    })();
  }, [load]);
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    console.log(status);
    var post = new FormData();
    post.append("status", status);
    (async () => {
      // const result = await PostService.Delete(post, id);
      PostService.Trash(post, id);
      setLoad(Date.now());
    })();
  };

  const handTrash = (id) => {
    // setStatus(0);
    console.log(status);
    // console.log(`id:${id}`);
    var post = new FormData();
    post.append("status", 0);
    (async () => {
      const result = await PostService.Trash(post, id);
 
        setLoad(Date.now());
   
    })();
  };

  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Bài viết</h1>
        <ToastContainer/>
        <hr style={{ border: "none" }} />
        <div className="text-end">
          <Link to={"/admin/post/create"} className="btn btn-sm btn-success">
            <i className="fa fa-plus" /> Thêm bài viết
          </Link>
          <Link to="/admin/post/trash" className="btn btn-sm btn-danger">
            <i className="fa fa-trash" /> Thùng rác
            </Link>
        </div>
      </section>
      <section className="content-body my-2">
        <div className="row">
         
            
            <div className="row my-2 align-items-center">
              <div className="col-md-6">
                <select name className="d-inline me-1">
                  <option value>Hành động</option>
                  <option value>Bỏ vào thùng rác</option>
                </select>
                <button className="btnapply">Áp dụng</button>
              </div>
              <div className="col-md-6 text-end">
                <input type="text" className="search d-inline" />
                <button className="btnsearch d-inline">Tìm kiếm</button>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: 30 }}>
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th className="text-center" style={{ width: 90 }}>
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
                    if (post.status !== 0) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td>
                            <img
                              className="img-fluid"
                              src={urlImage + "post/" + post.image}
                              alt="category.jpg"
                            />
                          </td>
                          <td>
                            <div className="name">
                              <Link to={"/admin/post/edit/" + post.id}>
                                {post.title}
                              </Link>
                            </div>
                            <div className="function_style">
                              {/* <Link href="#" className="px-1 text-success"> */}
                              {/* <button className="px-1 text-success">
                                <FaToggleOn />
                                {post.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button> */}
                              <button
                                onClick={() => handleStatus(post.id)}
                                className={
                                  post.status === 1
                                    ? "border-0 px-1 text-success"
                                    : "border-0 px-1 text-danger"
                                }
                              >
                                {post.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button>
                              {/* </Link> */}
                              <Link
                                to={"/admin/post/edit/" + post.id}
                                className="px-1 text-primary"
                                key={post.id}
                              >
                                <FaRegEdit />
                                {/* <i className="fa fa-edit" /> */}
                              </Link>
                              <Link
                                to={"/admin/post/show/" + post.id}
                                className="px-1 text-info"
                              >
                                <BiShow />
                              </Link>
                              <Link
                                href="#"
                                className="px-1 text-danger"
                                onClick={() => handTrash(post.id)}
                              >
                                <FaTrash />
                              </Link>
                            </div>
                          </td>
                          <td>{post.topic_id}</td>
                          <td>{post.slug}</td>
                          <td>{post.detail}</td>
                          <td>{post.description}</td>
                          <td>{post.type}</td>
                          <td className="text-center">{post.id}</td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          
        </div>
        
      </section>
    </div>
  );
};

export default ListPost;
