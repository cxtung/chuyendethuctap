import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PostService from "../../../service/PostService";
import TopicService from "../../../service/TopicService";

const CreatePost = () => {
    const { id } = useParams();
    const [topics, setTopics] = useState([]);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [detail, setdetail] = useState("");
    const [type, setType] = useState("");
    const[topic_id,setTopic_id]=useState("");
    const [load, setLoad] = useState(Date.now());
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(1);
    useEffect(() => {
        (async () => {
          const result = await TopicService.getList();
          setTopics(result.data.topic);
    
          // result la variable ,products is name table
        })();
      }, [load]);
const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var post = new FormData();
    post.append("topic_id", topic_id);
    post.append("title", title);
    post.append("detail", detail);
    post.append("description", description);
    post.append("type", type);
    post.append("status", status);
    post.append("image", image.files.length === 0 ? "" : image.files[0]);
    console.log(post);
    (async () => {
      const result = await PostService.Store(post);
    
        
        setLoad(Date.now());
   
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
            <Link to="/admin/post" className="btn btn-primary btn-sm">
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
                  <strong>Tên chủ đề(*)</strong>
                </label>
              <div className="box-body p-2 border-bottom">
                  <select
                    name="topic_id"
                    className="form-select"
                    onChange={(e) => setTopic_id(e.target.value)}
                  >
                    <option value>Chọn chủ đề</option>
                    {topics &&
                      topics.map((topic, index) => {
                        return (
                          <option value={topic.id}>{topic.name}</option>
                        );
                      })}
                  </select>
                </div>
                <label>
                  <strong>Tên bài viết(*)</strong>
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  <strong>Chi tiết(*)</strong>
                </label>
                <input
                  value={detail}
                  onChange={(e) => setdetail(e.target.value)}
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
                  <strong>Type(*)</strong>
                </label>
                <input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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
            {/* <CreatePost/> */}
            </form>
          </div>
      </section>
    </div>
        
     );
};
 
export default CreatePost;