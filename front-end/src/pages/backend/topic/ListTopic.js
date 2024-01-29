import { useEffect, useState } from "react";
import TopicService from "../../../service/TopicService";
import { urlImage } from "./../../../config";
import { Form, Link } from "react-router-dom";
import { FaRegEdit, FaTrash, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListTopic = () => {
  const [topics, setTopics] = useState([]);
  const [name, setName] = useState("");
  const [sort_order, setSort_order] = useState(1);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());
  //call API into topicservice
  useEffect(() => {
    (async () => {
      const result = await TopicService.getList();
      // result la variable ,topics is name table
      setTopics(result.data.topic);
    })();
  }, [load]);
  const handleStatus = (id) => {
    status === 1 ? setStatus(2) : setStatus(1);
    console.log(status);
    var topic = new FormData();
    topic.append("status", status);
    (async () => {
      // const result = await TopicService.Delete(topic, id);
      TopicService.Trash(topic, id);
      setLoad(Date.now());
    })([load]);
  };

  const handDelete = (id) => {
    // setStatus(0);
    console.log(status);
    var topic = new FormData();
    topic.append("status", 0);
    (async () => {
      const result = await TopicService.Trash(topic, id);

      setLoad(Date.now());
    })();
  };

  const handSubmit = async (event) => {
    event.preventDefault();
    var topic = new FormData();
    topic.append("name", name);
    topic.append("description", description);
    topic.append("sort_order", sort_order);
    topic.append("status", status);
    console.log(topic);
    (async () => {
      const result = await TopicService.Store(topic);
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
    })();
  };
  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Chủ đề</h1>
        <hr style={{ border: "none" }} />
        <div className="text-end">
          <Link to={"/admin/topic/create"} className="btn btn-sm btn-success">
            <i className="fa fa-plus" /> Thêm chủ đề
          </Link>
          <Link to="/admin/topic/trash" className="btn btn-sm btn-danger">
            <i className="fa fa-trash" /> Thùng rác
          </Link>
        </div>
      </section>
      <ToastContainer />
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handSubmit}>
              <div className="mb-3">
                <label>
                  <strong>Tên Chủ đề (*)</strong>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nhập tên chủ đề"
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
                <input
                  value={sort_order}
                  onChange={(e) => setSort_order(e.target.value)}
                  className="form-control"
                  placeholder=""
                  defaultValue={"1"}
                />
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
              {/* <CreateTopic/> */}
            </form>
          </div>
          <div className="col-md-8">
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="manager">
                  <li>
                    <Link href="topic_index.html">Tất cả (123)</Link>
                  </li>
                  <li>
                    <Link href="#">Xuất bản (12)</Link>
                  </li>
                  <li>
                    <Link to="/admin/topic/trash">Rác (12)</Link>
                  </li>
                </ul>
              </div>
            </div>
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
                    Tên Chủ đề
                  </th>
                  <th className="text-center" style={{ width: 90 }}>
                    Tên slug
                  </th>
                  <th className="text-center" style={{ width: 90 }}>
                    Tên Description
                  </th>
                  <th className="text-center" style={{ width: 30 }}>
                    ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {topics &&
                  topics.map((topic, index) => {
                    if (topic.status !== 0) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td>
                            <div className="name">
                              <Link to={"/admin/topic/edit/" + topic.id}>
                                {topic.title}
                              </Link>
                            </div>
                            <div className="function_style">
                              {/* <Link href="#" className="px-1 text-success"> */}
                              {/* <button className="px-1 text-success">
                                <FaToggleOn />
                                {topic.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button> */}
                              <button
                                onClick={() => handleStatus(topic.id)}
                                className={
                                  topic.status === 1
                                    ? "border-0 px-1 text-success"
                                    : "border-0 px-1 text-danger"
                                }
                              >
                                {topic.status === 1 ? (
                                  <FaToggleOn />
                                ) : (
                                  <FaToggleOff />
                                )}
                              </button>
                              {/* </Link> */}
                              <Link
                                to={"/admin/topic/edit/" + topic.id}
                                className="px-1 text-primary"
                                key={topic.id}
                              >
                                <FaRegEdit />
                                {/* <i className="fa fa-edit" /> */}
                              </Link>
                              <Link
                                to={"/admin/topic/show/" + topic.id}
                                className="px-1 text-info"
                              >
                                <BiShow />
                              </Link>
                              <Link
                                href="#"
                                className="px-1 text-danger"
                                onClick={() => handDelete(topic.id)}
                              >
                                <FaTrash />
                              </Link>
                            </div>
                          </td>
                          <td>{topic.slug}</td>
                          <td>{topic.description}</td>
                          <td className="text-center">{topic.id}</td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListTopic;
