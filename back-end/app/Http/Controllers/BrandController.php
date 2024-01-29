<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use App\Models\Brand;

class BrandController extends Controller
{

    //get list
    function index()
    {
        $brands = Brand::all();
        $data = [
            'status' => true,
            'message' => "Success",
            'brands' => $brands,
        ];
        return response()->json($data, 200);
    }
    //get show id
    function show($id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            $data = [
                'status' => true,
                'message' => 'Erroro',
                //dữ liệu trả về
                'brands' => null
            ];
            return response()->json($data, 404);
        } else {
            $data = [
                'status' => true,
                'message' => 'Success',
                //dữ liệu trả về
                'brands' => $brand
            ];
            return response()->json($data, 200);
        }
    }
    //thêm
    function store(Request $request)
    {
        $brand = new Brand();
        $brand->name = $request->name;
        $brand->slug = Str::of($request->name)->slug('-');
        $brand->sort_order = 1;
        $brand->description = $request->description;
        $brand->status = $request->status;
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = 1; //login
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/brand'), $fileName);
                $brand->image = $fileName;
            }
        }

        if ($brand->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'brands' => $brand
            ];
            return response()->json($data, 200);
        }
    }
    //xóa
    function destroy($id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                //dữ liệu trả về
                'brands' => null
            ];
            return response()->json($data, 404);
        }
        if ($brand->delete()) {
            $data = [
                'status' => true,
                'message' => 'Success',
                //dữ liệu trả về
                'brands' => null
            ];
            return response()->json($data, 200);
        }
    }
    //cập nhật
    public function update(Request $request, $id)
    {
        $brand = Brand::find($id);
        $brand->name = $request->name; //form
        $brand->slug = Str::of($request->name)->slug('-');
        $brand->description = $request->description;
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'), $filename);
            }
        }
        //
        $brand->sort_order = 1; //form
        // $brand->metakey = $request->metakey; //form
        // $brand->metadesc = $request->metadesc; //form
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->updated_by = 1;
        $brand->status = $request->status; //form
        $brand->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true,
                'message' => 'Thành công',
                'brand' => $brand
            ],
            200
        );
    }
    function updateStatus(Request $request, $id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                //dữ liệu trả về
                'brands' => null
            ];
            return response()->json($data, 404);
        }
        $brand->status = $request->status;
        if ($brand->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'brands' => $brand
            ];
            return response()->json($data, 200);
        }
    }
}
