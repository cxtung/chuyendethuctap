import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("product/index");
}
function getById(id){
    return httpAxios.get(`product/show/${id}`)
}
function postProduct(data) {
  return httpAxios.post("product/store", data);
}
function updateProduct() {
  return httpAxios.post("product/update/{id}");
}
function destroyProduct(id) {
  return httpAxios.delete("product/destroy/" + id);
}
function getListSale() {
  return httpAxios.get("product/indexSale");
}
function getListStore() {
  return httpAxios.get("product/indexStore");
}
function storeSale(data) {
  return httpAxios.post("product/storesale",data);
}
function ImportProduct(data) {
  return httpAxios.post("product/import",data);
}

const ProductService = {
  getList: getList,
  getById:getById,
  postProduct: postProduct,
  updateProduct: updateProduct,
  destroyProduct: destroyProduct,
  getListSale:getListSale,
  getListStore:getListStore,
  storeSale:storeSale,
  ImportProduct:ImportProduct
  
};
export default ProductService;
