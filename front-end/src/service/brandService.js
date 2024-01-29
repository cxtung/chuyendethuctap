import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("brand/index");
}
function getById(id){
    return httpAxios.get(`brand/show/${id}`)
}
function postBrand(data) {
  return httpAxios.post("brand/store", data);
}
function updateBrand(data,id) {
  return httpAxios.post(`brand/update/${id}`,data);
}
function destroyBrand(id) {
  return httpAxios.delete(`brand/destroy/${id}`);
}
function DeleteTrashBrand(data,id) {  
  return httpAxios.post(`brand/updateSt/${id}`,data);
}
const BrandService = {
  getList: getList,
  getById:getById,
  postBrand: postBrand,
  updateBrand: updateBrand,
  destroyBrand: destroyBrand,
  delete:DeleteTrashBrand
};
export default BrandService;
