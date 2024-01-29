<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductSale;
use App\Models\ProductStore;
use Illuminate\Support\Str;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    //  //get list
    function index()
    {
        $products = Product::all();
        $data = [
            'status' => true,
            'message' => "Success",
            'products' => $products,
        ];
        return response()->json($data, 200);
    }
    function indexStore()
    {
        $productStores = ProductStore::all();
        $data = [
            'status' => true,
            'message' => "Success",
            'productStores' => $productStores,
        ];
        return response()->json($data, 200);
    }
    function indexSale()
    {
        $productSales = ProductSale::all();
        $data = [
            'status' => true,
            'message' => "Success",
            'productSales' => $productSales,
        ];
        return response()->json($data, 200);
    }
    //get show id
    function show($id)
    {
        $Product = Product::find($id);
        if ($Product == null) {
            $data = [
                'status' => true,
                'message' => 'Erroro',
                //dữ liệu trả về
                'products' => null
            ];
            return response()->json($data, 404);
        } else {
            $data = [
                'status' => true,
                'message' => 'Success',
                //dữ liệu trả về
                'products' => $Product
            ];
            return response()->json($data, 200);
        }
    }
    //thêm
    function store(Request $request)
    {
        $Product = new Product();
        $Product->name = $request->name;
        $Product->category_id = $request->category_id;
        $Product->brand_id = $request->brand_id;
        $Product->detail = $request->detail;
        $Product->price = $request->price;
        $Product->description = $request->description;
        $Product->slug = Str::of($request->name)->slug('-');
        // $Product->sort_order = 5;
        // $Product->parent_id = 1;
        $Product->status = $request->status;
        $Product->created_at = date('Y-m-d H:i:s');
        $Product->created_by = 1; //login
        $Product->updated_by = 2;
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/Product'), $fileName);
                $Product->image = $fileName;
            }
        }

        if ($Product->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'Products' => $Product
            ];
        }
    }
    //xóa
    public function destroy($id)
    {
        $Product = Product::find($id);
        if ($Product == null) {
            $data = [
                'status' => false,
                'message' => 'Success',
                'Products' => null
            ];
            return response()->json($data, 404);
        }
        if ($Product->delete()) {
            $data = [
                'status' => false,
                'message' => 'Success',
                'Products' => null
            ];
            return response()->json($data, 404);
        }
    }
    //cập nhật
    public function update(Request $request, $id)
    {
        $Product = Product::find($id);
        $Product->name = $request->name; //form
        $Product->slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Product->slug . '.' . $extension;
                $Product->image = $filename;
                $files->move(public_path('images/Product'), $filename);
            }
        }
        //
        $Product->sort_order = 1; //form
        $Product->metakey = $request->metakey; //form
        $Product->metadesc = $request->metadesc; //form
        $Product->updated_at = date('Y-m-d H:i:s');
        $Product->updated_by = 1;
        $Product->status = $request->status; //form
        $Product->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true,
                'message' => 'Thành công',
                'Product' => $Product
            ],
            200
        );
    }
    public function storeSale(Request $request)
    {
        $productsale = new ProductSale();
        $productsale->product_id = $request->product_id;
        $productsale->pricesale = $request->pricesale;
        $productsale->qty = 1;
        $productsale->date_begin = $request->date_begin;
        $productsale->date_end = $request->date_end;
        $productsale->created_at = date('Y-m-d H:i:s');
        $productsale->created_by = 1;
        if ($productsale->save()) {
            $result = [
                'status' => true,
                'message' => "thêm dữ liệu vào bảng khuyến mãi thành công",
                'productsale' => $productsale
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'message' => "lỗi",
            'productsale' => null
        ];
        return response()->json($result, 200);
    }
    public function import(Request $request)
    {
        $productstore = new ProductStore();
        $productstore->product_id = $request->product_id;
        $productstore->price = $request->price;
        $productstore->qty = $request->qty;
        $productstore->created_at = date('Y-m-d H:i:s');
        $productstore->created_by = 1;
        if ($productstore->save()) {
            $result = [
                'status' => true,
                'message' => "thêm dữ liệu vào bảng khuyến mãi thành công",
                'productstore' => $productstore
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'message' => "lỗi",
            'productstore' => null
        ];
        return response()->json($result, 200);
    }
}
