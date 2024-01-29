import httpAxios from "../httpAxios";
function getListMenu() {
  return httpAxios.get("menu/index");
}
function getById(id) {
  console.log("dss", id)
  return httpAxios.get(`menu/show/${id}`);
}
function CreateMenu(data) {
  return httpAxios.post("menu/store", data);
}
function DeleteMenu(id) {
  return httpAxios.delete("menu/destroy/" + id);
}
function TrashMenu(data,id) {
  return httpAxios.post(`menu/trash/${id}`,data);
}
function UpdateMenu(data,id) {
  return httpAxios.post(`menu/update/${id}`,data);
}

const Menmenuvice = {
  getList: getListMenu,
  getID: getById,
  Store: CreateMenu,
  Trash: TrashMenu,
  Delete: DeleteMenu,
  Update: UpdateMenu,

};
export default Menmenuvice;
