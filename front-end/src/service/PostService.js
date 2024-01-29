import httpAxios from "../httpAxios";

function getListPost() {
  return httpAxios.get("post/index");
}
function getById(id) {
  console.log("dss", id)
  return httpAxios.get(`post/show/${id}`);
}
function CreatePost(data) {
  return httpAxios.post("post/store", data);
}
function DeletePost(id) {
  return httpAxios.delete("post/destroy/" + id);
}
function TrashPost(data,id) {
  return httpAxios.post(`post/trash/${id}`,data);
}
function UpdatePost(data,id) {
  return httpAxios.post(`post/update/${id}`,data);
}

//nay giong nhu object
const PostService = {
  getList: getListPost,
  getID: getById,
  Store: CreatePost,
  Trash: TrashPost,
  Delete: DeletePost,
  Update: UpdatePost,
};
export default PostService;
