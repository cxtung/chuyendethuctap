import CreateBrand from "../pages/backend/brand/createBrand";
import ListBrand from "../pages/backend/brand/listBrand";
import TrashBrand from "../pages/backend/brand/trashBrand";
// import CreateCategory from "../pages/backend/category/CreateCategory";
import TrashCategory from "../pages/backend/category/TrashCategory";
import ListCategory from "../pages/backend/category/ListCategory";
import Login from "../pages/backend/Login";
import EditCategory from "../pages/backend/category/EditCategory";
import ListProduct from "../pages/backend/product/ListProduct";
import EditProduct from "../pages/backend/product/ListProduct";
import TrashProduct from "../pages/backend/product/ListProduct";
import ImprotProduct from "../pages/backend/product/ImportProduct";
import SaleProduct from "../pages/backend/product/SaleProduct";
import CreateProduct from "../pages/backend/product/CreateProduct";
import EditBrand from "../pages/backend/brand/editBrand";
import ListUser from "../pages/backend/user/ListUser";
import TrashUser from "../pages/backend/user/TrashUser";
import EditUser from "../pages/backend/user/EditUser";
import ListBanner from "../pages/backend/banner/ListBanner";
import EditBanner from "../pages/backend/banner/EditBanner";
import TrashBanner from "../pages/backend/banner/TrashBanner";
import ListContact from "../pages/backend/contract/ListContact";
import ReplyContact from "../pages/backend/contract/ReplyContact";
import TrashContact from "../pages/backend/contract/TrashContact";
import ListMenu from "../pages/backend/Menu/ListMenu";
import EditMenu from "../pages/backend/Menu/EditMenu";
import TrashMenu from "../pages/backend/Menu/TrashMenu";
import ExportOrder from "../pages/backend/order/ExportOrder";
import ListOrder from "../pages/backend/order/ListOrder";
import ListPost from "../pages/backend/post/ListPost";
import CreatePost from "../pages/backend/post/CreatePost";
import TrashPost from "../pages/backend/post/TrashPost";
import EditPost from "../pages/backend/post/EditPost";
import EditTopic from "../pages/backend/topic/EditTopic";
import ListTopic from "../pages/backend/topic/ListTopic";
import TrashTopic from "../pages/backend/topic/TrashTopic";
import CreateBanner from "../pages/backend/banner/CreateBanner";
import CreateMenu from "../pages/backend/Menu/CreateMenu";
import CreateTopic from "../pages/backend/topic/CreateTopic";
import ListCustomer from "../pages/backend/customer/ListCustomer";
import CreateUser from "../pages/backend/user/CreateUser";
import IndexConfig from "../pages/backend/config/IndexConfig";

const routerAdmin = [
  { path: "/admin/login", component: Login },
  //
  { path: "/admin/brand", component: ListBrand },
  { path: "/admin/brand/create", component: CreateBrand },
  { path: "/admin/brand/trash", component: TrashBrand },
  { path: "/admin/brand/edit/:id", component: EditBrand },
  //
  { path: "/admin/category", component: ListCategory },
  { path: "/admin/category/edit/:id", component: EditCategory },
  { path: "/admin/category/trash", component: TrashCategory },
  //
  { path: "/admin/product", component: ListProduct },
  { path: "/admin/product/edit", component: EditProduct },
  { path: "/admin/product/create", component: CreateProduct },
  { path: "/admin/product/trash", component: TrashProduct },
  { path: "/admin/product/import", component: ImprotProduct },
  { path: "/admin/product/productsale", component: SaleProduct },
  { path: "/admin/product/productstore", component: ImprotProduct },
  //
  { path: "/admin/user", component: ListUser },
  { path: "/admin/user/edit/:id", component: EditUser },
  { path: "/admin/user/trash", component: TrashUser },
  { path: "/admin/user/create", component: CreateUser },
  //
  { path: "/admin/user", component: ListUser },
  { path: "/admin/user/edit/:id", component: EditUser },
  { path: "/admin/user/trash", component: TrashUser },
  //
  { path: "/admin/banner", component: ListBanner },
  { path: "/admin/banner/create", component: CreateBanner },
  { path: "/admin/banner/edit/:id", component: EditBanner },
  { path: "/admin/banner/trash", component: TrashBanner },
  //
  { path: "/admin/config", component: IndexConfig },
  //
  { path: "/admin/contact", component: ListContact },
  { path: "/admin/contact/reply", component: ReplyContact },
  { path: "/admin/contact/trash", component: TrashContact },
  //
  { path: "/admin/menu", component: ListMenu },
  { path: "/admin/menu/edit/:id", component: EditMenu },
  { path: "/admin/menu/trash", component: TrashMenu },
  { path: "/admin/menu/create", component: CreateMenu },
  //
  { path: "/admin/order/export", component: ExportOrder },
  { path: "/admin/order/list", component: ListOrder },
  //
  { path: "/admin/post", component: ListPost },
  { path: "/admin/post/create", component: CreatePost },
  { path: "/admin/post/edit/:id", component: EditPost },
  { path: "/admin/post/trash", component: TrashPost },
  //
  { path: "/admin/topic", component: ListTopic },
  { path: "/admin/topic/edit/:id", component: EditTopic },
  { path: "/admin/topic/trash", component: TrashTopic },
  { path: "/admin/topic/create", component: CreateTopic },
  //
  { path: "/admin/customer", component: ListCustomer },
];
export default routerAdmin;
