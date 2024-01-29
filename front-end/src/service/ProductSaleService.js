import httpAxios from "../httpAxios";

function getList() {
  return httpAxios.get("ProductSale/index");
}
// function getById(){
//     return httpAxios.get("ProductSale/index")
// }
function postProductSale(data) {
  return httpAxios.post("ProductSale/store", data);
}
function updateProductSale() {
  return httpAxios.post("ProductSale/update/{id}");
}
function destroyProductSale(id) {
  return httpAxios.delete("ProductSale/destroy/" + id);
}
const ProductSaleService = {
  getList: getList,
  // getById:getById
  postProductSale: postProductSale,
  updateProductSale: updateProductSale,
  destroyProductSale: destroyProductSale,
};
export default ProductSaleService;
