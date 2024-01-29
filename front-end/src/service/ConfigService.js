import httpAxios from "../httpAxios";
function getList() {
  return httpAxios.get("config/index");
}
function getById(id){
    return httpAxios.get(`config/show/${id}`)
}
function post(data) {
  return httpAxios.post("config/store", data);
}
function update(data,id) {
  return httpAxios.post(`config/update/${id}`,data);
}
function destroy(id) {
  return httpAxios.delete(`config/destroy/${id}`);
}
function DeleteTrash(data,id) {  
  return httpAxios.post(`config/updateSt/${id}`,data);
}
const ConfigService = {
  getList: getList,
  getById:getById,
  pos: post,
  update: update,
  destroy: destroy,
  DeleteTrash:DeleteTrash
};
export default ConfigService;
