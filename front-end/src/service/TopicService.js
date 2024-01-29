import httpAxios from "../httpAxios";
function getListTopic() {
  return httpAxios.get("topic/index");
}
function getById(id) {
  return httpAxios.get(`topic/show/${id}`);
}
function CreateTopic(data) {
  return httpAxios.post("topic/store", data);
}
function DeleteTopic(id) {
  return httpAxios.delete("topic/destroy/" + id);
}
function TrashTopic(data,id) {
  return httpAxios.post(`topic/trash/${id}`,data);
}
function UpdateTopic(data,id) {
  return httpAxios.post(`topic/update/${id}`,data);
}
const TopicService = {
  getList: getListTopic,
  getID: getById,
  Store: CreateTopic,
  Trash: TrashTopic,
  Delete: DeleteTopic,
  Update: UpdateTopic,

};
export default TopicService;
