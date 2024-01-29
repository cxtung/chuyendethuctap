import httpAxios from "../httpAxios";

function getListBanner() {
  return httpAxios.get("banner/index");
}
function getById(id) {
  console.log("dss", id)
  return httpAxios.get(`banner/show/${id}`);
}
function CreateBanner(data) {
  return httpAxios.post("banner/store", data);
}
function DeleteBanner(id) {
  return httpAxios.delete("banner/destroy/" + id);
}
function TrashBanner(data,id) {
  return httpAxios.post(`banner/trash/${id}`,data);
}
function UpdateBanner(data,id) {
  return httpAxios.post(`banner/update/${id}`,data);
}

//nay giong nhu object
const BannerService = {
  getList: getListBanner,
  getID: getById,
  Store: CreateBanner,
  Trash: TrashBanner,
  Delete: DeleteBanner,
  Update: UpdateBanner,
};
export default BannerService;
