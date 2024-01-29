import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import MenuService from "../../../service/MenuService";

const CreateMenu = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sort_order, setSort_order] = useState(1);
  const [parent_id, setParent_id] = useState(1);
  const [type, setType] = useState("");
  const [table_id, setTable_id] = useState(1);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());

  const handSubmit = async (event) => {
    event.preventDefault();
    var menu = new FormData();
    menu.append("name", name);
    menu.append("link", link);
    menu.append("sort_order", sort_order);
    menu.append("parent_id", parent_id);
    menu.append("type", type);
    menu.append("table_id", table_id);
    menu.append("description", description);
    menu.append("status", status);
    console.log(menu);
    (async () => {
      const result = await MenuService.Store(menu);

      setLoad(Date.now());
    })();
  };

  return (
    <div className="content">
      <section className="content-header my-2">
        <h1 className="d-inline">Tạo Menu</h1>
        <ToastContainer />
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <Link to="/admin/menu" className="btn btn-primary btn-sm">
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
                <strong>Tên menu (*)</strong>
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
                <strong>Link</strong>
              </label>
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="text"
                name="link"
                id="name"
                className="form-control"
                placeholder="Link"
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Sort Oder</strong>
              </label>
              <input
                value={sort_order}
                onChange={(e) => setSort_order(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Parent Id</strong>
              </label>
              <input
                value={parent_id}
                onChange={(e) => setParent_id(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Type</strong>
              </label>
              <input
                value={type}
                onChange={(e) => setType(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Nhập kiểu"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>
                <strong>Table Id</strong>
              </label>
              <input
                value={table_id}
                onChange={(e) => setTable_id(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="form-control"
                defaultValue={""}
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
                <strong>Trạng thái</strong>
              </label>
            </div>
            <div className="mb-3 text-end">
              <button type="submit" className="btn btn-success" name="THEM">
                <i className="fa fa-save" /> Lưu[Thêm]
              </button>
            </div>
            {/* <CreateMenu/> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateMenu;
