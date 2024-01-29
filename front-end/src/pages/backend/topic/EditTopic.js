import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TopicService from "../../../service/TopicService";
import { MdSaveAlt } from "react-icons/md";
import { urlImage } from "./../../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTopic = () => {
  const { id } = useParams();
  // const [topics, setTopics] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [sort_order, setSort_order] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());

  // console.log(id)
  // console.log(props.data)
  useEffect(() => {
    (async () => {
      const result = await TopicService.getID(id);
      // result la variable ,topics is name table
      setName(result.data.topic.name);
      setDescription(result.data.topic.description);
      setSlug(result.data.topic.slug);
      setStatus(result.data.topic.status);
      setSort_order(result.data.topic.sort_order);
    })();
  }, [id, load]);
  const handSubmit = async (event) => {
    event.preventDefault();
    var topic = new FormData();
    topic.append("name", name);
    topic.append("description", description);
    topic.append("sort_order", 1);
    topic.append("status", status);
    console.log(topic);
    (async () => {
      const result = await TopicService.Update(topic, id);
      if (result.data.status === true) {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
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
        <h1 className="d-inline">Chỉnh Sửa Chủ Đề</h1>
        <div className="text-end">
          <Link to={"/admin/topic"} className="btn btn-sm btn-success">
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
                  <strong>Tên Chủ Đề (*)</strong>
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

export default EditTopic;
