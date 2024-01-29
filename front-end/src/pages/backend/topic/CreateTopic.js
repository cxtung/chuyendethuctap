import { useEffect, useState } from "react";
import TopicService from "../../../service/TopicService";
const CreateTopic = () => {
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());
  //call API into topicservice
  useEffect(() => {
    (async () => {
      const result = await TopicService.getList();
      // result la variable ,topics is name table
      setTopics(result.data.topics);
    })();
  }, [load]);
  const handSubmit = async (event) => {
    event.preventDefault();
    var image = document.getElementById("image");
    var topic = new FormData();
    topic.append("title", title);
    topic.append("description", description);
    topic.append("status", status);
    topic.append("image", image.files.length === 0 ? "" : image.files[0]);
    console.log(topic);
    (async () => {
      const result = await TopicService.Store(topic);
      if (result.data.status === true) {
        setLoad(Date.now());
      }
    })();
  };
  return (
    <form onSubmit={handSubmit}>
      <div className="mb-3">
        <label>
          <strong>Tên thương hiệu (*)</strong>
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
    </form>
  );
};

export default CreateTopic;
