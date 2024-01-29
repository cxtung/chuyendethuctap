import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("ProductStore/index");
}
// function getById(){
//     return httpAxios.get("ProductStore/index")
// }
function postProductStore(data) {
  return httpAxios.post("ProductStore/store", data);
}
function updateProductStore() {
  return httpAxios.post("ProductStore/update/{id}");
}
function destroyProductStore(id) {
  return httpAxios.delete("ProductStore/destroy/" + id);
}
const ProductStoreService = {
  getList: getList,
  // getById:getById
  postProductStore: postProductStore,
  updateProductStore: updateProductStore,
  destroyProductStore: destroyProductStore,
};
export default ProductStoreService;
