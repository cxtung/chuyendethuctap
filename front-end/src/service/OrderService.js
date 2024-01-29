import httpAxios from "../httpAxios";
function getList() {
  return httpAxios.get("order/index");
}
function getById(id){
    return httpAxios.get(`order/show/${id}`)
}
function post(data) {
  return httpAxios.post("order/store", data);
}
function update(data,id) {
  return httpAxios.post(`order/update/${id}`,data);
}
function destroy(id) {
  return httpAxios.delete(`order/destroy/${id}`);
}
function DeleteTrash(data,id) {  
  return httpAxios.post(`order/updateSt/${id}`,data);
}
const OrderService = {
  getList: getList,
  getById:getById,
  pos: post,
  update: update,
  destroy: destroy,
  DeleteTrash:DeleteTrash
};
export default OrderService;
