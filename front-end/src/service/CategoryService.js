import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("category/index");
}
function getById(id){
    return httpAxios.get(`category/show/${id}`)
}
function postCategory(data) {
  return httpAxios.post("category/store", data);
}
function updateCategory(data,id) {
  return httpAxios.post(`category/update/${id}`,data);
}
function destroyCategory(id) {
  return httpAxios.delete(`category/destroy/${id}`);
}
function DeleteTrashCategory(data,id) {  
  return httpAxios.post(`category/updateSt/${id}`,data);
}
const CategoryService = {
  getList: getList,
  getById:getById,
  postCategory: postCategory,
  updateCategory: updateCategory,
  destroyCategory: destroyCategory,
  DeleteTrashCategory:DeleteTrashCategory
};
export default CategoryService;
