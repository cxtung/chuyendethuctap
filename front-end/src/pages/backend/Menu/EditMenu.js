import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuService from "../../../service/MenuService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditMenu = () => {
  const { id } = useParams();
  // const [Menus, setMenus] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [sort_order, setSort_order] = useState("");
  const [parent_id, setParent_id] = useState("");
  const [type, setType] = useState("");
  const [table_id, setTable_id] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  const [load, setLoad] = useState(Date.now());
console.log(id);
  useEffect(() => {
    const funcitionn = async () => {
      const result = await MenuService.getID(id);
      console.log(result);
      setName(result.data.menu.name);
      setLink(result.data.menu.link);
      setSort_order(result.data.menu.sort_order);
      setParent_id(result.data.menu.parent_id);
      setType(result.data.menu.type);
      setTable_id(result.data.menu.table_id);
      setDescription(result.data.menu.description);
      setStatus(result.data.menu.status);
    };
    funcitionn();
  }, [id,load]);

  const handSubmit = (e) => {
    try {
      e.preventDefault();
      var menu = new FormData();
      menu.append("name", name);
      menu.append("link", link);
      menu.append("sort_order", sort_order);
      menu.append("parent_id", parent_id);
      menu.append("type", type);
      menu.append("table_id", table_id);
      menu.append("description", description);
      menu.append("status", status);
      (async () => {
        const result = await MenuService.Update(menu, id);
        // console.log(result.data);
        if (result.data.status === true) {
          setLoad(Date.now());
          toast.success("Sửa menu mới thành công!");
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
          <h1 className="d-inline">Sửa Menu</h1>

          <div className="text-end">
            <a href="/admin/menu" className="btn btn-sm btn-success">
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
                    <strong>Tên Menu (*)</strong>
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
                    <strong>Link</strong>
                  </label>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    name="slug"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Sort_order</strong>
                  </label>
                  <input
                    type="text"
                    value={sort_order}
                    onChange={(e) => setSort_order(e.target.value)}
                    className="form-control"
                  />
                </div><div className="mb-3">
                  <label>
                    <strong>Parent_id</strong>
                  </label>
                  <input
                    type="text"
                    value={parent_id}
                    onChange={(e) => setParent_id(e.target.value)}
                    name="slug"
                    className="form-control"
                  />
                </div><div className="mb-3">
                  <label>
                    <strong>Type</strong>
                  </label>
                  <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    name="slug"
                    className="form-control"
                  />
                </div><div className="mb-3">
                  <label>
                    <strong>Table_id</strong>
                  </label>
                  <input
                    type="text"
                    value={table_id}
                    onChange={(e) => setTable_id(e.target.value)}
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

export default EditMenu;
