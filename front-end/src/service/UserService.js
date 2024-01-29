import httpAxios from "../httpAxios";


function getListUser() {
  return httpAxios.get("user/index");
}
function getById(id) {
  console.log("dss", id)
  return httpAxios.get(`user/show/${id}`);
}
function CreateUser(data) {
  return httpAxios.post("user/store", data);
}
function DeleteUser(id) {
  return httpAxios.delete("user/destroy/" + id);
}
function TrashUser(data,id) {
  return httpAxios.post(`user/trash/${id}`,data);
}
function UpdateUser(data,id) {
  return httpAxios.post(`user/update/${id}`,data);
}

//nay giong nhu object
const UserService = {
  getList: getListUser,
  getID: getById,
  Store: CreateUser,
  Trash: TrashUser,
  Delete: DeleteUser,
  Update: UpdateUser,
};
export default UserService;
