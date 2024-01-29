import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../../service/PostService";
import TopicService from "../../../service/TopicService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { urlImage } from "../../../config";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [detail, setdetail] = useState("");
    const [type, setType] = useState("");
    const[topic_id,setTopic_id]=useState("");
  const [image, setImage] = useState("");
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
  useEffect(() => {
    const funcitionn = async () => {
      const result = await PostService.getID(id);
      setPost(result.data.post);
      setTitle(result.data.post.title);
      setSlug(result.data.post.slug);
      setDescription(result.data.post.description);
      setdetail(result.data.post.detail);
      setStatus(result.data.post.status);
      setType(result.data.post.type);
      setTopic_id(result.data.post.topic_id);
      setImage(result.data.post.image);
    };
    funcitionn();
  }, []);

  const handSubmit = (e) => {
    try {
      e.preventDefault();
      const image = document.getElementById("image");
      var post = new FormData();
      post.append("topic_id", topic_id);
    post.append("title", title);
    post.append("detail", detail);
    post.append("description", description);
    post.append("type", type);
    post.append("status", status);
      post.append("image", image.files.length === 0 ? "" : image.files[0]);
      (async () => {
        const result = await PostService.Update(post, id);
        // console.log(result.data);
        if (result.data.status === true) {
          setLoad(Date.now());
          toast.success("Sửa post mới thành công!");
        } else {
          toast.error("Sửa thất bại!");
        }
      })();
    } catch (err) {
      alert("loi");
    }
  };
  return (
    <>
      <div
        className="content"
        style={{
          padding: 20,
        }}
      >
        <section
          className="content-header my-2"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 className="d-inline">Sửa bài viết</h1>

          <div className="text-end">
            <a href="/admin/post" className="btn btn-sm btn-success">
              <i className="fa fa-arrow-left" /> Về danh sách
            </a>
          </div>
        </section>
        <section className="content-body my-2">
        <ToastContainer />
          <div className="row">
            <form>
              <div className="col-md-9">
                <div className="mb-3">
                  <label>
                    <strong>Tên bài viết (*)</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>chi tiết (*)</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={detail}
                    onChange={(e) => setdetail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Type (*)</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
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
                    onChange={(e) => setSlug(e.target.value)}
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
                    src={urlImage + "post/" + image}
                    alt="post.jpg"
                  />
                </div>
              </div>
              </div>
              <div className="col-md-3">
                <div className="box-container mt-4 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Chọn trạng thái</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <select
                      name="status"
                      onChange={(value) => {
                        setStatus(value.target.value);
                      }}
                      className="form-control"
                    >
                      <option value={1}>Xuất bản</option>
                      <option value={0}>Chưa xuất bản</option>
                    </select>
                  </div>
                </div>
                <div className="box-container mt-2 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Hình đại diện</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <input type="file" name="image" id="image" className="form-control" />
                  </div>
                </div>
                <div className="box-footer text-end px-2 py-3">
                  <button
                    type="submit"
                    onClick={handSubmit}
                    className="btn btn-success btn-sm text-end"
                  >
                    <i className="fa fa-save" aria-hidden="true" /> Lưu{"[Sửa]"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditPost;
